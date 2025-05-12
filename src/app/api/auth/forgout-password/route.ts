import { Resend } from "resend";
import { ForgoutPasswordEmail } from "@/components/forgout-password-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  const { data, error } = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: ["delivered@resend.dev"],
    subject: "Hello world",
    react: ForgoutPasswordEmail({ title: "John" }),
  });

  if (error) {
    return Response.json({
      status: 500,
      message: "Error sending email",
      error,
    });
  }

  Response.json({
    status: 200,
    message: "Email sent successfully",
    data,
  });
}
