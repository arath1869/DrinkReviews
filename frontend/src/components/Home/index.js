import './Home.css'
import React from "react"
import RecentDrinks from '../RecentDrinks'


const Home = () => {
    return (
        <div>
        <div className='home-div'>
            
            <div className="searchBar">
            <input className="input-search-field" type="text"></input>
            </div>
                <img className="home-background" src= "https://i.ibb.co/r293YX9/usable-home.png" alt="fontpage"/>
            <div>
                <RecentDrinks />
            </div>
        </div>
        </div>
    )
}
export default Home

