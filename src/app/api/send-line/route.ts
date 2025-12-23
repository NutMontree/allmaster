import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // รองรับทั้งแบบส่ง message มาตรงๆ (จากหน้าคำนวณราคา)
    // และแบบส่งแยก field (จากหน้า Contact Us)
    let finalMessage = "";

    if (body.message) {
      // สำหรับหน้า Price Estimation
      finalMessage = body.message;
    } else {
      // สำหรับหน้า Contact Us (username, mobile, email, message)
      const { username, mobile, email, message } = body;
      finalMessage = `🚀 มีการติดต่อใหม่ (Contact Us)\n\n👤 ชื่อ: ${username}\n📞 เบอร์โทร: ${mobile}\n📧 อีเมล: ${email}\n📝 ข้อความ: ${message}`;
    }

    const LINE_API_URL = "https://api.line.me/v2/bot/message/push";
    const CHANNEL_ACCESS_TOKEN = process.env.LINE_MESSAGING_API_TOKEN;
    const GROUP_ID = process.env.LINE_GROUP_ID;

    const response = await fetch(LINE_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${CHANNEL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({
        to: GROUP_ID,
        messages: [{ type: "text", text: finalMessage }],
      }),
    });

    const responseData = await response.json();

    if (!response.ok) {
      console.error("LINE API Error:", responseData);
      throw new Error("Failed to send message to LINE");
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Server Error:", error.message);
    return NextResponse.json(
      { success: false, error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
