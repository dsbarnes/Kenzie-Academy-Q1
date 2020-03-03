const feth = require('node-fetch')
const axios = require('axios')
const fs = require('fs')

let URL = 'https://jservice.kenzie.academy/api/categories'
// fetch(URL)
//   .then(res => res.json())
//   .then(data => console.log(data))


axios.get(URL)
  .then(res => 
    fs.writeFileSync('categories.txt', JSON.stringify(res.data)))