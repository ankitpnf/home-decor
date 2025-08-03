const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Create transporter for Gmail
const createTransporter = () => {
  return nodemailer.createTransporter({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
};

// Test route
app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend server is running!' });
});

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

    // Email to business owner
    const businessEmailHtml = `
    <!DOCTYPE html>
    <html>
    <head>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #f59e0b, #ea580c); color: white; padding: 20px; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 10px 10px; }
            .info-box { background: white; padding: 15px; margin: 10px 0; border-radius: 8px; border-left: 4px solid #f59e0b; }
            .label { font-weight: bold; color: #f59e0b; }
            .value { margin-left: 10px; }
            .message-box { background: white; padding: 20px; margin: 15px 0; border-radius: 8px; border: 1px solid #e5e5e5; }
            .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
            .urgent { background: #fee2e2; border-left-color: #dc2626; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>🏠 New Project Inquiry - SS HomeDecor</h1>
                <p>A new customer has submitted an inquiry through your website</p>
            </div>
            <div class="content">
                <div class="info-box urgent">
                    <div class="label">⚡ URGENT: New Customer Inquiry</div>
                    <div class="value">Please respond within 2 hours for best customer experience</div>
                </div>
                
                <div class="info-box">
                    <div class="label">👤 Customer Name:</div>
                    <div class="value">${name}</div>
                </div>
                
                <div class="info-box">
                    <div class="label">📧 Email Address:</div>
                    <div class="value"><a href="mailto:${email}">${email}</a></div>
                </div>
                
                <div class="info-box">
                    <div class="label">📱 Phone Number:</div>
                    <div class="value"><a href="tel:${phone}">${phone}</a></div>
                </div>
                
                <div class="info-box">
                    <div class="label">🔧 Service Required:</div>
                    <div class="value">${service}</div>
                </div>
                
                <div class="message-box">
                    <div class="label">💬 Project Details:</div>
                    <div style="margin-top: 10px; white-space: pre-wrap;">${message}</div>
                </div>
                
                <div style="text-align: center; margin: 20px 0;">
                    <a href="tel:${phone}" style="background: #10b981; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin: 5px;">📞 Call Customer</a>
                    <a href="mailto:${email}" style="background: #3b82f6; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin: 5px;">📧 Email Customer</a>
                    <a href="https://wa.me/${phone.replace(/[^0-9]/g, '')}" style="background: #059669; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin: 5px;">💬 WhatsApp</a>
                </div>
            </div>
            <div class="footer">
                <p>SS HomeDecor - Home is a dream & we will decor your dream</p>
                <p>This email was sent from your website contact form</p>
            </div>
        </div>
    </body>
    </html>
    `;

    // Email to customer
    const customerEmailHtml = `
    <!DOCTYPE html>
    <html>
    <head>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #f59e0b, #ea580c); color: white; padding: 20px; border-radius: 10px 10px 0 0; text-align: center; }
            .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 10px 10px; }
            .info-box { background: white; padding: 15px; margin: 10px 0; border-radius: 8px; }
            .contact-info { background: #eff6ff; padding: 15px; border-radius: 8px; margin: 15px 0; }
            .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>🏠 SS HomeDecor</h1>
                <p>Thank you for your inquiry!</p>
            </div>
            <div class="content">
                <p>Dear ${name},</p>
                
                <p>Thank you for contacting SS HomeDecor! We have received your inquiry for <strong>${service}</strong> and are excited to help bring your vision to life.</p>
                
                <div class="info-box">
                    <h3>📋 Your Inquiry Summary:</h3>
                    <p><strong>Service:</strong> ${service}</p>
                    <p><strong>Contact:</strong> ${phone}</p>
                    <p><strong>Email:</strong> ${email}</p>
                </div>
                
                <div class="contact-info">
                    <h3>📞 What Happens Next?</h3>
                    <ul>
                        <li>Our team will review your requirements</li>
                        <li>We'll contact you within 2 hours during business hours</li>
                        <li>We'll schedule a consultation to discuss your project</li>
                        <li>You'll receive a detailed quote and timeline</li>
                    </ul>
                </div>
                
                <div class="contact-info">
                    <h3>📱 Need Immediate Assistance?</h3>
                    <p><strong>Call:</strong> +91 9582857461 / +91 8588861491</p>
                    <p><strong>Email:</strong> ssons.homedecore@gmail.com</p>
                    <p><strong>Hours:</strong> Monday - Saturday: 9:00 AM - 7:00 PM</p>
                </div>
                
                <p>We look forward to working with you!</p>
                
                <p>Best regards,<br>
                <strong>Mr. Satyendra Bhagat</strong><br>
                Founder & Director<br>
                SS HomeDecor</p>
            </div>
            <div class="footer">
                <p>SS HomeDecor - "Home is a dream & we will decor your dream"</p>
                <p>Delhi, India | ssons.homedecore@gmail.com</p>
            </div>
        </div>
    </body>
    </html>
    `;

    // Send email to business owner
    const businessMailOptions = {
      from: process.env.EMAIL_USER,
      to: 'ssons.homedecore@gmail.com',
      subject: `🏠 New Project Inquiry from ${name} - ${service}`,
      html: businessEmailHtml,
      text: `New Project Inquiry - SS HomeDecor

Customer Information:
Name: ${name}
Email: ${email}
Phone: ${phone}
Service Required: ${service}

Project Details:
${message}

Please contact the customer for further discussion.`
    };

    // Send confirmation email to customer
    const customerMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: '🏠 Thank you for contacting SS HomeDecor - We\'ll be in touch soon!',
      html: customerEmailHtml,
      text: `Dear ${name},

Thank you for contacting SS HomeDecor! We have received your inquiry for ${service}.

We'll contact you within 2 hours during business hours (Monday - Saturday: 9:00 AM - 7:00 PM).

For immediate assistance:
Phone: +91 9582857461 / +91 8588861491
Email: ssons.homedecore@gmail.com

Best regards,
Mr. Satyendra Bhagat
SS HomeDecor`
    };

    // Send both emails
    await transporter.sendMail(businessMailOptions);
    await transporter.sendMail(customerMailOptions);

    res.json({ 
      success: true, 
      message: 'Inquiry sent successfully! We will contact you within 2 hours during business hours.' 
    });

  } catch (error) {
    console.error('Email sending error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send inquiry. Please try calling us directly at +91 9582857461 or use WhatsApp.',
      error: error.message 
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Backend server running on port ${PORT}`);
  console.log(`📧 Email service configured for: ${process.env.EMAIL_USER || 'Not configured'}`);
});