const Mail = require('../services/Mail')
const Queue = require('../services/Queue')

class PurchaseMail {
  get key () {
    return 'PurchaseMail'
  }

  async handle (job, done) {
    const { ad, user, content } = job.data

    try {
      await Mail.sendMail({
        from: '"Diogo Mascarenhas" <diogomascarenha@gmail.com>',
        to: ad.author.email,
        subject: `Solicitação de Compra: ${ad.title}`,
        template: 'purchase',
        context: {
          user,
          content,
          ad
        }
      })
    } catch (err) {
      console.log(err)
    }

    return done()
  }
}

module.exports = new PurchaseMail()
