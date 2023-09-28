import prismadb from "@/lib/prismadb";
import getUserId from "@/lib/getUserId";
import { NextResponse } from "next/server";

export async function PATCH(request) {
  try {
    const reqData = await request.json();
    const { name, image, bio } = reqData;
    const userId = await getUserId();

    const isUpdated = await prismadb.user.update({
      where: { id: userId },
      data: {
        ...(name ? { name: name } : {}),
        ...(image && image !== "delete" ? { image: image } : {}),
        ...(image && image === "delete" ? { image: "" } : {}),
        ...(bio ? { bio: bio } : {}),
      },
    });

    if (isUpdated) {
      return NextResponse.json({ message: "Success" }, { status: 200 });
    }

    return NextResponse.json(
      { error: "Could not update profile!" },
      { status: 500 }
    );
  } catch (err) {
    return NextResponse.json(
      { error: `PROFILE_API_ERROR ${err}` },
      { status: 500 }
    );
  }
}
