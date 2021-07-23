import React from "react"
import {useEffect, useState} from "react"
import { useDispatch, useSelector } from 'react-redux';
import { useParams,useHistory } from 'react-router-dom'
import { getDrinks } from '../../store/drinks';
import { getUsers } from '../../store/user';
import { deleteDrink } from '../../store/drinks'
import './DrinkPage.css'

const DrinkPage = () => {
    const history=useHistory()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getDrinks())
    }, [dispatch])

    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])

    const {drinkId} = useParams()
    const allDrinks = useSelector(state => state.drinks)
    const allUsers = useSelector(state => state.user)
    const currentDrink = allDrinks[drinkId];
    const title = currentDrink?.title
    const image = currentDrink?.imageURL
    const usernameId = currentDrink?.userId
    const originalPoster = allUsers[usernameId]
    const posterUsername = originalPoster?.username


    const handleDelete = async (e)=> {
    e.preventDefault();
    const deletedDrink = await dispatch(deleteDrink(currentDrink))
    console.log(deletedDrink)
        history.push(`/drinks/`);
    }

    return (
        <div>
            <div>
                <img className='home-background' src="https://i.ibb.co/gvDpfnR/fully-finished-cropped500.png" alt="drink-page-background" />
            <div className="title_mostRecent">
                {title}
            </div>
            <div className="grid-img-drink-page one-drink-page">
                <img src={image} alt='drinkpic'/>
            </div>
                <div className="userName-drinkpage">
                    {posterUsername}
                </div>
                <button onClick={handleDelete}>Delete Drink</button>
            </div>
        </div>
    )
}

export default DrinkPage



