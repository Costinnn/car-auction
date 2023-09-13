import prismadb from "./prismadb";

// GET all DB POSTS

export async function getListings() {
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
    },
  });

  posts.forEach((post) => post.extImages.splice(5));

  return posts;
}
