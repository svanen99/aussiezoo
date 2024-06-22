import React from 'react';
import styles from './Home.module.css'

const Home = () => {
    return (
        <>
            <div>
                <h1>
                    Welcome to the world of aussie animals!
                </h1>
                <p className={styles.text}>Below are all the animals you will be able to read about in this page, enjoy!</p>
            </div>
        </>
    )
}

export default Home;