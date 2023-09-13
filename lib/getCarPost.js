import prismadb from "./prismadb";

// GET DB POST

export async function getCarPost(postId) {
  const carPost = await prismadb.carpost.findUnique({
    where: {
      id: postId,
    },
  });
  return carPost;
}
