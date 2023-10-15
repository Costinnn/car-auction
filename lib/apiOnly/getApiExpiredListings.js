import prismadb from "../prismadb";

const getApiExpiredListings = async (userBiddedListingsIds) => {
  const dateNow = new Date();
  try {
    if (userBiddedListingsIds.length > 0) {
      const expiredListings = await prismadb.carpost.findMany({
        where: {
          id: { in: userBiddedListingsIds },
          expiresAt: { lt: dateNow },
        },
        select: { id: true, title: true },
      });

      if (expiredListings) {
        return expiredListings;
      }
      return null;
    }

    return null;
  } catch (err) {
    console.log(err);
    return "Error while getting expired listings!";
  }
};
export default getApiExpiredListings;
