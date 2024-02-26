export default function handler(req, res) {
  let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
      port: 465,     
      host: "smtp.gmail.com",
         auth: {
              user: process.env.EMAIL_USER,
              pass: process.env.EMAIL_PASS,
           },
      secure: true,
    });
    
    const mailData = {
        from: 'wpg',
        to: 'ann.sholi@gmail.com',
        subject: `Message From ${req.body.name}`,
        text: "Новая заявка | Отправлено от: " + req.body.phone,
        html: `<div>Новая заявка</div><p>Отправлено от: ${req.body.phone}</p>`
    }
  
    transporter.sendMail(mailData, function (err, info) {
      if(err) {
        console.log(err);
        res.status(500).json({ message: 'Error sending email', error: err });
      } else {
        console.log(info);
        res.status(200).json({ message: 'Email sent successfully' });
      }
    });
  
    // console.log(req.body)
    res.send('success')
  // res.status(200).json({ message: 'Hello from Next.js!' })
}