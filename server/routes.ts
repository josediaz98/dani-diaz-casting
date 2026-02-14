import type { Express } from "express";
import type { Server } from "http";
import { z } from "zod";

// Contact form validation schema
const contactSchema = z.object({
  name: z.string().min(2, { message: "Name is required." }),
  email: z.string().email({ message: "Invalid email address." }),
  projectType: z.string({ required_error: "Please select a project type." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body
      const result = contactSchema.safeParse(req.body);

      if (!result.success) {
        return res.status(400).json({
          success: false,
          message: "Validation failed",
          errors: result.error.flatten().fieldErrors,
        });
      }

      const { name, email, projectType, message } = result.data;

      // Log the contact submission (in production, you'd send an email or store in DB)
      console.log("Contact form submission:", {
        name,
        email,
        projectType,
        message,
        timestamp: new Date().toISOString(),
      });

      // Here you could integrate with:
      // - Email service (SendGrid, Resend, etc.)
      // - Database storage
      // - CRM integration
      // - Slack/Discord notifications

      return res.status(200).json({
        success: true,
        message: "Thank you for reaching out. I'll get back to you shortly.",
      });
    } catch (error) {
      console.error("Contact form error:", error);
      return res.status(500).json({
        success: false,
        message: "Something went wrong. Please try again later.",
      });
    }
  });

  return httpServer;
}
