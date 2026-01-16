import { describe, it, expect } from 'vitest';
import { sendEmail } from './_core/email';

describe('Email sending with Gmail SMTP', () => {
  it('should successfully send a test email', async () => {
    const result = await sendEmail({
      to: 'contact@usdm.co.jp',
      subject: 'テスト送信 - お問い合わせフォーム',
      text: 'これはGmail SMTP接続のテストメールです。',
      html: '<p>これはGmail SMTP接続のテストメールです。</p>',
    });

    expect(result).toBe(true);
  }, 30000); // 30秒のタイムアウト
});
