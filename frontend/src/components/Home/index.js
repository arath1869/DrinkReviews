import './Home.css'
import React from "react"
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getDrinks } from '../../store/drinks';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import RecentDrinks from '../RecentDrinks'



const Home = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

     useEffect(() => {
        dispatch(getDrinks())
    }, [dispatch])

    const allDrinks = useSelector(state => state.drinks)
    const allDrinksArray = useSelector(state => state.drinks.list)
    const names = []

    allDrinksArray.forEach((element) => {
        names.push(allDrinks[element]?.title)
    })

    const [name, setName] = useState(``)
    const [inputVal, setInputVal] = useState('')
    let matches = () => {
        const inputLength = inputVal.length;
        const matches = [];

        if (inputLength === 0) return names;

        names.forEach(name => {
            const nameSegment = name.slice(0, inputLength);
            if (nameSegment.toLowerCase() === inputVal.toLowerCase()) {
                matches.push(name);
            }
        });

        if (matches.length === 0) matches.push('No matches');
        return matches;
    }


    let handleInput = (e) => {
        setInputVal(e.target.value);
    }

    let selectName = (e) => {
        const name = e.target.innerText;
        setName(name);
    }

    const results = matches().map((result) => (
        <CSSTransition
            key={result}
            classNames="result"
            timeout={{ enter: 500, exit: 300 }}
        >
            <li>{result}</li>
        </CSSTransition>
    ));


    
    return (
        <div>
        <div className='home-div'>
            <div className="searchBar">
            <input
            onChange={handleInput}
            value={inputVal}
            placeholder="Search..."
            className="input-search-field"
            type="text"
            />
            { inputVal.length > 2 &&
            <ul className="auto-dropdown" onClick={selectName}>
                        <TransitionGroup>
                            {results}
                        </TransitionGroup>
                    </ul>
}
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

