import prismadb from "@/lib/prismadb";
import getUserId from "@/lib/getUserId";
import { NextResponse } from "next/server";

export async function PATCH(request) {
  try {
    const reqData = await request.json();
    const userId = await getUserId();

    const isUpdated = await prismadb.user.update({
      where: { id: userId },
      data: { [reqData.field]: reqData.value },
    });

    if (isUpdated) {
      return NextResponse.json({ message: "Success" }, { status: 200 });
    }

    return NextResponse.json(
      { error: "Could not update settings!" },
      { status: 500 }
    );
  } catch (err) {
    return NextResponse.json(
      { error: `SETTINGS_API_ERROR ${err}` },
      { status: 500 }
    );
  }
}
