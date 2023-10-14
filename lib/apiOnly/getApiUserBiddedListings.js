import prismadb from "../prismadb";

const getApiUserBiddedListings = async (userId) => {
  try {
    if (userId) {
      const biddedListingsIds = await prismadb.user.findUnique({
        where: { id: userId },
        select: { biddedListingsIds: true },
      });

      if (biddedListingsIds) {
        return biddedListingsIds.biddedListingsIds;
      }
      return null;
    }

    return null;
  } catch (err) {
    console.log(err);
    return "Error while getting user bidded listings!";
  }
};
export default getApiUserBiddedListings;
