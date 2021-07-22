import React from "react"
import {useEffect, useState} from "react"
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getDrinks } from '../../store/drinks';
import { getUsers } from '../../store/user';

const DrinkPage = () => {
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

    return (
        <div>
            <div>
                <img className='home-background' src="https://i.ibb.co/gvDpfnR/fully-finished-cropped500.png" alt="drink-page-background" />
            <div>
                {title}
            </div>
            <div>
                {image}
            </div>
                <div>
                    {usernameId}
                </div>
                <div>
                    {posterUsername}
                </div>
            </div>
        </div>
    )
}

export default DrinkPage



