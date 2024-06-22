import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <>
            <div className={styles.navbar}>
                <li className={styles.list}> <Link to="/">Home</Link></li>
                <li className={styles.list}> <Link to="/birds">Birds</Link></li>
                <li className={styles.list}> <Link to="/mammals">Mammals</Link></li>
                <li className={styles.list}> <Link to="/reptiles">Reptiles</Link></li>
            </div>
        </>
    )
}

export default Navbar;