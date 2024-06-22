import React from "react";
import { reptiles } from "../../data/data";

const ReptilesPage = () => {
    return (
        <div>
            <h1>Reptiles</h1>
            {reptiles.map(animal => (
                <div key={animal.name}>
                    <h2>{animal.name}</h2>
                    <img src={animal.image} alt={animal.name} />
                    <p>Group: {animal.group}</p>
                    <p>Lifespan: {animal.lifespan}</p>
                    <p>Food: {animal.food}</p>
                    <p>Description: {animal.description}</p>
                    <p>Length: {animal.length}</p>
                    <p>Weight: {animal.weight}</p>
                    <p>Found: {animal.found}</p>
                </div>
            ))}
        </div>
    );
};

export default ReptilesPage;