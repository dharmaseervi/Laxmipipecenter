import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
    try {
        const { name, email, number, message, } = await request.json();

        if (!name || !email || !message || !number) {
            return NextResponse.json({ error: 'Please fill in all fields' }, { status: 400 });
        }

        console.log('Form Data:', { name, email, message });

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            host: 'smtp.gmail.com',
            port: 465,
            secure: true, // Use SSL/TLS
            auth: {
                user: process.env.NODEMAILER_USER,
                pass: process.env.NODEMAILER_PASS
            }
        });

        const mailOptions = {
            from: email,
            to: 'ghanshyamlal.10@gmail.com',
            subject: `New contact form submission from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nNumber: ${number}\nMessage: ${message}`,
            html: `
              <div style="font-family: Arial, sans-serif; color: #333;">
                <div style="background-color: #f4f4f4; padding: 20px;  margin-bottom: 25px; border-radius:8px; border:1px solid #000">
                  <h2 style="color: #444;">New Contact Form Submission</h2>
                  <p style="font-size: 16px; line-height: 1.6;">You have received a new message from the contact form on your website.</p>
                </div>
                <div style="padding: 20px; background-color: #fff; border: 1px solid #ddd; border-radius: 8px;">
                  <h3 style="color: #444; border-bottom: 1px solid #ddd; padding-bottom: 10px; margin-bottom: 20px;">Contact Details</h3>
                  <p style="font-size: 16px; margin: 0 0 10px;">
                    <strong>Name:</strong> ${name}
                  </p>
                  <p style="font-size: 16px; margin: 0 0 10px;">
                    <strong>Email:</strong> <a href="mailto:${email}" style="color: #007BFF;">${email}</a>
                  </p>
                  <p style="font-size: 16px; margin: 0 0 10px;">
                    <strong>Number:</strong> ${number}
                  </p>
                  <p style="font-size: 16px; margin: 0 0 10px;">
                    <strong>Message:</strong>
                  </p>
                  <p style="font-size: 16px; color: #555; padding: 10px; border-left: 4px solid #007BFF; background-color: #f9f9f9; border-radius: 4px;">
                    ${message}
                  </p>
                </div>
                <div style="padding: 20px; text-align: center; color: #777; font-size: 12px;">
                  <p>This email was sent from the contact form on your website.</p>
                </div>
              </div>
            `,
        };


        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Form submitted successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({ error: 'Failed to submit form' }, { status: 500 });
    }
}
