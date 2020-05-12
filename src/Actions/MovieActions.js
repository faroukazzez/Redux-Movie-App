import { DELETE_MOVIE, ADD_MOVIE, EDIT_MOVIE, SEARCH, GET_SEARCH } from './types'

export const deleteMovie = id => {
    return {
        type: DELETE_MOVIE,
        payload: id
    }
}

export const addMovie = newMovie => {
    return{
        type: ADD_MOVIE,
        payload: newMovie
    }
}

export const editMovie = updatedMovie => {
    return{
        type: EDIT_MOVIE,
        payload: updatedMovie
    }
}

export const searchMovie = data => {
    return{
        type: SEARCH,
        payload: data
    }
}
export const getSearch = obj => {
    return{
        type: GET_SEARCH,
        payload: obj
    }
}