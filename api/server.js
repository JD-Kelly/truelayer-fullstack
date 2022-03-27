const express = require('express');
const app = express();
const axios = require('axios');
const port = 9000
var cors = require('cors')

app.use(cors())

app.get('/', (req, res) => {
  res.send(`Hey! I am running on port ${port} ;D `)
})

app.get('/pokemon/:name', (req, res, next) => {
  axios.all([
    axios.get(`https://pokeapi.co/api/v2/pokemon-species/${req.params.name}`),
    axios.get(`https://pokeapi.co/api/v2/pokemon/${req.params.name}`)
  ])
  .then(axios.spread((responseOne, responseTwo) => {
    const firstResponse = responseOne
    const secondResponse = responseTwo
    const pokemonDescription = responseOne.data.flavor_text_entries[1].flavor_text.replace(/\n/g, ' ')
  axios.get(encodeURI(`https://api.funtranslations.com/translate/shakespeare.json?text=${pokemonDescription}`))
    .then(response => {
      const shakespeareTranslation = response.data.contents.translated
      res.status(200)
      res.send({
        "name": firstResponse.data.name,
        "description": shakespeareTranslation,
        "image": secondResponse.data.sprites.front_default
        })
      })
    }
  ))
  .catch(err => next(err));
})

app.listen(port, () => {
console.log(`listening at http://localhost:${port}`)
})