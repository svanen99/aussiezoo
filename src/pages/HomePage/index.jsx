import React from "react"
import Home from "../../Components/Home"
import Sidebar from "../../Components/Sidebar"
import { animals } from "../../data/data"
import AnimalDetail from "../../Components/AnimalDetail"
import BirdsPage from "../BirdsPage"

const HomePage = () => {
    return (
        <>
            <Home />
            <Sidebar animalsArray={animals}/>
        </>
    )
}

export default HomePage;