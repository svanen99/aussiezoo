import React from "react";
import { mammals } from "../../data/data";

const MammalsPage = () => {
    return (
        <div>
            <h1>Mammals</h1>
            {mammals.map(animal => (
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

export default MammalsPage;
