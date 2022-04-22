const sgMail = require('@sendgrid/mail')



sgMail.setApiKey(process.env.keyy)

console.log(process.env.keyy)
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
