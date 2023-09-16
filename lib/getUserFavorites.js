import prismadb from "./prismadb";
import getUserId from "./getUserId";

const getUserFavorites = async () => {
  const userId = await getUserId();

  try {
    if (userId) {
      const savedListingsIds = await prismadb.user.findUnique({
        where: { id: userId },
        select: { savedListingsIds: true },
      });

      if (savedListingsIds) {
        return savedListingsIds;
      }
      return null;
    }

    return null;
  } catch (err) {
    console.log(err);
    return "Error while getting user favorites!";
  }
};
export default getUserFavorites;
