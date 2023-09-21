import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function PATCH(request) {
  try {
    const reqData = await request.json();
    console.log("API", reqData.postId);

    // update views number
    const updatedViews = await prismadb.carpost.update({
      where: { id: reqData.postId },
      data: { views: { increment: 1 } },
    });

    if (updatedViews) {
      return NextResponse.json({ message: "Success" }, { status: 200 });
    }

    return NextResponse.json(
      { error: "Could not increment views!" },
      { status: 500 }
    );
  } catch (err) {
    return NextResponse.json(
      { error: `ADD_VIEWS_API_ERROR ${err}` },
      { status: 500 }
    );
  }
}
