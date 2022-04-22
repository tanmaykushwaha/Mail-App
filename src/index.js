const express = require('express')
const path = require('path')
const app = express()
var bodyParser = require('body-parser')
const mail = require('../src/app')
//var urlencodedParser = bodyParser.urlencoded({ extended: true })
//var jsonParser = bodyParser.json()
const publicdirectory = path.join(__dirname , '../public')
app.use(express.static(publicdirectory))


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
//console.log('')
    //res.render('index')
})

app.post('/formm', (req, res) => {
    console.log(process.env.keyy)
        const name = req.body.name
        const email = req.body.email
        const text = req.body.text
        const subject = req.body.subject
        const SomeHTmlInput = req.body.HtmlInput
        //console.log(SomeHTmlInput)
        //res.send(req.body.name + req.body.number)
       const sendmail = mail.sendWelcomeEmail(email, name ,subject ,text , SomeHTmlInput)
       // console.log(req.body.number)
       if(sendmail){
        throw new Error()
       }
  
       res.send(`<a href="/"> Mail Has been Sendget back to home page home</a>`)
      
    })


app.listen(port,() =>{
    console.log('express is running on' + port)
})


