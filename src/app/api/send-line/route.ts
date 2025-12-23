import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // ดึงค่าทั้งหมดออกมารอไว้
    const { username, mobile, email, message } = body;

    let finalMessage = "";

    // ตรวจสอบว่าเป็นข้อมูลจากหน้า Contact Us หรือไม่ (เช็คว่ามี username ส่งมาด้วยไหม)
    if (username) {
      // สำหรับหน้า Contact Us: จัดฟอร์แมตข้อมูลทั้งหมด
      finalMessage = [
        "🚀 มีการติดต่อใหม่ (Contact Us)",
        "━━━━━━━━━━━━━━━",
        `👤 ชื่อ: ${username || "-"}`,
        `📞 เบอร์โทร: ${mobile || "-"}`,
        `📧 อีเมล: ${email || "-"}`,
        `📝 ข้อความ: ${message || "-"}`,
        "━━━━━━━━━━━━━━━",
      ].join("\n");
    } else if (message) {
      // สำหรับหน้า Price Estimation (ส่ง message สำเร็จรูปมาแล้ว)
      finalMessage = message;
    } else {
      throw new Error("No data provided");
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

    // ตรวจสอบ Response จาก LINE
    if (!response.ok) {
      const responseData = await response.json();
      console.error("LINE API Error Details:", responseData);
      throw new Error(responseData.message || "Failed to send message to LINE");
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
