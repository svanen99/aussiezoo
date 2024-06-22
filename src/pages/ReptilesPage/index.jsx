import React, { useState } from 'react';
import Sidebar from '../../Components/Sidebar';
import { reptiles } from '../../data/data';
import AnimalDetail from '../../Components/AnimalDetail';
import styles from './ReptilesPage.module.css'

const ReptilesPage = () => {
    const [selectedAnimal, setSelectedAnimal] = useState(null)


    return (
        <>
            <div>
                {!selectedAnimal && <h2>Welcome to the Reptiles Page!</h2>}
                <p className={styles.pick}>Pick a reptile in the list to read about them:</p>
                <Sidebar animalsArray={reptiles} setAnimal={setSelectedAnimal}/>
                {selectedAnimal && <AnimalDetail animal={selectedAnimal}/>}
            </div>
        </>
    );
};

export default ReptilesPage;