import { headers } from "next/headers";
import { getServerSession } from "@/lib/getServerSession";
import prismadb from "./prismadb";

const getUserId = async () => {
  const session = await getServerSession(headers().get("cookie") ?? "");

  if (session) {
    try {
      const userId = await prismadb.user.findMany({
        where: {
          email: session.user.email,
        },
        select: { id: true },
      });

      if (userId[0].id) {
        return userId[0].id;
      }
      return null;
    } catch (err) {
      return `There was an error while getting user Id!  ${err}`;
    }
  } else {
    return null;
  }
};

export default getUserId;
