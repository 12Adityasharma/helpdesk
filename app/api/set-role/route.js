// app/api/set-role/route.js
import { NextResponse } from "next/server";

export async function POST(req) {
  const { userId, email } = await req.json();

  // ✅ Admin if email contains at least one digit
  const isAdmin = /\d/.test(email); // regex checks for any digit 0-9
  const role = isAdmin ? "admin" : "user";

  const res = await fetch(`https://api.clerk.com/v1/users/${userId}/metadata`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${process.env.CLERK_SECRET_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      public_metadata: {
        role,
      },
    }),
  });

  if (res.ok) {
    return NextResponse.json({ success: true, role });
  } else {
    const err = await res.text();
    return NextResponse.json({ success: false, error: err }, { status: 500 });
  }
}
