import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDrinks } from '../../store/drinks';
import { getUsers } from '../../store/user';
import { NavLink } from "react-router-dom";



const AllDrinks = () => {
    const dispatch=useDispatch()

    useEffect(() => {
        dispatch(getDrinks())
    },[dispatch])

    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])

    const allDrinks = useSelector(state => state.drinks)
    const allDrinksArray = useSelector(state => state.drinks.list)
    let newArray = allDrinksArray.slice(0).reverse()
    const allUsers = useSelector(state=>state.user)

return (
    <div>
        <div>
            <img className='home-background' src="https://i.ibb.co/gvDpfnR/fully-finished-cropped500.png" alt="drink-page-background" />
        </div>
        <div>{newArray.map((element) => (
            <div key={element}>
                {`The name of this drink is ${allDrinks[element]?.title}, it was posted by
                ${allUsers[(allDrinks[element].userId)]?.username}
                `}
            </div>
        ))}</div>
    </div>
)

}

export default AllDrinks