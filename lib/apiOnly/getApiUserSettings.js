import prismadb from "../prismadb";

const getApiUserSettings = async (userId) => {
  try {
    if (userId) {
      const userSettings = await prismadb.user.findUnique({
        where: { id: userId },
        select: {
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

export default getApiUserSettings;
