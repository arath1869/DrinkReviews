import { csrfFetch } from './csrf';
const LOAD = 'reviews/LOAD';
const ADD_ONE = 'reviews/ADD_ONE';
const DELETE_ONE = '/reviews/DELETE_ONE'
const UPDATE_ONE = 'reviews/UPDATE_ONE'

const load = list => ({
    type: LOAD,
    list,
});

const update = (review) => ({
    type: UPDATE_ONE,
    review
})

const addOneReview = review => ({
    type: ADD_ONE,
    review,
});

const deleteOne = (reviewId) => ({
    type: DELETE_ONE,
    reviewId,
})

export const editReview = (data,id) => async dispatch => {
    const response = await csrfFetch(`/api/reviews/${id}`,
    {
        method:'PUT',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify(data)
    })
    if(response.ok){
        const review = await response.json()
        dispatch(update(review))
        return review
    }
}

export const createReview = (data) => async dispatch => {
    const response = await csrfFetch(`/api/reviews`,
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
    if (response.ok) {
        const review = await response.json()
        dispatch(addOneReview(review))
        return review
    }
}

export const deleteReview = (review) => async dispatch => {
    const response = await csrfFetch(`/api/reviews/${review.id}`,
        {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(review),
        })
    if (response.ok) {

        dispatch(deleteOne(review))


    }
}

export const getReviews = () => async dispatch => {
    const response = await csrfFetch(`/api/reviews`);
    if (response.ok) {
        const list = await response.json();
        dispatch(load(list))
    }
}

const initialState = {
    list: []
};

const sortList = (list) => {
    return list.sort((reviewA, reviewB) => {
        return reviewA.updatedAt - reviewB.updatedAt;
    }).map((review) => review.id)
}

const reviewsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD: {
            const allReviews = {}
            action.list.forEach(review => {
                allReviews[review.id] = review;
            });
            return {
                ...allReviews,
                ...state,
                list: sortList(action.list),
            }
        }
        case ADD_ONE: {
            if (!state[action.review.id]) {
                const newState = {
                    ...state,
                    [action.review.id]: action.review
                };
                const reviewsList = newState.list.map(id => newState[id]);
                reviewsList.push(action.review);
                newState.list = reviewsList
                return newState
            }

            return {
                ...state,
                [action.review.id]: {
                    ...state[action.review.id],
                    ...action.review,
                }
            }
        }
        case DELETE_ONE: {
            const newState = { ...state };
            delete newState[action.reviewId];
            return newState;
        }

        case UPDATE_ONE: {
            return {
                ...state,
                [action.review.id]:action.review,
            }
        }
        default:
            return state;
    }
}

export default reviewsReducer