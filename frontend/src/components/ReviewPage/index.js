import React from "react"
import { useEffect,useState } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory, Link } from 'react-router-dom';
import { getDrinks } from '../../store/drinks';
import { getReviews } from '../../store/reviews'
import { getUsers } from '../../store/user';
import { deleteReview } from '../../store/reviews';
import { Modal } from '../../context/Modal';
import UpdateReviewsForm from '../UpdateReview/index'
import './ReviewPage.css'

const ReviewPage = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getReviews())
    }, [dispatch])


    useEffect(() => {
        dispatch(getDrinks())
    }, [dispatch])


    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])

    const sessionUser = useSelector(state => state.session.user)
    const { revId } = useParams()
    const allReviews = useSelector(state => state.reviews)
    const allUsers = useSelector(state => state.user)
   
    const currentReview = allReviews[revId];
    let usernameId = currentReview?.userId
    let originalPoster = allUsers[usernameId]?.username
    let reviewComment = currentReview?.comment
    let rating=currentReview?.rating
    let currentDrinkId=currentReview?.drinksId
    console.log(sessionUser)

    const [showModal, setShowModal] = useState(false);

    const handleDelete = async (e) => {
        e.preventDefault();
        const deletedReview = await dispatch(deleteReview(currentReview))
        console.log(deletedReview)
        history.push(`/drinks/${currentDrinkId}`);
    }

    return (
        <div>
            <div>
                <img className='home-background' src="https://i.ibb.co/gvDpfnR/fully-finished-cropped500.png" alt="drink-page-background" />

                <div className="oneReview-container">
                    
                <div className="stars-holder__review" >
                        <div className="userName-reviewpage">
                            <div>{`@${originalPoster}· `}
                                <span className="posted-drink-days-ago">
                                    45 Days Ago
                            </span>
                            </div>
                            {/* {(sessionUser && sessionUser.id === usernameId) &&
                            <button className="delete-drink" onClick={handleDelete}>Delete Drink</button>
                        } */}
                        </div>
                    <div className="star-rating__reviews">
                        { rating===1 && 
                        <>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                        </>
                        }
                        { rating===2 && 
                        <>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                        </>
                        }
                        { rating===3 && 
                        <>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                        </>
                        }
                        { rating===4 && 
                        <>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                        </>
                        }
                        { rating===5 && 
                        <>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </>
                        }
                    </div>
                        <div className="review-content">{`" ${reviewComment} "`}</div>
                </div>
                </div>
                <div className="oneReview-button__container">
                    <Link to={`/drinks/${currentDrinkId}`}>
                        <button className="review-button__reviewPage">Back To Drink</button>
                    </Link>
                    {
                        (sessionUser?.id === usernameId) &&
                        <>
                        <button className="review-button" onClick={() => setShowModal(true)}>Edit</button>
                            {(showModal) && (
                                <Modal onClose={() => setShowModal(false)}>
                                    <UpdateReviewsForm />
                                </Modal>
                            )}
                        <button onClick={handleDelete} className="review-button" >Delete</button>
                        </>
                    }
                </div>
            </div>
        </div>
    )

}

export default ReviewPage
