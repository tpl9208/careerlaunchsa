# Career Launch SA

This repo now includes a premium agency-style landing page, contact form, pricing, and testimonials.

Environment variables (add to Vercel or your hosting):

- SMTP_HOST
- SMTP_PORT
- SMTP_USER
- SMTP_PASS
- CONTACT_EMAIL (where contact form messages are sent)

The contact form posts to /api/contact which uses nodemailer to forward messages. If you don't want to add SMTP credentials, configure a third-party form provider or remove the API handler.
