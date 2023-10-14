import prismadb from "../prismadb";

const getApiUserBids = async (userId) => {
  try {
    if (userId) {
      const userBids = await prismadb.bid.findMany({
        where: { bidderId: userId },
      });

      if (userBids) {
        return userBids;
      }
      return null;
    }

    return null;
  } catch (err) {
    console.log(err);
    return "Error while getting user bids!";
  }
};
export default getApiUserBids;
