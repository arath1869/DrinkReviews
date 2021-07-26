import { csrfFetch } from './csrf';

const LOAD = 'user/LOAD';


const load = list => ({
    type: LOAD,
    list,
})

export const getUsers = () => async dispatch => {
    const response = await csrfFetch(`/api/users`);
    if(response.ok){
        const list = await response.json()
        dispatch(load(list))
    }
}

const initialState = {
    list: []
};

const sortList = (list) => {
    return list.sort((userA, userB) => {
        return userA.id - userB.id;
    }).map((user) => user.id)
}

const userReducer = (state=initialState, action) => {
    switch(action.type){
        case LOAD: {
            const allUsers = {}
            action.list.forEach(user=>{
                allUsers[user.id]=user;
            });
            return {
                ...allUsers,
                ...state,
                list:sortList(action.list)
            }
        }
        default:
            return state;
    }
}

export default userReducer