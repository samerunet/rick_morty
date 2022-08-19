// Dependencies
const express = require('express')
const app = express()
const mongoose = require('mongoose')

// Configuration
const port = 3000
app.use(express.urlencoded({extended:true}))

// Static
app.use(express.static('public'))

// Data
const Budget = require('./models/budget.js')

// INDEX
app.get('/budgets', (req, res) => {
    res.render('index.ejs', {ledger: Budget})
})

// SHOW
app.get('/budgets/:index', (req,res)=> {
    res.render('show.ejs', {ledger: Budget[req.params.index]})
})

// Listen
app.listen(port, () => {
    console.log("ready to budget on port" , 300)
})
mongoose.connect('mongodb://localhost:27017/NAME_OF_YOUR_DATABASE', () => {
  console.log('The connection with mongod is established')
})