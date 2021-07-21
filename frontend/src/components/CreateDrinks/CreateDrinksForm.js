import { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { createDrink } from '../../store/drinks';
import { useHistory } from 'react-router-dom';

const CreateDrinksForm = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state=>state.session.user)
    const history = useHistory();
    const [imageURL, setImageURL] = useState('');
    const [title, setTitle] = useState('');
    const [userId, setUserId]=useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            title,
            imageURL,
            userId,
        };

        let createdDrink = await dispatch(createDrink(payload))
        if (createdDrink) {
            // history.push(`/drink/${createdDrink.id}`);
            history.push(`/signup`)
        }
    };


    const handleCancelClick = (e) => {
        e.preventDefault();
    };
    if(sessionUser){
        return (
            <section>
                <form onSubmit={handleSubmit}>
                    <input onChange={(event) => setUserId(event.target.value)}
                        type="text"
                        placeholder="User Id"
                        value={userId} />
                    <input onChange={(event) => setImageURL(event.target.value)}
                        type="text"
                        placeholder="Image URL"
                        value={imageURL} />
                    <input onChange={(event) => setTitle(event.target.value)}
                        type="text"
                        placeholder="Title"
                        value={title} />
                    <button type="submit">Create new Drink</button>
                    <button type="button" onClick={handleCancelClick}>Cancel</button>
                </form>
            </section>
        );
    } else {
        return null;
    }
    }

export default CreateDrinksForm;
