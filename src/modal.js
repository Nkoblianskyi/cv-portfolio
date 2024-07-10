// import express, { Request, Response } from 'express';
// import nodemailer from 'nodemailer';
// import bodyParser from 'body-parser';

// const app = express();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: 'your-email@gmail.com',
//         pass: 'your-password'
//     }
// });

// app.post('/sendEmail', async (req: Request, res: Response) => {
//     const { companyName, contactPerson, description } = req.body;

//     const mailOptions = {
//         from: 'your-email@gmail.com',
//         to: 'nkoblianskyi@gmail.com', // ваша поштова скринька
//         subject: `New Inquiry from ${companyName}`,
//         text: `Contact Person: ${contactPerson}\nDescription: ${description}`
//     };

//     try {
//         const info = await transporter.sendMail(mailOptions);
//         console.log('Email sent: ' + info.response);
//         res.status(200).send('Email sent!');
//     } catch (error) {
//         console.error('Error sending email:', error);
//         res.status(500).send('An error occurred while sending the email.');
//     }
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });
