import prismadb from "../prismadb";

const getApiUserNotifications = async (userId) => {
  try {
    if (userId) {
      const notifications = await prismadb.notification.findMany({
        where: { userId: userId },
      });

      if (notifications) {
        return notifications;
      }
      return [];
    }

    return [];
  } catch (err) {
    console.log(err);
    return "Error while getting notifications!";
  }
};

export default getApiUserNotifications;
