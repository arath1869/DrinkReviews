import React from 'react';
import { NavLink, useLocation} from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import DemoLogin from '../DemoLogin/index'
import SignupFormModal from '../SignupFormPage/index'
import './Navigation.css';

function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);
    const location = useLocation()
    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <ProfileButton user={sessionUser} />
    );
     
    } 
    
    else if(location.pathname === '/signup') {
       return null
    } 

    else {
        sessionLinks = (
            <>
                <DemoLogin />
                <LoginFormModal />
                <SignupFormModal />
            </>
        );
    }

    return (
        <div>
        <ul className="nav_ul">
                {isLoaded && sessionLinks}
        </ul>
        <div className='navDiv'>
                <NavLink exact to="/">
                    <button className="home-navLink">Home</button>
                </NavLink>
                <NavLink exact to="/drinks">
                    <button className="drinks-navLink">Drinks</button>
                </NavLink>
        </div>
        </div>
    );
}

export default Navigation;