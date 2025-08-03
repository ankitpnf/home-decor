# SS HomeDecor Website

A professional website for SS HomeDecor - Construction and Interior Design services in Delhi with full backend email functionality.

## 🚀 Features

- Modern, responsive design
- **Working backend email system** - Sends emails directly to ssons.homedecore@gmail.com
- Interactive contact form with real email delivery
- Portfolio showcase with detailed project modals
- Comprehensive service details
- About section with company achievements
- Professional design with smooth animations

## 📧 Email System Setup

### IMPORTANT: Configure Email Before Use

1. **Open the `.env` file** in the root directory
2. **Replace the placeholder values:**
   ```
   EMAIL_USER=ssons.homedecore@gmail.com
   EMAIL_PASS=your-16-character-app-password
   ```

3. **Get Gmail App Password:**
   - Go to [Google Account Settings](https://myaccount.google.com/) → Security
   - Enable 2-Factor Authentication (if not already enabled)
   - Go to "App passwords" 
   - Generate a new app password for "Mail"
   - Copy the 16-character password (format: abcd efgh ijkl mnop)
   - Paste it in the `.env` file as `EMAIL_PASS`

4. **Save the `.env` file** and restart the server

## 🛠️ Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Email (Required)
Edit the `.env` file with your Gmail credentials (see above)

### 3. Run the Application

**Option A: Full Application (Recommended)**
```bash
npm run dev:full
```
This runs both frontend and backend servers simultaneously.

**Option B: Run Separately**
```bash
# Terminal 1 - Backend Server
npm run server

# Terminal 2 - Frontend
npm run dev
```

## 📬 How Email System Works

When a customer submits the contact form:

1. **Form validates** all required fields
2. **Backend processes** the inquiry
3. **Two emails are sent:**
   - **To You (ssons.homedecore@gmail.com)**: Professional inquiry with customer details and quick action buttons
   - **To Customer**: Confirmation email with next steps and your contact information
4. **Success message** shown to customer
5. **Fallback to WhatsApp** if email fails

## 📧 Email Features

### Business Owner Email Includes:
- 🚨 Urgent notification styling
- 👤 Complete customer information
- 📱 One-click call, email, and WhatsApp buttons
- 💬 Formatted project details
- ⏰ Response time reminder

### Customer Confirmation Email Includes:
- 🏠 Professional SS HomeDecor branding
- 📋 Inquiry summary
- 📞 Your contact information
- ⏰ Response time expectations
- 🎯 Next steps explanation

## 🔧 Technical Details

### Backend Server (Node.js + Express)
- **Port**: 5000
- **Email Service**: Gmail SMTP via Nodemailer
- **Security**: Environment variables for credentials
- **Error Handling**: Comprehensive error management
- **Fallback**: WhatsApp integration if email fails

### Frontend (React + TypeScript)
- **Framework**: React with TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite

## 📱 Contact Information

- **Phone**: +91 9582857461 / +91 8588861491
- **Email**: ssons.homedecore@gmail.com
- **Location**: Delhi, India
- **Business Hours**: Monday - Saturday: 9:00 AM - 7:00 PM

## 🎯 Services

- Construction Work
- Interior Design
- Building Layouts
- Development & Build
- Consultation Services

## 🚨 Troubleshooting

### Email Not Working?
1. Check `.env` file configuration
2. Verify Gmail App Password is correct
3. Ensure 2-Factor Authentication is enabled on Gmail
4. Check server logs for error messages
5. Test with `npm run server` to see backend status

### Backend Server Issues?
1. Make sure port 5000 is available
2. Check if all dependencies are installed: `npm install`
3. Verify `.env` file exists and has correct format
4. Look for error messages in terminal

### Form Submission Fails?
- Automatic fallback to WhatsApp will be offered
- Customer can still reach you via phone or WhatsApp
- Check browser console for error details

## 🔒 Security Features

- Environment variables for sensitive data
- Input validation and sanitization
- CORS protection
- Error handling without exposing sensitive information
- Secure email transmission via Gmail SMTP

## 📈 Deployment

1. **Build the application**: `npm run build`
2. **Configure environment variables** on your hosting platform
3. **Deploy both frontend and backend**
4. **Update API endpoints** if using different domains

The system is production-ready with proper error handling, security measures, and fallback options.

## 🎨 Customization

- Update contact information in components
- Modify email templates in `server/server.js`
- Customize styling with Tailwind CSS
- Add new services or portfolio items
- Modify company information and branding

---

**SS HomeDecor** - "Home is a dream & we will decor your dream"