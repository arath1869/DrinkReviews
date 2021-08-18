import { csrfFetch } from './csrf';
const LOAD = 'drinks/LOAD';
const ADD_ONE='drinks/ADD_ONE';
const DELETE_ONE='/drinks/DELETE_ONE'
const UPDATE_ONE = '/drinks/UPDATE_ONE'

const load = list => ({
    type: LOAD,
    list,
});

const update = (drink) => ({
    type: UPDATE_ONE,
    drink,
})

const addOneDrink = drink => ({
    type: ADD_ONE,
    drink,
});

const deleteOne = (drinkId) => ({
    type: DELETE_ONE,
    drinkId,
})

export const createDrink = (data) => async dispatch => {
    const response = await csrfFetch(`/api/drinks`,
    {
        method: 'POST',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    if(response.ok){
        const drink = await response.json()
        dispatch(addOneDrink(drink))
        return drink
    }
}

export const editDrink = (data, id) => async dispatch => {
    const response = await csrfFetch(`/api/drinks/${id}`,
        {
            method: 'PUT',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(data)
        })
    if (response.ok) {
        const drink = await response.json()
        dispatch(update(drink))
        return drink
    }
}

export const deleteDrink = (drink) => async dispatch => {
    const response = await csrfFetch(`/api/drinks/${drink.id}`, 
    {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(drink),
    })
    if(response.ok) {
        dispatch(deleteOne(drink))
    }
}

export const getDrinks = () => async dispatch => {
    const response = await csrfFetch(`/api/drinks`);
    if(response.ok){
        const list = await response.json();
        dispatch(load(list))
    }
}

const initialState = {
    list:[]
};

const sortList = (list) => {
    return list.sort((drinkA,drinkB) => {
        return drinkA.id-drinkB.id;
    }).map((drink)=>drink.id)
}

const drinksReducer = (state=initialState, action) => {
    switch (action.type){
        case LOAD: {
            const allDrinks = {}
            action.list.forEach(drink=>{
                allDrinks[drink.id]=drink;
            });
            return {
                ...allDrinks,
                ...state,
                list: sortList(action.list),
            }
        }
        case ADD_ONE: {
            if(!state[action.drink.id]) {
                const newState={
                    ...state,
                    [action.drink.id]: action.drink
                };
            const drinksList = newState.list.map(id=> newState[id]);
            drinksList.push(action.drink);
            newState.list=drinksList
            return newState
            }

            return {
                ...state,
                [action.drink.id]: {
                    ...state[action.drink.id],
                    ...action.drink,
                }
            }
        }
        case DELETE_ONE: {
            const newState={...state};
            delete newState[action.drinkId];
            return newState;
        }

        case UPDATE_ONE: {
            return {
                ...state,
                [action.drink.id]:action.drink,
            }
        }
        default:
            return state;
    }
}

export default drinksReducer