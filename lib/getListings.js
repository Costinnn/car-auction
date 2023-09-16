import prismadb from "./prismadb";

// GET all DB POSTS

export async function getListings() {
  try {
    const posts = await prismadb.carpost.findMany({
      select: {
        id: true,
        extImages: true,
        title: true,
        location: true,
        expiresAt: true,
        currentBid: true,
        engineCylinders: true,
        engineCapacity: true,
        gears: true,
        transmission: true,
        engineConfiguration: true,
        mileage: true,
        sellerId: true,
      },
    });

    if (posts) {
      posts.forEach((post) => post.extImages.splice(5));
      return posts;
    }

    return null;
  } catch (err) {
    console.log(err);
    return `There was an error while getting Listings! ${err}`;
  }
}
