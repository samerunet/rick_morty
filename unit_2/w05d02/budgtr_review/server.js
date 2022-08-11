// Dependencies
const express = require('express')
const app = express() 
const mongoose = require('mongoose')
// const budgetSeed = require('./models/budget.js')
const Budget = require('./models/budgetSchema')

// Configuration
const PORT = 3000

// Middleware
app.use(express.urlencoded({ extended: false }))
// Static - allows us to have access to a folder called public that will house our css and other static files
app.use(express.static('public'))


app.get('/budgets/seed', (req, res) => {
  Budget.create(budgetSeed, (err, data) => {})
  res.redirect('/budgets')
})

// ROUTES
// Index
app.get('/budgets', (req, res) => {
  Budget.find({}, (err, budgetsData) => {
    res.render('index.ejs', {
      budgetsKey: budgetsData
    })
  })
})


  // first argument is a string that is the name of the ejs file we want to render(show)
  // second argument
  // must be an object
  // key is the name of the variable to use in EJS
  // value is the data we want to pass in


// new - need to show a form
app.get('/budgets/new', (req, res) => {
  res.render('new.ejs')
})

// show
// remeber :index acts as a 'catchall for any url'
app.get('/budgets/:id', (req, res) => {
  Budget.findById(req.params.id, (err, singleBudget) => {
      res.render(
          'show.ejs', {budget: singleBudget})
  })
})

// create - actually create a new item
app.post('/budgets', (req, res) => {
  // add our form data to our Budget Array
  Budget.create(req.body, (err, newBudget) => {
    console.log(req.body)
    res.redirect('/budgets')
  })
})

app.listen(PORT, () => {
  console.log('ready to budget on port', PORT)
})

mongoose.connect('mongodb://localhost:27017/budgtr', () => {
  console.log('The connection with mongod is established')
})