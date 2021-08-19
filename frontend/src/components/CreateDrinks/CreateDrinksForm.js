import { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { createDrink } from '../../store/drinks';
import { useHistory } from 'react-router-dom';
import './CreateDrinks.css'

const CreateDrinksForm = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state=>state.session.user)
    const history = useHistory();
    const [imageURL, setImageURL] = useState(``);
    const [title, setTitle] = useState('');
    let [userId, setUserId]=useState(``)

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            title,
            imageURL,
            userId,
        };

        let createdDrink = await dispatch(createDrink(payload))
        console.log(createdDrink)
        if (createdDrink) {
            history.push(`/drinks/${createdDrink}`);
        }
    };


    const updateFile = (e) => {
        const file = e.target.files[0];
        if (file) setImageURL(file);
    };


    if(sessionUser){
        userId=sessionUser.id
        return (
            <div className="form_div">
            <div className="form_title">{`Post your Drink!`} </div>
            <section>
                <form className="form" onSubmit={handleSubmit}>
                    <input onChange={(event) => setUserId(event.target.value)}
                        type="hidden"
                        placeholder="User Id"
                        value={userId} />
                    <input className="createDrinks-form__input-name" onChange={(event) => setTitle(event.target.value)}
                            type="text"
                            placeholder="Drink Name and Flavor"
                            value={title} />
                    {/* <img className="createDrinks-form__img img-form" src={`${imageURL}`} alt="preview"/>
                        <span className="caption-createDrink">Image Preview</span> */}
                    <input className="createDrinks-form__input-url" onChange={updateFile}
                        type="file" 
                        />
                    <button className="modal-login-button" type="submit">Create new Drink</button>
                </form>
            </section>
            </div>
        );
    } else {
        return null;
    }
    }

export default CreateDrinksForm;
