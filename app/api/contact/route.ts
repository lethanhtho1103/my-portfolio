import { NextResponse } from "next/server";

type Payload = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
};

function isNonEmptyString(v: unknown, min = 1) {
  return typeof v === "string" && v.trim().length >= min;
}

function isEmail(v: string) {
  // Regex nhẹ đủ dùng cho demo; production có thể thay bằng validator/zod.
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export async function POST(req: Request) {
  const body = (await req.json().catch(() => null)) as Payload | null;
  if (!body) {
    return NextResponse.json(
      { ok: false, message: "Body không hợp lệ." },
      { status: 400 },
    );
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (!isNonEmptyString(name, 2)) {
    return NextResponse.json(
      { ok: false, message: "Vui lòng nhập tên (>= 2 ký tự)." },
      { status: 400 },
    );
  }
  if (!isNonEmptyString(email, 5) || !isEmail(email)) {
    return NextResponse.json(
      { ok: false, message: "Email không hợp lệ." },
      { status: 400 },
    );
  }
  if (!isNonEmptyString(message, 10)) {
    return NextResponse.json(
      { ok: false, message: "Tin nhắn quá ngắn (>= 10 ký tự)." },
      { status: 400 },
    );
  }

  // Demo: không gửi email thật để chạy out-of-the-box.
  // Khi deploy thật, bạn có thể tích hợp Resend/SendGrid hoặc lưu DB tại đây.
  return NextResponse.json({
    ok: true,
    message: "Đã nhận được tin nhắn. Mình sẽ phản hồi sớm!",
  });
}

