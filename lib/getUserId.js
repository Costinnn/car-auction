import { headers } from "next/headers";
import { getServerSession } from "@/lib/getServerSession";
import prismadb from "./prismadb";

const getUserId = async () => {
  const session = await getServerSession(headers().get("cookie") ?? "");

  try {
    const userId = await prismadb.user.findMany({
      where: {
        email: session.user.email,
      },
      select: { id: true },
    });

    return userId[0].id;
  } catch (err) {
    return "There was an error while getting user Id!";
  }
};

export default getUserId;
