const sgMail = require('@sendgrid/mail')

const sendgridAPIKEY='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'

sgMail.setApiKey(sendgridAPIKEY)

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
