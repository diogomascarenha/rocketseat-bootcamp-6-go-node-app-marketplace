let auth = null
if(process.env.MAIL_USERNAME &&  process.env.MAIL_PASSWORD) {
  auth = {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD
  }
}

module.exports = {
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: process.env.MAIL_SECRET,
  auth
}
