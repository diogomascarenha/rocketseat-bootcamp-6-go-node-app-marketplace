const Ad = require('../models/Ad')
const User = require('../models/User')
const Mail = require('../services/Mail')

class PurchaseController {
  async store (req, res) {
    const { ad, content } = req.body

    const purchaseAd = await Ad.findById(ad).populate('author')
    const user = await User.findById(req.userId)

    try {
      await Mail.sendMail({
        from: '"Diogo Mascarenhas" <diogomascarenha@gmail.com>',
        to: purchaseAd.author.email,
        subject: `Solicitação de Compra: ${purchaseAd.title}`,
        html: `<p>Teste: ${content}</p>`
      })
    } catch (err) {
      console.log(err)
    }

    return res.send()
  }
}

module.exports = new PurchaseController()
