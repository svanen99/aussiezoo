import React, { useState } from 'react';
import styles from './Sidebar.module.css';

const Sidebar = ({ animalsArray, setAnimal }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (animal, index) => {
        setAnimal(animal);
        setActiveIndex(index);
    };

    return (
        <div className={styles.sidebar}>
            <aside>
                <ul>
                    {animalsArray.map((animal, index) => (
                        <li
                            key={index}
                            onClick={() => handleClick(animal, index)}
                            className={index === activeIndex ? styles.active : ''}>
                            {animal.name}
                        </li>
                    ))}
                </ul>
            </aside>
        </div>
    );
};

export default Sidebar;