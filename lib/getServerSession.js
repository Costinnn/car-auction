// SERVERSIDE function
// FUNCTION THAT VERIFY NEXT_AUTH USER SESSION

export async function getServerSession(cookie) {
  const response = await fetch(
    `${process.env.NEXTAUTH_URL}/en/api/auth/session`,
    {
      headers: {
        cookie,
      },
    }
  );
  const session = await response.json();
  return Object.keys(session).length > 0 ? session : null;
}

// to use
// import { headers } from 'next/headers'
// import { getServerSession } from "@/lib/getServerSession";

// const session = await getServerSession(headers().get('cookie') ?? '');

// CLIENTSIDE in in Providers
