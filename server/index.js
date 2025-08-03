const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Email transporter configuration
const createTransporter = () => {
  return nodemailer.createTransporter({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER || 'your-email@gmail.com',
      pass: process.env.EMAIL_PASS || 'your-app-password'
    }
  });
};

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, service, message } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !service || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      });
    }

    const transporter = createTransporter();

    // Email content for the business owner
    const ownerMailOptions = {
      from: process.env.EMAIL_USER || 'your-email@gmail.com',
      to: 'ssons.homedecore@gmail.com',
      subject: `New Inquiry from ${name} - ${service}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <div style="background: linear-gradient(135deg, #f59e0b, #ea580c); padding: 20px; border-radius: 10px 10px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">New Project Inquiry - SS HomeDecor</h1>
          </div>
          
          <div style="padding: 30px; background: #f9fafb;">
            <h2 style="color: #1f2937; margin-bottom: 20px; border-bottom: 2px solid #f59e0b; padding-bottom: 10px;">Client Information</h2>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #374151;">Name:</strong> 
              <span style="color: #1f2937;">${name}</span>
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #374151;">Email:</strong> 
              <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a>
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #374151;">Phone:</strong> 
              <a href="tel:${phone}" style="color: #2563eb; text-decoration: none;">${phone}</a>
            </div>
            
            <div style="margin-bottom: 20px;">
              <strong style="color: #374151;">Service Required:</strong> 
              <span style="background: #fef3c7; padding: 4px 8px; border-radius: 4px; color: #92400e;">${service}</span>
            </div>
            
            <h3 style="color: #1f2937; margin-bottom: 10px;">Project Details:</h3>
            <div style="background: white; padding: 15px; border-radius: 8px; border-left: 4px solid #f59e0b;">
              <p style="color: #374151; line-height: 1.6; margin: 0;">${message}</p>
            </div>
            
            <div style="margin-top: 30px; padding: 20px; background: #ecfdf5; border-radius: 8px; border: 1px solid #10b981;">
              <h3 style="color: #065f46; margin: 0 0 10px 0;">Quick Actions:</h3>
              <p style="margin: 5px 0;">
                <a href="tel:${phone}" style="background: #10b981; color: white; padding: 8px 16px; text-decoration: none; border-radius: 5px; display: inline-block; margin-right: 10px;">Call ${name}</a>
                <a href="mailto:${email}" style="background: #3b82f6; color: white; padding: 8px 16px; text-decoration: none; border-radius: 5px; display: inline-block;">Reply via Email</a>
              </p>
            </div>
          </div>
          
          <div style="background: #1f2937; color: white; padding: 15px; text-align: center; border-radius: 0 0 10px 10px;">
            <p style="margin: 0; font-size: 14px;">This inquiry was submitted through the SS HomeDecor website</p>
            <p style="margin: 5px 0 0 0; font-size: 12px; color: #9ca3af;">Please respond within 24 hours for best customer experience</p>
          </div>
        </div>
      `
    };

    // Confirmation email for the client
    const clientMailOptions = {
      from: process.env.EMAIL_USER || 'your-email@gmail.com',
      to: email,
      subject: 'Thank you for your inquiry - SS HomeDecor',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <div style="background: linear-gradient(135deg, #f59e0b, #ea580c); padding: 20px; border-radius: 10px 10px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">Thank You for Your Inquiry!</h1>
            <p style="color: #fef3c7; margin: 10px 0 0 0;">SS HomeDecor - Home is a dream & we will decor your dream</p>
          </div>
          
          <div style="padding: 30px; background: #f9fafb;">
            <h2 style="color: #1f2937; margin-bottom: 20px;">Dear ${name},</h2>
            
            <p style="color: #374151; line-height: 1.6; margin-bottom: 20px;">
              Thank you for reaching out to SS HomeDecor! We have received your inquiry for <strong>${service}</strong> and our team will review your requirements shortly.
            </p>
            
            <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #f59e0b; margin-bottom: 20px;">
              <h3 style="color: #1f2937; margin: 0 0 15px 0;">Your Inquiry Summary:</h3>
              <p style="margin: 5px 0;"><strong>Service:</strong> ${service}</p>
              <p style="margin: 5px 0;"><strong>Contact:</strong> ${phone}</p>
              <p style="margin: 5px 0;"><strong>Email:</strong> ${email}</p>
            </div>
            
            <div style="background: #ecfdf5; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h3 style="color: #065f46; margin: 0 0 10px 0;">What happens next?</h3>
              <ul style="color: #374151; margin: 0; padding-left: 20px;">
                <li>Our team will review your requirements within 2 hours</li>
                <li>We'll contact you to discuss your project in detail</li>
                <li>We'll provide a free consultation and quote</li>
                <li>We'll schedule a site visit if needed</li>
              </ul>
            </div>
            
            <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h3 style="color: #92400e; margin: 0 0 10px 0;">Need immediate assistance?</h3>
              <p style="color: #374151; margin: 0 0 10px 0;">Feel free to contact us directly:</p>
              <p style="margin: 5px 0;">
                <strong>Phone:</strong> <a href="tel:+919582857461" style="color: #2563eb;">+91 9582857461</a> / <a href="tel:+918588861491" style="color: #2563eb;">+91 8588861491</a>
              </p>
              <p style="margin: 5px 0;">
                <strong>Email:</strong> <a href="mailto:ssons.homedecore@gmail.com" style="color: #2563eb;">ssons.homedecore@gmail.com</a>
              </p>
              <p style="margin: 5px 0;">
                <strong>WhatsApp:</strong> <a href="https://wa.me/919582857461" style="color: #2563eb;">Chat with us</a>
              </p>
            </div>
            
            <p style="color: #374151; line-height: 1.6;">
              Thank you for choosing SS HomeDecor. We look forward to helping you create your dream space!
            </p>
            
            <p style="color: #374151; margin-top: 20px;">
              Best regards,<br>
              <strong>Mr. Satyendra Bhagat</strong><br>
              Founder & Director<br>
              SS HomeDecor
            </p>
          </div>
          
          <div style="background: #1f2937; color: white; padding: 15px; text-align: center; border-radius: 0 0 10px 10px;">
            <p style="margin: 0; font-size: 14px;">SS HomeDecor - Professional Construction & Interior Design Services in Delhi</p>
            <p style="margin: 5px 0 0 0; font-size: 12px; color: #9ca3af;">Monday - Saturday: 9:00 AM - 7:00 PM</p>
          </div>
        </div>
      `
    };

    // Send emails
    await transporter.sendMail(ownerMailOptions);
    await transporter.sendMail(clientMailOptions);

    res.status(200).json({
      success: true,
      message: 'Inquiry sent successfully! We will contact you soon.'
    });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send inquiry. Please try again or contact us directly.'
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/api/health`);
});