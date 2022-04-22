const sgMail = require('@sendgrid/mail')


sgMail.setApiKey(process.env.sendgridAPIKEY)

const sendWelcomeEmail = (email,name,subject,text,SomeHTmlInput) =>{
    sgMail.send({
        to: email,
        from : 'aajainbox27@gmail.com',
        subject : subject,
        text :text,
        html : SomeHTmlInput
    })
   
}




module.exports = {
    sendWelcomeEmail
}