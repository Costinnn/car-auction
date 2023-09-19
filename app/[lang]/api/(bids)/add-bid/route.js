import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";
import getUserId from "@/lib/getUserId";

export async function POST(request) {
  const userId = await getUserId();

  try {
    const reqData = await request.json();
    const { bidValue, postId } = reqData;

    // mark all bids with isCurrentBid:false
    await prismadb.bid.updateMany({
      where: { carPostId: postId },
      data: {
        isCurrentBid: false,
      },
    });

    // create new bid as current biggest bid
    const newBid = await prismadb.bid.create({
      data: {
        bidValue,
        bidder: { connect: { id: userId } },
        carPost: { connect: { id: postId } },
        isCurrentBid: true,
      },
    });

    // update current bid on carpost data
    const carpostBidUpdate = await prismadb.carpost.update({
      where: { id: postId },
      data: { bidValue },
    });

    if (newBid && carpostBidUpdate) {
      return NextResponse.json({ message: "Success" }, { status: 201 });
    }

    return NextResponse.json({ error: "Could not add bid!" }, { status: 500 });
  } catch (err) {
    return NextResponse.json(
      { error: `ADD_BID_API_ERROR ${err}` },
      { status: 500 }
    );
  }
}
