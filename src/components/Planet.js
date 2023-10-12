import React from "react"

function Planet({planet, deletePlanet}) {
    function handleDelete(){
        fetch(`http://localhost:8085/planets/${planet.id}`, {
          method: "DELETE"
        })
        .then(res => res.json())
        .then(deletePlanet(planet.id))
      }
    return(
        <tr>
            <td>{planet.name}</td>
            <td>{planet.climate}</td>
            <td>{planet.terrain}</td>
            <td>{planet.population}</td>
            <td><button onClick={handleDelete}>🗑</button></td>
        </tr>
    );
}

export default Planet;