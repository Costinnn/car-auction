import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function PATCH(request) {
  try {
    const reqData = await request.json();
    let isPostIdFound = false;

    const savedListingsData = await prismadb.user.findUnique({
      where: { id: reqData.userId },
      select: { savedListingsIds: true },
    });

    savedListingsData.savedListingsIds.forEach((item) => {
      if (item === reqData.postId) isPostIdFound = true;
    });

    let savedListingsChanged = null;
    if (isPostIdFound) {
      // delete postId from savedListingsIds
      savedListingsChanged = await prismadb.user.update({
        where: { id: reqData.userId },
        data: {
          savedListingsIds: {
            set: savedListingsData.savedListingsIds.filter(
              (item) => item !== reqData.postId
            ),
          },
        },
      });
    } else {
      // add postId from savedListingsIds
      savedListingsChanged = await prismadb.user.update({
        where: { id: reqData.userId },
        data: { savedListingsIds: { push: reqData.postId } },
      });
    }

    if (savedListingsChanged) {
      return NextResponse.json({ message: "Success" }, { status: 200 });
    }

    return NextResponse.json(
      { error: "Could not update user favorites!" },
      { status: 500 }
    );
  } catch (err) {
    return NextResponse.json(
      { error: `ADD_TO_FAVORITES_API_ERROR:${err}` },
      { status: 500 }
    );
  }
}
