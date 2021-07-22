import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDrinks } from '../../store/drinks';
import { NavLink } from "react-router-dom";
import './RecentDrinks.css'

const RecentDrinks = () => {
    const dispatch=useDispatch()

    useEffect(() => {
        dispatch(getDrinks())
    }, [dispatch])

    const allDrinksArray = useSelector(state=>state.drinks.list)
    const mostRecent1 = allDrinksArray[allDrinksArray.length-1]
    const mostRecent2 = allDrinksArray[allDrinksArray.length - 2]
    const mostRecent3 = allDrinksArray[allDrinksArray.length - 3]
    const mostRecent4 = allDrinksArray[allDrinksArray.length - 4]
    const allDrinks = useSelector(state=>state.drinks)
    const drink1 = allDrinks[mostRecent1]
    const drink2 = allDrinks[mostRecent2]
    const drink3 = allDrinks[mostRecent3]
    const drink4 = allDrinks[mostRecent4]
    

    return (
        <div>
        <div className="title_mostRecent"> Most Recent Drinks Posted</div>
        <div className="mostRecentImages">
            <NavLink to={`/drinks/${mostRecent1}`} >
                <div className="mostRecentPhoto-1">
                    <img src={`${drink1?.imageURL}`} alt="drink1" />
                </div>
            </NavLink>
            <NavLink to={`/drinks/${mostRecent2}`}>
                <div className="mostRecentPhoto-2">
                    <img src={`${drink2?.imageURL}`} alt="drink2" />
                </div>
            </NavLink>
            <NavLink to={`/drinks/${mostRecent3}`}>
                <div className="mostRecentPhoto-3">
                    <img src={`${drink3?.imageURL}`} alt="drink3" />
                </div>
            </NavLink>
            <NavLink to={`/drinks/${mostRecent4}`}>
                <div className="mostRecentPhoto-4">
                    <img src={`${drink4?.imageURL}`} alt="drink4" />
                </div>
            </NavLink>
        </div>
        </div>
    )
}

export default RecentDrinks