import { EmailTemplate } from "@/components/emails/EmailTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: Request) {
  let data;
  try {
    const body = await req.json();

    const { emailSender, message } = body;

    if (!emailSender || !message) {
      return new NextResponse("Missing required fields", { status: 400 });
    }

    data = await resend.emails.send({
      from: "Contact From <onboarding@resend.dev>",
      to: "jaroslaw.gad13@gmail.com",
      subject: "Message from contact form",
      reply_to: emailSender,
      react: EmailTemplate({ emailSender, message }),
    });
  } catch (error) {
    new NextResponse("Internal Error", { status: 500 });
  }

  return NextResponse.json({ data });
}
