import bcrypt from "bcrypt";
import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

// REGISTER API ROUTE
export async function POST(request) {
  try {
    const reqData = await request.json();
    const { email, name, password } = reqData;

    // 1. Search for email in DB
    const existingUser = await prismadb.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {
      return NextResponse.json({ error: "Email taken!" }, { status: 500 });
    }

    // 2. Search for username in DB

    // 3. If no email & username found in DB, create User
    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prismadb.user.create({
      data: {
        email,
        name,
        hashedPassword,
        image: "",
        emailVerified: new Date(),
      },
    });

    if (user) {
      return NextResponse.json({ message: "Success" }, { status: 201 });
    }
    return NextResponse.json(
      { error: "Could not create user!" },
      { status: 500 }
    );
  } catch (err) {
    return NextResponse.json(
      { error: `REGISTER_API_ERROR: ${err}` },
      { status: 500 }
    );
  }
}
