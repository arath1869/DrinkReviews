import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDrinks } from '../../store/drinks';

const RecentDrinks = () => {
    const dispatch=useDispatch()

    useEffect(() => {
        dispatch(getDrinks())
    }, [dispatch])

    const allDrinks = useSelector(state=>state.drinks)
    console.log(allDrinks)

    return (
        <div>
            <div>
                hello
            </div>
           
        </div>
    )
}

export default RecentDrinks