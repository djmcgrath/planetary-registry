import React, { useState } from "react"
//import {v4 as uuid} from "uuid"

function NewPlanetForm({handleNewPlanet}) {
    const [planetForm, setPlanetForm] = useState({
        name: "",
        climate: "",
        terrain: "",
        population: 0
    })

    function handleChange (e) {
        setPlanetForm({
            ...planetForm,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit (e) {
        e.preventDefault()
        const planetData = {
            name: planetForm.name,
            climate: planetForm.climate,
            terrain: planetForm.terrain,
            population: planetForm.population
        }
        fetch("http://localhost:8085/planets", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(planetData)
          })
          .then((res) => res.json())
          .then((newPlanet) => handleNewPlanet(newPlanet))
    }

    return(
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="name" 
                placeholder="Name"
                onChange={handleChange} 
            />
            <input 
                type="text" 
                name="climate" 
                placeholder="Climate" 
                onChange={handleChange} 
            />
            <input 
                type="text" 
                name="terrain" 
                placeholder="Terrain"
                onChange={handleChange} 
            />
            <input 
                type="text" 
                name="population" 
                placeholder="Population"
                onChange={handleChange}  
            />
            <button type="submit">Add Planet</button>
        </form>
    );
}

export default NewPlanetForm;