"use server";

import React from "react";
import { Resend } from "resend";
import validateString from "./validateString";
import { ContactFormEmail } from "@/components";
import { toast } from "sonner";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function sendEmail(formData: FormData) {
  try {
    const senderName = formData.get("senderName");
    const senderEmail = formData.get("senderEmail");
    const message = formData.get("message");

    if (!validateString(senderName, 100)) {
      return {
        error: "Invalid sender name",
      };
    }

    if (!validateString(senderEmail, 500)) {
      return {
        error: "Invalid sender email",
      };
    }

    if (!validateString(message, 5000)) {
      return {
        error: "Invalid message",
      };
    }

    resend.emails.send({
      from: "Portfolio Contact Form <onboarding@resend.dev>",
      to: "nawfal17syahzada@gmail.com",
      subject: `Message from ${senderName}`,
      reply_to: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderName: senderName as string,
        senderEmail: senderEmail as string,
      }),
    });

    console.log("Email sent successfully");
    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    return false;
  }
}
