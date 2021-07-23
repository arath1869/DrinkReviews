import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDrinks } from '../../store/drinks';
import { getUsers } from '../../store/user';
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

    const [showModal, setShowModal] = useState(false);
    const sessionUser = useSelector(state => state.session.user)
    const allDrinks = useSelector(state => state.drinks)
    const allDrinksArray = useSelector(state => state.drinks.list)
    let newArray = allDrinksArray.slice(0).reverse()
    const allUsers = useSelector(state=>state.user)

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
        <div className="allDrinks-grid">{newArray.map((element) => (
            <div className="grid-img" key={element}>
                <span className="caption">{`${allDrinks[element]?.title}`}</span>

                <img src={`${allDrinks[element]?.imageURL}`} alt="drinks-pic" />
        

                <div className="star-rating">*****</div>
                {/* {`The name of this drink is ${allDrinks[element]?.title}, it was posted by
                ${allUsers[(allDrinks[element].userId)]?.username}
                `} */}
            </div>
        ))}</div>
    </div>
)

}

export default AllDrinks