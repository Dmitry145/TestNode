const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send('Это простое приложение на Express.js')
  })

app.use(express.static(__dirname + '/public'))

app.get('*', (req, res) => {
    res.send('Страница не найдена')
  })

app.listen(port, () => {})
