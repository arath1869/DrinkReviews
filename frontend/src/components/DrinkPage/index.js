import React from "react"
import {useEffect, useState} from "react"
import { useDispatch, useSelector } from 'react-redux';
import { useParams,useHistory,Link } from 'react-router-dom'
import { getDrinks } from '../../store/drinks';
import { getReviews } from '../../store/reviews'
import { getUsers } from '../../store/user';
import { deleteDrink } from '../../store/drinks'
import { Modal } from '../../context/Modal';
import CreateReviewsForm from '../CreateReviews/CreateReviewsForm'
import LoginForm from '../LoginFormModal/LoginForm';
import UpdateDrinksForm from "../UpdateDrinks";
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
    
    useEffect(() => {
        dispatch(getReviews())
    }, [dispatch])

    const sessionUser = useSelector(state => state.session.user)
    const {drinkId} = useParams()
    const allReviews = useSelector(state => state.reviews)
    const reviewsList = useSelector(state => state.reviews.list)
    const allDrinks = useSelector(state => state.drinks)
    const allUsers = useSelector(state => state.user)
    const currentDrink = allDrinks[drinkId];
    const created = allDrinks[drinkId]?.createdAt
    const title = currentDrink?.title
    const image = currentDrink?.imageURL
    const usernameId = currentDrink?.userId
    const originalPoster = allUsers[usernameId]
    const posterUsername = originalPoster?.username
    let ReviewsCount=0;
    let allReviewsRatingsCount =0;
    let numberOf5=0
    let numberOf4=0
    let numberOf3=0
    let numberOf2=0
    let numberOf1=0
    

    reviewsList.forEach((element) => {
        if(allReviews[element]?.drinksId===Number(drinkId)){
            ReviewsCount+=1
            allReviewsRatingsCount+=(allReviews[element]?.rating)
            if(allReviews[element]?.rating===5){
                numberOf5+=1
            }
            if (allReviews[element]?.rating === 4) {
                numberOf4 += 1
            }
            if (allReviews[element]?.rating === 3) {
                numberOf3 += 1
            }
            if (allReviews[element]?.rating === 2) {
                numberOf2 += 1
            }
            if (allReviews[element]?.rating === 1) {
                numberOf1 += 1
            }
        }
    })

    let totalRatingNumCount = numberOf5 + numberOf4 + numberOf3 + numberOf2 + numberOf1
    let percent5 = (numberOf5 / totalRatingNumCount)*100
    let percent4 = (numberOf4 / totalRatingNumCount) * 100
    let percent3 = (numberOf3 / totalRatingNumCount) * 100
    let percent2 = (numberOf2 / totalRatingNumCount) * 100
    let percent1 = (numberOf1 / totalRatingNumCount) * 100
    let roundedAverageReviews = Math.round((allReviewsRatingsCount / ReviewsCount) * 10)/10
   


    const [showModal, setShowModal] = useState(false);
    const [showReviewModal, setReviewModal] = useState(false);
    let newArray = reviewsList.slice(0).reverse()

    const handleDelete = async (e)=> {
    e.preventDefault();
    const deletedDrink = await dispatch(deleteDrink(currentDrink))
    console.log(deletedDrink)
    history.push(`/drinks`);
    }

    return (
        <div>
            <div>
                <img className='home-background' src="https://i.ibb.co/gvDpfnR/fully-finished-cropped500.png" alt="drink-page-background" />
            <div className="title_mostRecent">
                {title}
            </div>
                <div className="oneDrink-container">
                    <div className="stars-holder">
                        <div className="average-review">Average Rating</div>
                        <div className="star-rating">
                            {roundedAverageReviews >= 1 && roundedAverageReviews < 1.5 &&
                                <>
                                    <i className="fas fa-star"></i>
                                    <i className="far fa-star"></i>
                                    <i className="far fa-star"></i>
                                    <i className="far fa-star"></i>
                                    <i className="far fa-star"></i>
                                </>
                            }

                            {roundedAverageReviews >= 1.5 && roundedAverageReviews < 2 &&
                                <>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star-half-alt"></i>
                                    <i className="far fa-star"></i>
                                    <i className="far fa-star"></i>
                                    <i className="far fa-star"></i>
                                </>
                            }

                            {roundedAverageReviews >= 2 && roundedAverageReviews < 2.5 &&
                                <>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="far fa-star"></i>
                                    <i className="far fa-star"></i>
                                    <i className="far fa-star"></i>
                                </>
                            }

                            {roundedAverageReviews >= 2.5 && roundedAverageReviews < 3 &&
                                <>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star-half-alt"></i>
                                    <i className="far fa-star"></i>
                                    <i className="far fa-star"></i>
                                </>
                            }

                            {roundedAverageReviews >= 3 && roundedAverageReviews < 3.5 &&
                                <>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="far fa-star"></i>
                                    <i className="far fa-star"></i>
                                </>
                            }

                            {roundedAverageReviews >= 3.5 && roundedAverageReviews < 4 &&
                                <>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star-half-alt"></i>
                                    <i className="far fa-star"></i>
                                </>
                            }

                            {roundedAverageReviews >= 4 && roundedAverageReviews < 4.5 &&
                                <>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="far fa-star"></i>
                                </>
                            }

                            {roundedAverageReviews >= 4.5 && roundedAverageReviews < 5 &&
                                <>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star-half-alt"></i>
                                </>
                            }

                            {roundedAverageReviews ===5 &&
                                <>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </>
                            }
             
                <div className='number-of-reviews'>{`${ReviewsCount} Reviews`}</div>
                        </div>
                       
                        <div className="progress-container">
                            {
                                totalRatingNumCount !==0 &&
                                <div className="progress-num"
                                        style={{
                                            width: "calc(50px + 3vw)",
                                            height: "40px",
                                            
                                        }}
                                    >{roundedAverageReviews.toFixed(1)}</div>
                            }
                        </div>
                        <div className="progress-container">
                            5⭐️ 
                        <div className="progress"
                        style={{
                            width: "calc(80px + 3vw)",
                            height: "12px",
                            border: "none",
                            background: `linear-gradient(to right, gold ${percent5}%, white 0%)`
                        }}
                            >{`${numberOf5}`}</div>
                        </div>
                        <div className="progress-container">
                            4⭐️
                        <div className="progress"
                                style={{
                                    width: "calc(80px + 3vw)",
                                    height: "12px",
                                    border: "none",
                                    background: `linear-gradient(to right, gold ${percent4}%, white 0%)`
                                }}
                            >{`${numberOf4}`}</div>
                        </div>
                        <div className="progress-container">
                            3⭐️
                        <div className="progress"
                                style={{
                                    width: "calc(80px + 3vw)",
                                    height: "12px",
                                    border: "none",
                                    background: `linear-gradient(to right, gold ${percent3}%, white 0%)`
                                }}
                            >{`${numberOf3}`}</div>
                        </div>
                        <div className="progress-container">
                            2⭐️
                        <div className="progress"
                                style={{
                                    width: "calc(80px + 3vw)",
                                    height: "12px",
                                    border: "none",
                                    background: `linear-gradient(to right, gold ${percent2}%, white 0%)`
                                }}
                            >{`${numberOf2}`}</div>
                        </div>
                        <div className="progress-container">
                            1⭐️
                        <div className="progress"
                        
                                style={{
                                    width: "calc(80px + 3vw)",
                                    height: "12px",
                                    border: "none",
                                    background: `linear-gradient(to right, gold ${percent1}%, white 0%)`
                                }}
                            >{`${numberOf1}`}</div>
                        </div>
                    </div>
            <div className="grid-img-drink-page">
                <img src={image} alt='drinkpic'/>
            </div>
                    <div className="userName-drinkpage__container">
                        <div className="userName-drinkpage">
                            <div>{`@${posterUsername} · `}
                                <span className="posted-drink-days-ago">
                                    45 Days Ago
                        </span>
                            </div>
                        </div>
                    </div>
            </div>
            <div className="oneDrink-container__buttons">
                <Link to="/drinks">
                    <button className="review-button__reviewPage">All Drinks</button>
                </Link>
                    <button className="review-button" onClick={() => setShowModal(true)} >Review</button>
                    {(showModal && sessionUser) && (
                        <Modal onClose={() => setShowModal(false)}>
                            <CreateReviewsForm />
                        </Modal>
                    )}
                    {(showModal && !(sessionUser)) && (
                        <Modal onClose={() => setShowModal(false)}>
                            <LoginForm />
                        </Modal>
                    )}
                    {(sessionUser && sessionUser.id === usernameId) &&
                        <>
                        <button className="review-button" onClick={() => setReviewModal(true)}>Edit</button>
                        {(showReviewModal) && (
                            <Modal onClose={() => setReviewModal(false)}>
                                <UpdateDrinksForm />
                            </Modal>
                        )}
                        <button className="review-button" onClick={handleDelete}>Delete</button>
                        </>
                    }
            </div>
           
            <div className="allDrinks-container">{newArray.map((element) => (
                (allReviews[element]?.drinksId === Number(drinkId)) &&  
                
              
                <div key={element} className="oneReview-container">
                    <Link className="recentNavLink" to={`/reviews/${element}`}>
                    <div className="stars-holder__review">
                        <div className="userName-reviewpage">
                            {`${allUsers[allReviews[element]?.userId]?.username}· `  }
                            <span className="posted-drink-days-ago">
                                45 Days Ago
                            </span>
                        </div>
                        <div className="star-rating__reviews">
                            {allReviews[element]?.rating === 1 &&
                                <>
                                    <i className="fas fa-star"></i>
                                    <i className="far fa-star"></i>
                                    <i className="far fa-star"></i>
                                    <i className="far fa-star"></i>
                                    <i className="far fa-star"></i>
                                </>
                            }
                            {allReviews[element]?.rating === 2 &&
                                <>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="far fa-star"></i>
                                    <i className="far fa-star"></i>
                                    <i className="far fa-star"></i>
                                </>
                            }
                            {allReviews[element]?.rating === 3 &&
                                <>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="far fa-star"></i>
                                    <i className="far fa-star"></i>
                                </>
                            }
                            {allReviews[element]?.rating === 4 &&
                                <>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="far fa-star"></i>
                                </>
                            }
                            {allReviews[element]?.rating === 5 &&
                                <>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </>
                            }
                        </div>
                        <div className="review-content" >{allReviews[element]?.comment}</div>
                    </div>
                </Link>
                </div>
            ))}
            </div>
            
        </div>
            </div>
    )
}

export default DrinkPage



