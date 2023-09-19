import prismadb from "./prismadb";

const getBidCurrent = async (postId) => {
  try {
    const currentBid = await prismadb.bid.findMany({
      where: { carPostId: postId, isCurrentBid: true },
      select: { bidValue: true },
    });

    if (currentBid[0]) return currentBid[0];
    return null;
  } catch (err) {
    return `There was an error while getting current Bid!  ${err}`;
  }
};

export default getBidCurrent;
