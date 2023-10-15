import prismadb from "./prismadb";
import getUserId from "./getUserId";

const getUserAccInfo = async () => {
  const userId = await getUserId();

  try {
    if (userId) {
      const userSettings = await prismadb.user.findUnique({
        where: { id: userId },
        select: {
          image: true,
          name: true,
          bio: true,
          createdAt: true,
          weeklyEmail: true,
          outbidEmail: true,
          newListingsNotify: true,
          outbidNotify: true,
          endingNotify: true,
          favResultsNotify: true,
          bidResultsNotify: true,
        },
      });

      if (userSettings) {
        return userSettings;
      }
      return null;
    }

    return null;
  } catch (err) {
    console.log(err);
    return "Error while getting user settings!";
  }
};

export default getUserAccInfo;
