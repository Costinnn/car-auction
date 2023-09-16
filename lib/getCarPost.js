import prismadb from "./prismadb";

// GET DB POST

export async function getCarPost(postId) {
  try {
    const carPost = await prismadb.carpost.findUnique({
      where: {
        id: postId,
      },
    });
    if (carPost) {
      return carPost;
    }
    return null;
  } catch (err) {
    return `There was an error while getting CarPost! ${err}`;
  }
}
