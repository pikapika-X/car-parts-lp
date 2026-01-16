import nodemailer from 'nodemailer';

export interface EmailOptions {
  to: string;
  from?: string;
  replyTo?: string;
  subject: string;
  text?: string;
  html?: string;
  attachments?: Array<{
    filename: string;
    path?: string;
    content?: Buffer | string;
    contentType?: string;
  }>;
}

/**
 * Send an email using nodemailer
 * Configure SMTP settings via environment variables:
 * - SMTP_HOST: SMTP server host
 * - SMTP_PORT: SMTP server port
 * - SMTP_USER: SMTP username
 * - SMTP_PASS: SMTP password
 * - SMTP_FROM: From email address
 */
export async function sendEmail(options: EmailOptions): Promise<boolean> {
  try {
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT) : 587;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpFrom = process.env.SMTP_FROM || smtpUser;

    if (!smtpHost || !smtpUser || !smtpPass) {
      console.error('[Email] SMTP credentials not configured');
      return false;
    }

    console.log(`[Email] Connecting to SMTP: ${smtpHost}:${smtpPort} (secure: ${smtpPort === 465})`);
    
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    console.log(`[Email] Sending email to: ${options.to}`);
    
    await transporter.sendMail({
      from: options.from || smtpFrom,
      to: options.to,
      replyTo: options.replyTo,
      subject: options.subject,
      text: options.text,
      html: options.html,
      attachments: options.attachments,
    });

    console.log(`[Email] Successfully sent email to ${options.to}`);
    return true;
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error('[Email] Failed to send email:', errorMessage);
    console.error('[Email] Error details:', error);
    return false;
  }
}
