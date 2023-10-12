import React from "react"
import Planet from "./Planet"

function PlanetList({planetInfo, deletePlanet}) {
    return(
        <table>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Climate</th>
                    <th>Terrain</th>
                    <th>Population</th>
                </tr>
                {planetInfo.map((planet) => <Planet key={planet.id} planet={planet} deletePlanet={deletePlanet}/>)}
            </tbody>
        </table>
    );
}

export default PlanetList;