# SS HomeDecor Website

A professional website for SS HomeDecor - Construction and Interior Design services in Delhi.

## Features

- Modern, responsive design
- Contact form with email integration
- Portfolio showcase
- Service details
- About section
- Professional backend for handling inquiries

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Email Settings
1. Copy the `.env` file and update the email credentials:
   - Replace `your-gmail@gmail.com` with your actual Gmail address
   - Replace `your-app-password` with your Gmail App Password

### 3. Get Gmail App Password
1. Go to your Google Account settings
2. Select Security
3. Under "Signing in to Google," select App passwords
4. Generate a new app password for this application
5. Use that 16-character password in the `.env` file

### 4. Run the Application

#### Development Mode (Frontend + Backend)
```bash
npm run dev:full
```

#### Frontend Only
```bash
npm run dev
```

#### Backend Only
```bash
npm run server
```

## Email Configuration

The contact form sends emails to: `ssons.homedecore@gmail.com`

When someone submits the contact form:
1. An inquiry email is sent to the business owner
2. A confirmation email is sent to the customer
3. Both emails are professionally formatted with all the details

## Contact Information

- **Phone**: +91 9582857461 / +91 8588861491
- **Email**: ssons.homedecore@gmail.com
- **Location**: Delhi, India
- **Business Hours**: Monday - Saturday: 9:00 AM - 7:00 PM

## Services

- Construction Work
- Interior Design
- Building Layouts
- Development & Build
- Consultation Services

## Technology Stack

- **Frontend**: React, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express
- **Email**: Nodemailer with Gmail
- **Build Tool**: Vite

## Deployment

1. Build the frontend: `npm run build`
2. Deploy the backend to your preferred hosting service
3. Update the API endpoint in the frontend code
4. Configure environment variables on your hosting platform