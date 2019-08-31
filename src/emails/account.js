const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SG_API_KEY);


const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'test@test.com',
        subject: 'Wecome to the app',
        text: `Welcome ${name}, let me know what you think of the app.`
    });
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'test@test.com',
        subject: 'Cancelation Email :(',
        text: `Hi ${name}, sorry to see you leave. let me know why you canceled...`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}