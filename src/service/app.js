const express = require('express')
const cors = require('cors')
const axios = require('axios')

const app = express()

app.use(express.json())

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE")
    app.use(cors());
    next();
});

app.get('/getCharts/:index/:limit', (req, res) => {
    const API = `https://api.deezer.com/playlist/3155776842?index=${req.params.index}&limit=${req.params.limit}`;
    axios(API)
      .then(response => {
        console.log(response.data)
        res.json(response.data)
      }).catch(err => {
        res.send('errr!!!')
      })
  })

  app.get('/search/:search/:index/:limit', (req, res) => {
    const API = `https://api.deezer.com/search?q=${req.params.search}&index=${req.params.index}&limit=${req.params.limit}`;
    axios(API)
      .then(response => {
        console.log(response.data)
        res.json(response.data)
      }).catch(err => {
        res.send('errr!!!')
      })
})

  

app.listen(8080, () =>{
    console.log("Servidor iniciado na porta 8080: http://localhost:8080/")
});