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


    const handleCancelClick = (e) => {
        e.preventDefault();
    };
    if(sessionUser){
        userId=sessionUser.id
        return (
            <section>
                <form onSubmit={handleSubmit}>
                    <input onChange={(event) => setUserId(event.target.value)}
                        type="hidden"
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
