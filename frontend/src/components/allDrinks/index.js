import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDrinks } from '../../store/drinks';
import { getUsers } from '../../store/user';
import { getReviews } from '../../store/reviews'
import { NavLink, Link } from "react-router-dom";
import LoginForm from '../LoginFormModal/LoginForm';
import { Modal } from '../../context/Modal';
import CreateDrinksForm from '../CreateDrinks/CreateDrinksForm'

import './AllDrinks.css'


const AllDrinks = () => {
    const dispatch=useDispatch()

    useEffect(() => {
        dispatch(getDrinks())
    },[dispatch])

    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])

    useEffect(() => {
        dispatch(getReviews())
    }, [dispatch])

    useEffect(() => {
        const interval = setInterval(() => {
            console.log('This will run every 5 seconds!');
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const [showModal, setShowModal] = useState(false);
    const sessionUser = useSelector(state => state.session.user)
    const allDrinks = useSelector(state => state.drinks)
    const allDrinksArray = useSelector(state => state.drinks.list)
    const allReviews = useSelector(state => state.reviews)
    const allReviewsArray = useSelector(state => state.reviews.list)
    let newArray = allDrinksArray.slice(0).reverse()
    const allUsers = useSelector(state=>state.user)
    allReviewsArray.forEach((element) => {
        console.log(element)
    })

return (
    <div>
        <div>
            <img className='home-background' src="https://i.ibb.co/gvDpfnR/fully-finished-cropped500.png" alt="drink-page-background" />
        </div>
        <div className="title_allDrinks">Browse All Drinks
        <div className="postNewDrink-Link">Don't See Your Drink? <Link className="signupNavLink" onClick={() => setShowModal(true)}>Post New Drink</Link>
                {(showModal && sessionUser) && (
                    <Modal onClose={() => setShowModal(false)}>
                        <CreateDrinksForm />
                    </Modal>
                )}
                {(showModal && !(sessionUser)) && (
                    <Modal onClose={() => setShowModal(false)}>
                        <LoginForm />
                    </Modal>
                )}
        </div>
        </div>
        <div className="allDrinks-container">{newArray.map((element) => (
            <div key={element} className="link-container">
            <div className="all-drinks-image-container">
            <Link to={`/drinks/${element}`}>  
            <div className="allDrinks-img" style={
                { backgroundImage: `url(${allDrinks[element]?.imageURL})` }
            }>
            </div>
                </Link>
            </div>
                <div className="drink-info-div">
                    <Link className="linkToDrink" to={`/drinks/${element}`}>
                    <div className="drinks-title">{`${allDrinks[element]?.title}`}</div>
                    </Link>
                    <div className="testDiv">⭐⭐⭐⭐⭐</div>
                </div>
            
            </div>
        ))}

        </div>
    </div>
)

}

export default AllDrinks