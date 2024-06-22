import React, { useState } from 'react';
import Sidebar from '../../Components/Sidebar';
import { mammals } from '../../data/data';
import AnimalDetail from '../../Components/AnimalDetail';
import styles from './MammalsPage.module.css'

const MammalsPage = () => {
    const [selectedAnimal, setSelectedAnimal] = useState(null)


    return (
        <>
            <div>
                {!selectedAnimal && <h2>Welcome to the Mammals Page!</h2>}
                <p className={styles.pick}>Pick a mammal in the list to read more about them:</p>
                <Sidebar animalsArray={mammals} setAnimal={setSelectedAnimal}/>
                {selectedAnimal && <AnimalDetail animal={selectedAnimal}/>}
            </div>
        </>
    );
};

export default MammalsPage;