import prismadb from "./prismadb";
import getUserId from "@/lib/getUserId";

// GET type DB POSTS

export async function getListingsType(type) {
  try {
    let posts = null;
    if (type === "mine") {
      const userId = await getUserId();
      posts = await prismadb.carpost.findMany({
        where: { sellerId: userId },
      });

      posts.forEach((post) => post.extImages.splice(5));
    }

    if (type === "bidded") {
    }

    if (type === "saved") {
    }

    if (posts) {
      return posts;
    }
    return null;
  } catch (err) {
    return `There was an error while getting Listings type! ${err}`;
  }
}
