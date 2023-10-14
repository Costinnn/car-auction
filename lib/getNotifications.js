import prismadb from "./prismadb";
import getUserId from "./getUserId";

const getNotifications = async () => {
  const userId = await getUserId();
  try {
    if (userId) {
      const notifications = await prismadb.notification.findMany({
        where: { userId: userId },
        orderBy: { createdAt: "desc" },
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

export default getNotifications;
