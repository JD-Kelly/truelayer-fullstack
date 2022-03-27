const express = require('express');
const app = express();
const axios = require('axios');
const port = 9000
var cors = require('cors')

app.use(cors())

app.get('/', (req, res) => {
  res.send(`Hey! I am running on port ${port} ;D `)
})

app.get('/pokemon/:name', async (req, res, next) => {

  const[firstRequest, secondRequest] = await axios.all([
    axios.get(`https://pokeapi.co/api/v2/pokemon-species/${req.params.name}`),
    axios.get(`https://pokeapi.co/api/v2/pokemon/${req.params.name}`),
   ]);
   const thirdRequest = await axios.get(encodeURI(`https://api.funtranslations.com/translate/shakespeare.json?text=${firstRequest.data.flavor_text_entries[1].flavor_text.replace(/\n/g, ' ')}`
   ))
   res.send({
    "name": firstRequest.data.name,
    "description": thirdRequest.data.contents.translated,
    "image": secondRequest.data.sprites.front_default
   })
})


app.listen(port, () => {
console.log(`listening at http://localhost:${port}`)
})