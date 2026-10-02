import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      phone,
      service,
      message,
      verificationCode,
      website,
    } = body;

    // Honeypot protection
    if (website) {
      return NextResponse.json(
        { message: "Invalid submission." },
        { status: 400 }
      );
    }

    // Required fields
    if (!name || !email || !message || !verificationCode) {
      return NextResponse.json(
        { message: "Please fill all required fields." },
        { status: 400 }
      );
    }

    // Basic validation
    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string"
    ) {
      return NextResponse.json(
        { message: "Invalid form data." },
        { status: 400 }
      );
    }

    if (name.length > 100) {
      return NextResponse.json(
        { message: "Name is too long." },
        { status: 400 }
      );
    }

    if (email.length > 150) {
      return NextResponse.json(
        { message: "Email is too long." },
        { status: 400 }
      );
    }

    if (message.length > 5000) {
      return NextResponse.json(
        { message: "Message is too long." },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is missing.");

      return NextResponse.json(
        { message: "Email service is not configured." },
        { status: 500 }
      );
    }

    if (!process.env.RESEND_FROM_EMAIL) {
      console.error("RESEND_FROM_EMAIL is missing.");

      return NextResponse.json(
        { message: "Sender email is not configured." },
        { status: 500 }
      );
    }

    if (!process.env.CONTACT_TO_EMAIL) {
      console.error("CONTACT_TO_EMAIL is missing.");

      return NextResponse.json(
        { message: "Recipient email is not configured." },
        { status: 500 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL,
      to: [process.env.CONTACT_TO_EMAIL],

      replyTo: email,

      subject: `New Project Enquiry — ${name}`,

      html: `
        <!DOCTYPE html>
        <html>
          <body
            style="
              margin: 0;
              padding: 0;
              background: #080808;
              font-family: Arial, Helvetica, sans-serif;
              color: #111111;
            "
          >
            <div
              style="
                max-width: 680px;
                margin: 40px auto;
                background: #ffffff;
                border-radius: 20px;
                overflow: hidden;
              "
            >

              <div
                style="
                  padding: 32px;
                  background: #080808;
                  color: #ffffff;
                "
              >
                <div
                  style="
                    font-size: 12px;
                    letter-spacing: 4px;
                    text-transform: uppercase;
                    color: #888888;
                    margin-bottom: 12px;
                  "
                >
                  IMX Digital Studio
                </div>

                <h1
                  style="
                    margin: 0;
                    font-size: 32px;
                    line-height: 1.1;
                  "
                >
                  New Project Enquiry
                </h1>
              </div>

              <div style="padding: 32px;">

                <div style="margin-bottom: 24px;">
                  <div
                    style="
                      font-size: 11px;
                      text-transform: uppercase;
                      letter-spacing: 2px;
                      color: #888888;
                      margin-bottom: 6px;
                    "
                  >
                    Name
                  </div>

                  <div
                    style="
                      font-size: 17px;
                      font-weight: 600;
                    "
                  >
                    ${escapeHtml(name)}
                  </div>
                </div>

                <div style="margin-bottom: 24px;">
                  <div
                    style="
                      font-size: 11px;
                      text-transform: uppercase;
                      letter-spacing: 2px;
                      color: #888888;
                      margin-bottom: 6px;
                    "
                  >
                    Email
                  </div>

                  <div style="font-size: 17px;">
                    ${escapeHtml(email)}
                  </div>
                </div>

                ${
                  phone
                    ? `
                      <div style="margin-bottom: 24px;">
                        <div
                          style="
                            font-size: 11px;
                            text-transform: uppercase;
                            letter-spacing: 2px;
                            color: #888888;
                            margin-bottom: 6px;
                          "
                        >
                          Phone
                        </div>

                        <div style="font-size: 17px;">
                          ${escapeHtml(phone)}
                        </div>
                      </div>
                    `
                    : ""
                }

                ${
                  service
                    ? `
                      <div style="margin-bottom: 24px;">
                        <div
                          style="
                            font-size: 11px;
                            text-transform: uppercase;
                            letter-spacing: 2px;
                            color: #888888;
                            margin-bottom: 6px;
                          "
                        >
                          Service
                        </div>

                        <div style="font-size: 17px;">
                          ${escapeHtml(service)}
                        </div>
                      </div>
                    `
                    : ""
                }

                <div style="margin-bottom: 8px;">
                  <div
                    style="
                      font-size: 11px;
                      text-transform: uppercase;
                      letter-spacing: 2px;
                      color: #888888;
                      margin-bottom: 6px;
                    "
                  >
                    Project Details
                  </div>
                </div>

                <div
                  style="
                    padding: 18px;
                    background: #f5f5f5;
                    border-radius: 12px;
                    font-size: 15px;
                    line-height: 1.7;
                    white-space: pre-wrap;
                  "
                >
                  ${escapeHtml(message)}
                </div>

                <div
                  style="
                    margin-top: 32px;
                    padding-top: 20px;
                    border-top: 1px solid #eeeeee;
                    font-size: 12px;
                    color: #888888;
                  "
                >
                  This enquiry was submitted through the IMX Digital Studio
                  website.
                </div>

              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        {
          message: "Unable to send your enquiry right now.",
        },
        { status: 500 }
      );
    }

    console.log("Resend email sent:", data?.id);

    return NextResponse.json({
      success: true,
      message: "Enquiry submitted successfully.",
      id: data?.id,
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      {
        message: "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}