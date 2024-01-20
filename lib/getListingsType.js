import prismadb from "./prismadb";
import getUserId from "@/lib/getUserId";

// GET type DB POSTS

export async function getListingsType(type) {
  try {
    let posts = null;
    const userId = await getUserId();

    // OWN LISTINGS
    if (type === "mine") {
      posts = await prismadb.carpost.findMany({
        where: { sellerId: userId },
        select: {
          id: true,
          extImages: true,
          mainImage: true,
          title: true,
          location: true,
          expiresAt: true,
          engineCylinders: true,
          engineCapacity: true,
          gears: true,
          transmission: true,
          engineConfiguration: true,
          mileage: true,
          sellerId: true,
          minimumBid: true,
          bids: true,
          bidValue: true,
        },
      });
    }

    // BIDDED LISTINGS
    if (type === "bidded") {
      const allBids = await prismadb.bid.findMany({
        where: { bidderId: userId },
      });

      const removedDuplicatedBids = allBids.filter((bid, idx) => {
        return (
          idx === allBids.findIndex((bid2) => bid.carPostId === bid2.carPostId)
        );
      });

      if (removedDuplicatedBids) {
        const removedDuplicatedBidsArr = removedDuplicatedBids.map(
          (bid) => bid.carPostId
        );

        posts = await prismadb.carpost.findMany({
          where: { id: { in: removedDuplicatedBidsArr } },
          select: {
            id: true,
            mainImage: true,
            extImages: true,
            title: true,
            location: true,
            expiresAt: true,
            engineCylinders: true,
            engineCapacity: true,
            gears: true,
            transmission: true,
            engineConfiguration: true,
            mileage: true,
            sellerId: true,
            minimumBid: true,
            bids: true,
            bidValue: true,
          },
        });
        posts.forEach((post) => post.extImages.splice(5));
      }
    }

    // SAVED LISTINGS
    if (type === "saved") {
      var favoritesIds = await prismadb.user.findUnique({
        where: { id: userId },
        select: { savedListingsIds: true },
      });

      if (favoritesIds) {
        posts = await prismadb.carpost.findMany({
          where: { id: { in: favoritesIds.savedListingsIds } },
          select: {
            id: true,mainImage:true,
            extImages: true,
            title: true,
            location: true,
            expiresAt: true,
            engineCylinders: true,
            engineCapacity: true,
            gears: true,
            transmission: true,
            engineConfiguration: true,
            mileage: true,
            sellerId: true,
            minimumBid: true,
            bids: true,
            bidValue: true,
          },
        });
      }
    }

    // RESPONSE
    if (posts) {
      return { posts, userId, userFavorites: favoritesIds?.savedListingsIds };
    }
    return null;
  } catch (err) {
    return `There was an error while getting Listings type! ${err}`;
  }
}
