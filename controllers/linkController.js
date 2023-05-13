const Link = require('../models/Link')


const redirect = async (req, res) => {
  let tittle = req.params.tittle

  try {
    let doc = await Link.findOne({ tittle })
    console.log(doc)
    res.redirect(doc.url)

  } catch (error) {
    res.send(error)
  }
}

const addLink = async (req, res) => {

  let link = new Link(req.body)

  try {
    let doc = await link.save()
    res.send("Link adicionado com sucesso");
  } catch (error) {
    res.render('index', {error, body: req.body})
  }
}

module.exports = { redirect, addLink }