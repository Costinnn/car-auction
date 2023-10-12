import prismadb from "@/lib/prismadb";
import getUserId from "@/lib/getUserId";
import { NextResponse } from "next/server";

export async function PATCH() {
  try {
    const userId = await getUserId();

    const isUpdated = await prismadb.notification.updateMany({
      where: { userId: userId },
      data: { isSeen: true },
    });

    if (isUpdated) {
      return NextResponse.json({ message: "Success" }, { status: 200 });
    }

    return NextResponse.json(
      { error: "Could not update notification seen status!" },
      { status: 500 }
    );
  } catch (err) {
    return NextResponse.json(
      { error: `MARKNOTIFICATIONS_API_ERROR ${err}` },
      { status: 500 }
    );
  }
}
