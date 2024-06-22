import React, { useState } from 'react';
import Sidebar from '../../Components/Sidebar';
import { birds } from '../../data/data';
import AnimalDetail from '../../Components/AnimalDetail';
import styles from './BirdsPage.module.css'

const BirdsPage = () => {
    const [selectedAnimal, setSelectedAnimal] = useState(null)


    return (
        <>
            <div>
                {!selectedAnimal && <h2>Welcome to the Birds Page!</h2>}
                <p className={styles.pick}>Pick a bird in the list to read about them:</p>
                <Sidebar animalsArray={birds} setAnimal={setSelectedAnimal}/>
                {selectedAnimal && <AnimalDetail animal={selectedAnimal}/>}
            </div>
        </>
    );
};

export default BirdsPage;