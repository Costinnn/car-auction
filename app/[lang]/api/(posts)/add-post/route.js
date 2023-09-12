import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";
import getUserId from "@/lib/getUserId";

export async function POST(request) {
  const userId = await getUserId();

  try {
    const reqData = await request.json();

    let currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 5);

    const newPost = await prismadb.carpost.create({
      data: {
        ...reqData,
        expiresAt: currentDate,
        title: `${reqData.year} ${reqData.brand} ${reqData.model} `,
        sellerId: userId,
      },
    });

    return NextResponse.json(newPost);
  } catch (err) {
    return NextResponse.json(err);
  }
}
