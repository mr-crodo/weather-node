const express = require('express')
const bodyParser = require('body-parser')
const weatherRequest = require('./requests/weather.request')

const app = express()
// d843923dd439773dbb46261df676b7de

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (request, response)=> {
  response.render('index', {weather: null, error: null})
})

app.post('/', async (request, response)=> {
  const { city } = request.body

  const {weather, error} = await weatherRequest(city)
  response.render('index', {weather, error})
})

app.listen(3000, () => {
  console.log('Server has started on port AUE 3000...');
})