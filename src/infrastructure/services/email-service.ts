import { EmailRepository } from '../../domain/repository/email-repository';
import path from 'path';
var hbs = require('nodemailer-express-handlebars');


export class EmailService implements EmailRepository {

    async sendRegistrationEmail(email: string, username: string): Promise<void> {

        const nodemailer = require('nodemailer');
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: 'sheriffgaye5@gmail.com',
                pass: 'yeka bmeo vyhy veed',
            },
        });

        const handlebarOptions = {
            viewEngine: {
                extName: ".handlebars",
                partialsDir: path.resolve(__dirname,'../services'),
                defaultLayout: false,
            },
            viewPath: path.resolve(__dirname,'../services'),
            extName: ".handlebars",
        }

        transporter.use('compile', hbs(handlebarOptions));


        const mailOptions = {
            from: 'sheriffgaye5@gmail.com',
            to: email,
            subject: 'Welcome to Your App',
            template: 'email',
            context: {
                username: username,

            }
        };

        await transporter.sendMail(mailOptions);
    }
}
