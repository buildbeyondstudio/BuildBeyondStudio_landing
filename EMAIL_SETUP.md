# Email Configuration Setup Guide

This guide will help you set up the contact form email functionality using Gmail SMTP with Nodemailer.

## Prerequisites
- A Gmail account
- Access to your Google Account settings

## Step-by-Step Setup

### 1. Enable 2-Factor Authentication (if not already enabled)
1. Go to [myaccount.google.com](https://myaccount.google.com)
2. Click on "Security" in the left sidebar
3. Scroll down to "How you sign in to Google"
4. Enable "2-Step Verification" if it's not already enabled
5. Follow the prompts to complete the setup

### 2. Generate an App Password
1. Go to [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
2. You may need to sign in again
3. In the "Select app" dropdown, choose "Mail"
4. In the "Select device" dropdown, choose "Windows Computer" (or your device type)
5. Click "Generate"
6. Google will generate a 16-character password
7. Copy this password (it will be in the format: `xxxx xxxx xxxx xxxx`)

### 3. Create .env.local File
1. In the root of your project, create a file named `.env.local`
2. Add the following lines:

```bash
EMAIL_USER=your_gmail_account@gmail.com
EMAIL_PASSWORD=your_16_character_app_password
```

Replace:
- `your_gmail_account@gmail.com` with your actual Gmail address
- `your_16_character_app_password` with the 16-character password you generated in Step 2

**Important:** Do NOT use your regular Gmail password. Always use the App Password.

### 4. Verify the Configuration
- Make sure your `.env.local` file is in the root directory of the project
- The file should NOT be committed to git (it's already in `.gitignore`)
- Test the contact form to ensure emails are being sent

## Recipient Email Addresses

Currently, emails are sent to:
- `ankushcoder497001@gmail.com`
- `ankushgupta997769@gmail.com`

To add more recipients, edit [app/api/send-email/route.ts](app/api/send-email/route.ts) and add email addresses to the `RECIPIENT_EMAILS` array:

```typescript
const RECIPIENT_EMAILS = [
  'ankushcoder497001@gmail.com',
  'ankushgupta997769@gmail.com',
  'your.email@example.com',  // Add more emails here
  'another.email@example.com',
];
```

## Troubleshooting

### "Invalid login" error
- Make sure you're using the 16-character **App Password**, not your Gmail password
- Verify 2-Factor Authentication is enabled
- Check that `EMAIL_USER` and `EMAIL_PASSWORD` in `.env.local` are correct

### Emails not being received
- Check your `.env.local` file has the correct email and password
- Verify the RECIPIENT_EMAILS array has the correct email addresses
- Check the server logs for any error messages

### "Less secure app access" error
- You should NOT encounter this error if using App Passwords
- Make sure you're using the generated App Password, not your regular password

## Alternative Email Services

If you prefer to use a different email service (SendGrid, Mailgun, etc.), you can modify the transporter configuration in [app/api/send-email/route.ts](app/api/send-email/route.ts).

## Learn More

- [Nodemailer Documentation](https://nodemailer.com/)
- [Gmail SMTP Configuration](https://support.google.com/mail/answer/7126229)
- [Google App Passwords](https://support.google.com/accounts/answer/185833)
