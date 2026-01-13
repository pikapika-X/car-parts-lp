import { z } from 'zod';
import { publicProcedure, router } from './_core/trpc';
import { sendEmail } from './_core/email';
import { storagePut } from './storage';

const contactFormSchema = z.object({
  carModel: z.string().min(1, '車種を入力してください'),
  carYear: z.string().optional(),
  carType: z.string().optional(),
  partName: z.string().min(1, 'パーツ名を入力してください'),
  message: z.string().optional(),
  photos: z.array(z.object({
    filename: z.string(),
    data: z.string(), // base64 encoded
    contentType: z.string(),
  })).optional(),
});

export const contactRouter = router({
  submit: publicProcedure
    .input(contactFormSchema)
    .mutation(async ({ input }) => {
      try {
        // Upload photos to S3 if provided
        const uploadedPhotos: Array<{ filename: string; url: string }> = [];
        
        if (input.photos && input.photos.length > 0) {
          for (const photo of input.photos) {
            const buffer = Buffer.from(photo.data, 'base64');
            const timestamp = Date.now();
            const randomSuffix = Math.random().toString(36).substring(7);
            const fileKey = `contact-photos/${timestamp}-${randomSuffix}-${photo.filename}`;
            
            const { url } = await storagePut(fileKey, buffer, photo.contentType);
            uploadedPhotos.push({ filename: photo.filename, url });
          }
        }

        // Build email content
        const emailHtml = `
          <h2>お問い合わせフォームからの新規メッセージ</h2>
          <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; background-color: #f5f5f5; font-weight: bold;">車種</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${input.carModel}</td>
            </tr>
            ${input.carYear ? `
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; background-color: #f5f5f5; font-weight: bold;">年式</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${input.carYear}</td>
            </tr>
            ` : ''}
            ${input.carType ? `
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; background-color: #f5f5f5; font-weight: bold;">型式</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${input.carType}</td>
            </tr>
            ` : ''}
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; background-color: #f5f5f5; font-weight: bold;">パーツ名</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${input.partName}</td>
            </tr>
            ${input.message ? `
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; background-color: #f5f5f5; font-weight: bold;">詳細・備考</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${input.message.replace(/\n/g, '<br>')}</td>
            </tr>
            ` : ''}
          </table>
          
          ${uploadedPhotos.length > 0 ? `
          <h3 style="margin-top: 20px;">添付写真</h3>
          <div style="display: flex; flex-wrap: wrap; gap: 10px;">
            ${uploadedPhotos.map(photo => `
              <div style="margin-bottom: 10px;">
                <a href="${photo.url}" target="_blank" style="color: #0066cc;">
                  ${photo.filename}
                </a><br>
                <img src="${photo.url}" alt="${photo.filename}" style="max-width: 200px; max-height: 200px; margin-top: 5px; border: 1px solid #ddd;">
              </div>
            `).join('')}
          </div>
          ` : ''}
        `;

        const emailText = `
お問い合わせフォームからの新規メッセージ

車種: ${input.carModel}
${input.carYear ? `年式: ${input.carYear}` : ''}
${input.carType ? `型式: ${input.carType}` : ''}
パーツ名: ${input.partName}
${input.message ? `詳細・備考: ${input.message}` : ''}

${uploadedPhotos.length > 0 ? `
添付写真:
${uploadedPhotos.map(photo => `- ${photo.filename}: ${photo.url}`).join('\n')}
` : ''}
        `;

        // Send email
        const success = await sendEmail({
          to: 'contact@usdm.co.jp',
          subject: `【お問い合わせ】${input.carModel} - ${input.partName}`,
          text: emailText,
          html: emailHtml,
        });

        if (!success) {
          throw new Error('Failed to send email');
        }

        return {
          success: true,
          message: 'お問い合わせを受け付けました。担当者より折り返しご連絡いたします。',
        };
      } catch (error) {
        console.error('[Contact] Error processing form submission:', error);
        throw new Error('お問い合わせの送信に失敗しました。しばらく経ってから再度お試しください。');
      }
    }),
});
