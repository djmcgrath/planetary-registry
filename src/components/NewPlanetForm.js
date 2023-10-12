import React, { useState } from "react"
//import {v4 as uuid} from "uuid"

function NewPlanetForm({handleNewPlanet}) {
    const [planetForm, setPlanetForm] = useState({
        name: "",
        climate: "",
        terrain: "",
        population: ""
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
          .then((newPlanet) => {
            handleNewPlanet(newPlanet)
            setPlanetForm({
                name: "",
                climate: "",
                terrain: "",
                population: ""
            })
        })

    }

    return(
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="name" 
                placeholder="Name"
                value = {planetForm.name}
                onChange={handleChange} 
            />
            <input 
                type="text" 
                name="climate" 
                placeholder="Climate" 
                value = {planetForm.climate}
                onChange={handleChange} 
            />
            <input 
                type="text" 
                name="terrain" 
                placeholder="Terrain"
                value = {planetForm.terrain}
                onChange={handleChange} 
            />
            <input 
                type="text" 
                name="population" 
                placeholder="Population"
                value = {planetForm.population}
                onChange={handleChange}  
            />
            <input type="submit" value="Add"/>
        </form>
    );
}

export default NewPlanetForm;