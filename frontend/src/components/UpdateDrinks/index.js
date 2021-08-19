import { useState } from 'react';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory,useParams } from 'react-router-dom';
import { editDrink } from '../../store/drinks';

const UpdateDrinksForm = () => {
    const dispatch = useDispatch();
    let { drinkId } = useParams()
    const allDrinks = useSelector(state => state.drinks)
    const sessionUser = useSelector(state => state.session.user)
    let currentDrink=allDrinks[drinkId]
    const history = useHistory();

    const [imageURL, setImageURL] = useState(currentDrink?.imageURL);
    const [title, setTitle] = useState(currentDrink?.title);
    let [userId, setUserId] = useState(currentDrink?.userId)
    

    const updateImageURL = (e) => setImageURL(e.target.value)
    const updateTitle = (e) => setTitle(e.target.value)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            ...currentDrink,
            title,
            imageURL,
            userId,
        };

        let editedDrink = await dispatch(editDrink(payload, drinkId))
        console.log(editedDrink)
        if (editedDrink) {
            await history.push(`/drinks`);
        }
    };

   

    if (sessionUser) {
        userId = sessionUser.id
        return (
            <div className="form_div">
                <div className="form_title">{`Edit Drink!`} </div>
                <section>
                    <form className="form" onSubmit={handleSubmit}>
                        <input onChange={(event) => setUserId(event.target.value)}
                            type="hidden"
                            placeholder="User Id"
                            value={userId} />
                        <input className="createDrinks-form__input-name" onChange={updateTitle}
                            type="text"
                            placeholder="Drink Name and Flavor"
                            value={title} />
                        <img className="createDrinks-form__img img-form" src={`${imageURL}`} alt="preview" />
                        <span className="caption-createDrink">Image Preview</span>
                        <input className="createDrinks-form__input-url" onChange={updateImageURL}
                            type="text"
                            placeholder="Image URL"
                            value={imageURL} />
                        <button className="modal-login-button" type="submit">Publish your Edits!</button>
                    </form>
                </section>
            </div>
        );
    } else {
        return null;
    }
}

export default UpdateDrinksForm;
