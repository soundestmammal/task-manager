const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SG_API_KEY);


const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'test@test.com',
        subject: 'Wecome to the app',
        text: `Welcome ${name}, let me know what you think of the app.`
    })
}

module.exports = {
    sendWelcomeEmail
}