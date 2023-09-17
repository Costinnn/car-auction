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
      });
      posts.forEach((post) => post.extImages.splice(5));
    }

    // BIDDED LISTINGS
    if (type === "bidded") {
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
