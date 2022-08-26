const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors')
const Animals = require('./models/animals.js')

app.use(cors())
app.use(express.json());

//====ROUTES====//

//___FETCH
app.get('/animal', (req,res) =>{
    Animals.find({}, (err, animals) => {
        res.json(animals)
})
})

//___POST

app.post('/animal', (req,res) => {
    Animals.create(req.body, (err, createdAnimal)=>{
        res.json(createdAnimal)
    })
})

//___DELETE

app.delete('/animal/:id', (req,res) => {
    Animals.findByIdAndRemove(req.params.id, (err, removedAnimal)=>{
        res.json(removedAnimal)
    })

})

//___UPDATE

app.put('/animal/:id', (req,res) => {
    Animals.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedAnimal)=>{
        res.json(updatedAnimal)
    })
})

app.listen(3000, ()=>{
    console.log('Listening on port 3000');
})
mongoose.connect('mongodb://localhost:27017/animals', ()=>{
    console.log('mongodb connect')
})
