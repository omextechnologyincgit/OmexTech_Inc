
import express from "express";
import nodemailer from "nodemailer";
import config from "config";

const router = express.Router();

router.post("/contact", async (req, res) => {
  const { firstName, lastName, email, phone, purpose, message } = req.body;

  // ✅ Validate required fields
  if (!firstName || !lastName || !email || !message || !purpose) {
    return res.status(400).json({ error: "All fields are required!" });
  }

  // ✅ Get current timestamp
  const currentTime = new Date();
  const formattedTime = currentTime.toLocaleString("en-US", {
    timeZone: "Asia/Kolkata", // Adjust timezone as needed
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  try {
    // ✅ Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: config.get("EMAIL_USER"),
        pass: config.get("EMAIL_PASS"),
      },
    });

    // ✅ Email options with enhanced HTML format
    const mailOptions = {
      from: config.get("EMAIL_USER"),
      to: ["mdkhaja50489@gmail.com","khaja.javadeveloper09@gmail.com"], 
      subject: "📩 New Contact Form Submission",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <h2 style="color: #2c3e50; text-align: center;">📩 New Contact Form Submission</h2>
          
          <p style="font-size: 16px;"><strong>🕒 Submitted At:</strong> ${formattedTime}</p>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>👤 Name:</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #ddd;">${firstName} ${lastName}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>✉️ Email:</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #ddd;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>📞 Phone:</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #ddd;">${phone ? phone : "N/A"}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>📌 Purpose:</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #ddd;">${purpose}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>📝 Message:</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #ddd; color: #2c3e50;"><i>${message}</i></td>
            </tr>
          </table>

          <p style="margin-top: 20px; text-align: center;">
            <strong>🔹 Submitted via Omex Technology Contact Form</strong>
          </p>
        </div>
      `,
    };

    // ✅ Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "✅ Form submitted successfully!" });
  } catch (error) {
    console.error("❌ Email Sending Error:", error.message);
    res
      .status(500)
      .json({ error: "Failed to send email. Please try again later." });
  }
});

export default router;
