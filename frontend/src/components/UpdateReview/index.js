import { useState } from 'react';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { editReview } from '../../store/reviews'

const UpdateReviewsForm = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user)
    const allReviews = useSelector(state=> state.reviews)
    const history = useHistory();
    let { revId } = useParams()
    let currentReview = allReviews[revId]


    let [rating, setRating] = useState(currentReview?.rating);
    const [comment, setComment] = useState(currentReview?.comment);
    let [userId, setUserId] = useState(currentReview?.userId)
    let [drinksId, setDrinksId] = useState(currentReview?.drinksId)

    const updateRating = (e) =>setRating(e.target.value);
    const updateComment = (e) => setComment(e.target.value);

    

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            ...currentReview,
            rating,
            comment,
            userId,
            drinksId
        };

        let updatedReview = await dispatch(editReview(payload,revId ))
        if (updatedReview) {
            await history.push(`/drinks/${updatedReview.drinksId}`);
        }
    };

    if (sessionUser) {
        userId = sessionUser.id
        return (
            <div className="form_div">
                <div className="form_title">{`Edit your Review!`} </div>
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
                        {rating === '' &&
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

                        <input className="createDrinks-form__input-name" onChange={updateRating}
                            type="hidden"
                            placeholder="Rating"
                            value={rating} />
                        <textarea className="createDrinks-form__input-url" onChange={updateComment}
                            type="text"
                            placeholder="Review This Drink In 140 Characters Or Less!"
                            value={comment} />
                        <button className="modal-login-button" type="submit">Publish Edits</button>
                    </form>
                </section>
            </div>
        );
    } else {
        return null;
    }
}

export default UpdateReviewsForm;
