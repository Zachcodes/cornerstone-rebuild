module.exports = {
    sendEmail(req, res) {
        let db = req.app.get('db')
        let { name, email, subject, message, requestCallback, phone, timeValue } = req.body
        message = `<html>Name: ${name}<br>${message}`;
        if(requestCallback && phone) {
        message = `${message}<br>Requested Callback: True<br>Phone: ${phone}<br>Best Time To Call: ${timeValue.hh}:${timeValue.mm} ${timeValue.A}</html>`;
        }
        else {
        message = `${message}<br>Requested Callback: False</html>`;
        }
        console.log(process.env.EMAIL_USERNAME,process.env.EMAIL_PASSWORD)
        //nodemailer
        const nodemailer = require('nodemailer');
        var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
                user: process.env.EMAIL_USERNAME,
                pass: process.env.EMAIL_PASSWORD
            }
        });
        const mailOptions = {
        from: email, // sender address
        to: process.env.RECEIVING_EMAIL, // list of receivers
        subject: subject, // Subject line
        html: message// plain text body
        };
        transporter.sendMail(mailOptions, function (err, info) {
        if(err) {
            console.log(1111, err)
            res.send(err)
        }
        else {
            console.log(2222)
            res.status(200).send('Success');
        }
        });
    }
}