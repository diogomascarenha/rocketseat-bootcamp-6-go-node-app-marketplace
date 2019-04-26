const User = require('../models/User')

class UserController {
  async store (req, res) {
    console.log(req.body)
    const { email } = req.body

    if (await User.findOne({ email })) {
      res.status(400).json({ error: 'User already exists' })
    }

    const user = await User.create(req.body)

    return res.json(user)
  }
}

module.exports = new UserController()
