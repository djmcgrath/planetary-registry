import React, { useEffect, useState } from "react"
import Search from "./Search"
import NewPlanetForm from "./NewPlanetForm"
import PlanetList from "./PlanetList"

function Registry() {
    const [planetInfo, setPlanetInfo] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() =>{
        fetch("http://localhost:8085/planets")
        .then(res => res.json())
        .then(res => {
          setPlanetInfo(res)
        })
      }, [])

      function handleNewPlanet (newPlanet) {
        setPlanetInfo([...planetInfo, newPlanet])
      }
      const filteredPlanets = planetInfo.filter((planet) => (
        planet.name.toLowerCase().includes(search.toLowerCase())
        || planet.climate.toLowerCase().includes(search.toLowerCase())
        || planet.terrain.toLowerCase().includes(search.toLowerCase())
        || planet.population.toLowerCase().includes(search.toLowerCase())
      ))

      function deletePlanet(id){
        const updatedPlanets = planetInfo.filter((planet1)=> planet1.id !== id)
        setPlanetInfo(updatedPlanets)
      }

    return(
        <div className="registry">
            <Search search={search} setSearch={setSearch}/>
            <div className="content">
                <PlanetList planetInfo={filteredPlanets} deletePlanet={deletePlanet}/>
                <NewPlanetForm handleNewPlanet={handleNewPlanet} />
            </div>
        </div>
    )
}

export default Registry;