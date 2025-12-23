import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { message } = body;

  const LINE_API_URL = "https://api.line.me/v2/bot/message/push";
  const CHANNEL_ACCESS_TOKEN = process.env.LINE_MESSAGING_API_TOKEN;
  const GROUP_ID = process.env.LINE_GROUP_ID;

  try {
    const response = await fetch(LINE_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${CHANNEL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({
        to: GROUP_ID,
        messages: [{ type: "text", text: message }],
      }),
    });

    if (!response.ok) throw new Error("Failed to send message");
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
