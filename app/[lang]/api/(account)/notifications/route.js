import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";
import getUserId from "@/lib/getUserId";
import getApiUserFavorites from "@/lib/apiOnly/getApiUserFavorites";
import getApiUserSettings from "@/lib/apiOnly/getApiUserSettings";
import getApiUserNotifications from "@/lib/apiOnly/getApiUserNotifications";

export async function POST() {
  try {
    const userId = await getUserId();
    const userFavoritesIds = await getApiUserFavorites(userId);
    const userNotifications = await getApiUserNotifications(userId);
    const notifResponseStatus = { ending: 0, ended: 0, outbid: 0, new: 0 };

    if (userId && userFavoritesIds && userNotifications) {
      // get FavoritePosts data
      const favoritePosts = await prismadb.carpost.findMany({
        where: { id: { in: userFavoritesIds.savedListingsIds } },
        select: { id: true, expiresAt: true, title: true },
      });

      const userSettings = await getApiUserSettings(userId);

      // FAVORITES NOTIFICATION CHECK
      if (
        favoritePosts.length > 0 &&
        (userSettings.endNotify || userSettings.resultsNotify)
      ) {
        const dateNow = new Date().getTime();

        for (const favPost of favoritePosts) {
          const auctionExpireAt = favPost.expiresAt.getTime();

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
      // NEW AUCTIONS NOTIFICATION CHECK
      // TYPE: new - random

      // OUTBID NOTIFICATION CHECK
      // TYPE: outbid - when user bidded

      // RESULTS NOTIFICATION CHECK
      // TYPE: results - when user bidded and auction ended

      return NextResponse.json({ message: "Success" }, { status: 200 });
    }

    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { error: `NOTIFICATIONS_API_ERROR ${err}` },
      { status: 500 }
    );
  }
}
