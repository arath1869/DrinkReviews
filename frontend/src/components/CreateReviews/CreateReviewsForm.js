import { useState } from 'react';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createReview } from '../../store/reviews';
import { useHistory, useParams } from 'react-router-dom';
import { Modal } from '../../context/Modal';
import './CreateReviews.css'

const CreateReviewsForm = () => {
    
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user)
    const history = useHistory();
    let {drinkId} = useParams()
    let [rating, setRating] = useState('');
    const [comment, setComment] = useState('');
    let [userId, setUserId] = useState(``)
    let [drinksId, setDrinksId] = useState(``)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            rating,
            comment,
            userId,
            drinksId
        };

        let createdReview = await dispatch(createReview(payload))
        if (createdReview) {
            await history.push(`/reviews/${createdReview}`);
        }
    };

    if (sessionUser) {
        userId = sessionUser.id
        drinksId = drinkId
        return (
            <div className="form_div">
                <div className="form_title">{`Post your Review!`} </div>
                <section>
                    <form className="form" onSubmit={handleSubmit}>
                        <input onChange={(event) => setUserId(event.target.value)}
                            type="hidden"
                            placeholder="User Id"
                            value={userId} />
                        <input onChange={(event) => setDrinksId(event.target.value)}
                            type="hidden"
                            placeholder="drinkId"
                            value={drinksId} />
                        { rating==='' &&
                        <div class="review-stars__container">
                        
                            <button className="submitReview__button" onClick={(event) => {
                                event.preventDefault()
                                setRating(1)
                                }}><i id="a" className="far fa-star"></i></button>
                            <button className="submitReview__button" onClick={(event) => {
                                event.preventDefault()
                                setRating(2)
                            }} ><i id="aa" className="far fa-star"></i></button>
                            <button className="submitReview__button" onClick={(event) => {
                                event.preventDefault()
                                setRating(3)
                            }} ><i id="aaa" className="far fa-star"></i></button>
                            <button className="submitReview__button" onClick={(event) => {
                                event.preventDefault()
                                setRating(4)
                            }} ><i id="aaaa" className="far fa-star"></i></button>
                            <button className="submitReview__button" onClick={(event) => {
                                event.preventDefault()
                                setRating(5)
                            }} ><i id="aaaaa" className="far fa-star"></i></button>
                           
                        </div>
    }

                        {rating === 1 &&
                            <div class="review-stars__container">

                                <button className="submitReview__button" onClick={(event) => {
                                    event.preventDefault()
                                    setRating(1)
                                }}><i id="a" className="fas fa-star"></i></button>
                                <button className="submitReview__button" onClick={(event) => {
                                    event.preventDefault()
                                    setRating(2)
                                }} ><i id="aa" className="far fa-star"></i></button>
                                <button className="submitReview__button" onClick={(event) => {
                                    event.preventDefault()
                                    setRating(3)
                                }} ><i id="aaa" className="far fa-star"></i></button>
                                <button className="submitReview__button" onClick={(event) => {
                                    event.preventDefault()
                                    setRating(4)
                                }} ><i id="aaaa" className="far fa-star"></i></button>
                                <button className="submitReview__button" onClick={(event) => {
                                    event.preventDefault()
                                    setRating(5)
                                }} ><i id="aaaaa" className="far fa-star"></i></button>

                            </div>
                        }

                        {rating === 2 &&
                            <div class="review-stars__container">

                                <button className="submitReview__button" onClick={(event) => {
                                    event.preventDefault()
                                    setRating(1)
                                }}><i id="a" className="fas fa-star"></i></button>
                                <button className="submitReview__button" onClick={(event) => {
                                    event.preventDefault()
                                    setRating(2)
                                }} ><i id="aa" className="fas fa-star"></i></button>
                                <button className="submitReview__button" onClick={(event) => {
                                    event.preventDefault()
                                    setRating(3)
                                }} ><i id="aaa" className="far fa-star"></i></button>
                                <button className="submitReview__button" onClick={(event) => {
                                    event.preventDefault()
                                    setRating(4)
                                }} ><i id="aaaa" className="far fa-star"></i></button>
                                <button className="submitReview__button" onClick={(event) => {
                                    event.preventDefault()
                                    setRating(5)
                                }} ><i id="aaaaa" className="far fa-star"></i></button>

                            </div>
                        }

                        {rating === 3 &&
                            <div class="review-stars__container">

                                <button className="submitReview__button" onClick={(event) => {
                                    event.preventDefault()
                                    setRating(1)
                                }}><i id="a" className="fas fa-star"></i></button>
                                <button className="submitReview__button" onClick={(event) => {
                                    event.preventDefault()
                                    setRating(2)
                                }} ><i id="aa" className="fas fa-star"></i></button>
                                <button className="submitReview__button" onClick={(event) => {
                                    event.preventDefault()
                                    setRating(3)
                                }} ><i id="aaa" className="fas fa-star"></i></button>
                                <button className="submitReview__button" onClick={(event) => {
                                    event.preventDefault()
                                    setRating(4)
                                }} ><i id="aaaa" className="far fa-star"></i></button>
                                <button className="submitReview__button" onClick={(event) => {
                                    event.preventDefault()
                                    setRating(5)
                                }} ><i id="aaaaa" className="far fa-star"></i></button>

                            </div>
                        }

                        {rating === 4 &&
                            <div class="review-stars__container">

                                <button className="submitReview__button" onClick={(event) => {
                                    event.preventDefault()
                                    setRating(1)
                                }}><i id="a" className="fas fa-star"></i></button>
                                <button className="submitReview__button" onClick={(event) => {
                                    event.preventDefault()
                                    setRating(2)
                                }} ><i id="aa" className="fas fa-star"></i></button>
                                <button className="submitReview__button" onClick={(event) => {
                                    event.preventDefault()
                                    setRating(3)
                                }} ><i id="aaa" className="fas fa-star"></i></button>
                                <button className="submitReview__button" onClick={(event) => {
                                    event.preventDefault()
                                    setRating(4)
                                }} ><i id="aaaa" className="fas fa-star"></i></button>
                                <button className="submitReview__button" onClick={(event) => {
                                    event.preventDefault()
                                    setRating(5)
                                }} ><i id="aaaaa" className="far fa-star"></i></button>

                            </div>
                        }

                        {rating === 5 &&
                            <div class="review-stars__container">

                                <button className="submitReview__button" onClick={(event) => {
                                    event.preventDefault()
                                    setRating(1)
                                }}><i id="a" className="fas fa-star"></i></button>
                                <button className="submitReview__button" onClick={(event) => {
                                    event.preventDefault()
                                    setRating(2)
                                }} ><i id="aa" className="fas fa-star"></i></button>
                                <button className="submitReview__button" onClick={(event) => {
                                    event.preventDefault()
                                    setRating(3)
                                }} ><i id="aaa" className="fas fa-star"></i></button>
                                <button className="submitReview__button" onClick={(event) => {
                                    event.preventDefault()
                                    setRating(4)
                                }} ><i id="aaaa" className="fas fa-star"></i></button>
                                <button className="submitReview__button" onClick={(event) => {
                                    event.preventDefault()
                                    setRating(5)
                                }} ><i id="aaaaa" className="fas fa-star"></i></button>

                            </div>
                        }

                        <input className="createDrinks-form__input-name" onChange={(event) => setRating(event.target.value)}
                            type="hidden"
                            placeholder="Rating"
                            value={rating} />
                        <textarea className="createDrinks-form__input-url" onChange={(event) => setComment(event.target.value)}
                            type="text"
                            placeholder="Review This Drink In 140 Characters Or Less!"
                            value={comment} />
                        <button className="modal-login-button" type="submit">Post Review</button>
                    </form>
                </section>
            </div>
        );
    } else {
        return null;
    }
}

export default CreateReviewsForm;
