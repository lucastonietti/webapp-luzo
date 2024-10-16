import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer';
 
export async function POST(request: Request) {

    const {name, phone, email} = await request.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    console.log(transporter)

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECIPIENT_EMAIL,
      subject: 'Nova mensagem do formulário de contato',
      text: `Nome:${name}\nNúmero: ${phone}\nE-mail: ${email}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      return NextResponse.json({ message: 'Email enviado com sucesso' }, { status: 200 });
    } catch (error) {
      console.error('Erro ao enviar email:', error);
      return NextResponse.json({ message: 'Erro ao enviar email' }, { status: 500 });
    }

}