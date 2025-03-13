import config from "config";
import nodemailer from "nodemailer";

const EMAIL_USER = config.get("EMAIL_USER");
const EMAIL_PASS = config.get("EMAIL_PASS");

async function sendEmail({ firstName, lastName, email }) {
  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    });

    let info = await transporter.sendMail({
      from: `Mayura Travels <${EMAIL_USER}>`,
      to: email, // Send email to the user
      subject: "Congratulations! Your Details Have Been Received",
      text: `${firstName} ${lastName}, your details have been received. We will get back to you soon.`,
    });

    console.log("✅ Email sent successfully:", info.messageId);

    // Return success response
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("❌ Email sending error:", error);

    // Return failure response
    return { success: false, error: error.message };
  }
}

export default sendEmail;
