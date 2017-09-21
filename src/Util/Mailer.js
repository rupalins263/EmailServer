import nodemailer from 'nodemailer';
import ses  from 'nodemailer-ses-transport';

var transporter = nodemailer.createTransport({
 service: 'gmail',
 auth: {
        user: 'zenopsysevolve@gmail.com',
        pass: 'ZenFeb2017.GE2017'
    }
});

export default transporter;

