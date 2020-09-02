const router = require('express').Router()
const nodemailer = require('nodemailer');
module.exports = router


var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS
  }
});


router.post('/', (req, res, next) => {
  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: process.env.DRO,
    subject: `CONTACT FORM EMAIL FROM ${req.body.name}, ${req.body.email}`,
    text: req.body.content
  }
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
      res.sendStatus(200)
    }
  })
})
