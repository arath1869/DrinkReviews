import './Home.css'
import React from "react"
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getDrinks } from '../../store/drinks';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import RecentDrinks from '../RecentDrinks'



const Home = () => {

    const dispatch = useDispatch()
    const history = useHistory();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

     useEffect(() => {
        dispatch(getDrinks())
    }, [dispatch])

    const allDrinks = useSelector(state => state.drinks)
    const allDrinksArray = useSelector(state => state.drinks.list)
    const names = []
    const idArray = [];

    allDrinksArray.forEach((element) => {
        names.push(allDrinks[element]?.title)
        idArray.push(allDrinks[element]?.id)
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

        // if (matches.length === 0) matches.push('No matches');
        return matches;
    }

    let _handleKeyDown = (e) => {
    if (e.key === 'Enter') {
    if(results.length !==0){
      history.push(`/drinks/${allDrinks[idArray[names.indexOf(results[0].key)]]?.id}`)
    }
    }
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
        <li className="listSearch"><Link className="searchList" to={`/drinks/${allDrinks[idArray[names.indexOf(result)]]?.id}`}>{result}</Link></li>
        </CSSTransition>
    ));


    
    return (
        <div>
        <div className='home-div'>
        <div className="outter">
            <div className="searchBar">
            <input
            id="myInput"
            onChange={handleInput}
            onKeyDown={_handleKeyDown}
            value={inputVal}
            placeholder="Search..."
            className="input-search-field"
            type="text"
            />
            </div>
            <div>
            { inputVal.length > 2 && results.length !== 0 &&
            <ul className="auto-dropdown" onClick={selectName}>
                        <TransitionGroup>
                            {results}
                        </TransitionGroup>
                    </ul>
}
{ inputVal.length > 2 && results.length === 0 &&
            <ul className="auto-dropdown" onClick={selectName}>
                        <TransitionGroup>
                            No Results
                        </TransitionGroup>
                    </ul>
}
            
            </div>
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

