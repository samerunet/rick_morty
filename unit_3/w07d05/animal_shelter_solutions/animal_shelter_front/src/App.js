import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css'
import Container from 'react-bootstrap/Container'



function App() {

  //=====HOOKS====//
  const [animal, setAnimal] = useState([])
  const [name, setName] = useState()
  const [species, setSpecies] = useState()
  const [image, setImage] = useState()
  const [upForAdoption, setUpForAdoption] = useState(true)
  const [displayForm, setDisplayForm] = useState(false)


  //=====ON CHANGE=====//

  const handleChangeName = (e) => {
    setName(e.target.value)
  }
  const handleChangeSpecies = (e) => {
    setSpecies(e.target.value)
  }
  const handleChangeImage = (e) => {
    setImage(e.target.value)
  }

  const handleChangeAdoption = (e) => {
    setUpForAdoption(e.target.checked)
  }
 
  //=====AXIOS=====//



  //____FETCH
  const getAnimalData = () => {
    axios.get('http://localhost:3000/animal').then((response) => {
      setAnimal(response.data)
    })
  }

  useEffect(() => {
    getAnimalData()
  }, [])
  //____POST

  const addAnimal = () => {
    axios.post('http://localhost:3000/animal', {
      name: name,
      species: species,
      image: image,
      reservedForAdoption: upForAdoption,
    

    }).then(() => {
      axios.get('http://localhost:3000/animal').then((response) => {
        setAnimal(response.data)
      })
    })
  }




  //____DELETE

  const deleteAnimal = (animal) => {
    axios.delete(`http://localhost:3000/animal/${animal._id}`).then(() => {
      axios.get('http://localhost:3000/animal').then((response) => {
        setAnimal(response.data)
      })
    })
  }


  //____UPDATE
  const updateAnimal = (e, animal) => {
    e.preventDefault()
    axios.put(`http://localhost:3000/animal/${animal._id}`,
      {
        name: name,
        species: species,
        image: image,
        reservedForAdoption: upForAdoption,
       
      }).then(() => {
        axios.get('http://localhost:3000/animal').then((response) => {
         
          setAnimal(response.data)
        })
      })
  }

  return (
    <>
      <h1>Welcome to Sunny Animal Shelter</h1>
      <Container>
        <form onSubmit={addAnimal}>
          <label>Name</label>
          <input type="text"  onChange={handleChangeName} /><br />
          <label>Species</label>
          <input type="text" onChange={handleChangeSpecies} /><br />
          <label>Image</label>
          <input type="url" onChange={handleChangeImage} /><br />
          <label>Available to Adopt</label>
          <input type="checkbox" onChange={handleChangeAdoption} /><br />
          <input type="submit" value="add" />
        </form>




        <h2>Waiting to go Home...</h2>
      
        {animal.map((animal) => {
          return (
            <>
              <h2>{animal.name}</h2>
              <img src={animal.image} />
              <button onClick={()=>setDisplayForm(!displayForm)} > SHOW FORM</button>
          
        
              <details>
            <summary>Edit</summary>
          
              <form onSubmit={(event) => { updateAnimal(event, animal) }}>

                <label>Name: <input className='form-control' type="text" defaultValue={animal.name} onChange={handleChangeName} /></label><br />
                <label> Species: <input className='form-control' type="text" defaultValue={animal.species} onChange={handleChangeSpecies} /></label><br />
                <label>Image: <input className='form-control' type="url" defaultValue={animal.image} onChange={handleChangeImage} /></label><br />
                <input type="checkbox" onChange={handleChangeAdoption} /><br/>
                <input className="btn btn-primary" type="submit" value="Update" />
                <div />
              </form>
            
              <button onClick={() => { deleteAnimal(animal) }}>DELETE</button>

              </details>  
            </>
          )
        })}

      </Container>
    </>
  );
}

export default App;
