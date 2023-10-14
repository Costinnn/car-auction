import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";
import getUserId from "@/lib/getUserId";
import getApiUserFavorites from "@/lib/apiOnly/getApiUserFavorites";
import getApiUserSettings from "@/lib/apiOnly/getApiUserSettings";
import getApiUserNotifications from "@/lib/apiOnly/getApiUserNotifications";
import getApiUserBiddedListings from "@/lib/apiOnly/getApiUserBiddedListings";
import getApiUserBids from "@/lib/apiOnly/getApiUserBids";

export async function POST() {
  try {
    const userId = await getUserId();
    const userSettings = await getApiUserSettings(userId);
    const userFavoritesIds = await getApiUserFavorites(userId);
    const userBiddedListingsIds = await getApiUserBiddedListings(userId);
    const userNotifications = await getApiUserNotifications(userId);
    const notifResponseStatus = { ending: 0, ended: 0, outbid: 0, new: 0 };

    if (userId) {
      // ----- FAVORITES NOTIFICATION CHECK
      if (userFavoritesIds.length > 0 && userNotifications) {
        // get FavoritePosts data
        const favoritePosts = await prismadb.carpost.findMany({
          where: { id: { in: userFavoritesIds.savedListingsIds } },
          select: { id: true, expiresAt: true, title: true },
        });

        if (
          favoritePosts.length > 0 &&
          (userSettings.endNotify || userSettings.resultsNotify)
        ) {
          const dateNow = new Date().getTime();

          for (const favPost of favoritePosts) {
            const auctionExpireAt = favPost.expiresAt.getTime();
            // --ENDING NOTIFICATION CHECK
            // TYPE: ending (in 5 hours)
            if (
              userSettings.endNotify &&
              dateNow <= auctionExpireAt &&
              dateNow - 5 * 60 * 60 * 1000 >= auctionExpireAt
            ) {
              // check if notification already exists, with carPostId & type
              const notifExists = userNotifications.filter(
                (notif) =>
                  notif.carPostId === favPost.id && notif.type === "ending"
              );
              if (notifExists.length === 0) {
                // create ending notification
                const newEndingNotif = await prismadb.notification.create({
                  data: {
                    type: "ending",
                    link: `car-post/${favPost.id}`,
                    message: `Auction: ${favPost.title} is going to expire soon!`,
                    carPost: { connect: { id: favPost.id } },
                    user: { connect: { id: userId } },
                  },
                });
                notifResponseStatus.ending++;
              }
            }
            // --ENDED NOTIFICATION CHECK
            // TYPE: ended
            if (userSettings.resultsNotify && dateNow > auctionExpireAt) {
              // check if notification exists with carPostId & type
              const notifExists = userNotifications.filter(
                (notif) =>
                  notif.carPostId === favPost.id && notif.type === "ended"
              );

              if (notifExists.length === 0) {
                //create ended notification
                const newNotif = await prismadb.notification.create({
                  data: {
                    type: "ended",
                    link: `car-post/${favPost.id}`,
                    message: `Auction: ${favPost.title} ended!`,
                    carPost: { connect: { id: favPost.id } },
                    user: { connect: { id: userId } },
                  },
                });
                notifResponseStatus.ended++;
              }
            }
          }
        }

        // return NextResponse.json({ message: "Success" }, { status: 200 });
      }

      // ----- BIDDED NOTIFICATION CHECK
      if (userBiddedListingsIds.length > 0 && userNotifications) {
       
        // --OUTBID NOTIFICATION CHECK
        // TYPE: outbid - when user bidded
        const userBids = await getApiUserBids(userId);

        for (const biddedCarpostId of userBiddedListingsIds) {
          let stillCurrentBid = false;
          let lastBid = { createdAt: 0 };
          for (const bid of userBids) {
            if (
              biddedCarpostId === bid.carPostId &&
              bid.isCurrentBid === true
            ) {
              // check if exists an active bid for carpost
              stillCurrentBid = true;
            } else {
              // check if is last bid by date and store it

              if (lastBid.createdAt < bid.createdAt) {
                lastBid = bid;
              }
            }
          }

          if (!stillCurrentBid) {
            // if no active bid found its been outbidded, check if notification already exists
            const notifExists = userNotifications.filter(
              (notif) =>
                notif.carPostId === biddedCarpostId &&
                notif.type === "outbid" &&
                notif.extraInfo === lastBid.id
            );
            if (notifExists.length === 0) {
              // if no notification exists, create one

              const newOutbidNotif = await prismadb.notification.create({
                data: {
                  type: "outbid",
                  link: `car-post/${biddedCarpostId}`,
                  message: `You have been outbidded!`,
                  extraInfo: lastBid.id,
                  carPost: { connect: { id: biddedCarpostId } },
                  user: { connect: { id: userId } },
                },
              });
            }
          }
        }

        // --RESULTS NOTIFICATION CHECK
        // TYPE: results - when user bidded and auction ended
      }

      // --NEW AUCTIONS NOTIFICATION CHECK
      // TYPE: new - random

      return NextResponse.json({ message: "Success" }, { status: 200 });
    }
    return NextResponse.json({ message: "Not authenticated" }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { error: `NOTIFICATIONS_API_ERROR ${err}` },
      { status: 500 }
    );
  }
}
