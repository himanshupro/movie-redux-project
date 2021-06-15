import {FORM_DISPLAY, SET_MOVIE_LIST, SET_MOVIE_BY_ID, SET_SEARCHED_MOVIES} from './actionTypes'

export const selectForm = (form : string) =>{
    return {
        type : FORM_DISPLAY,
        payload : form
    }
}

export const setMovieList = (movies:any) =>{
    return {
        type:SET_MOVIE_LIST,
        payload: movies
    }
}

export const searchedMovieByTitle = (movie:any) => {
    return {
        type:SET_SEARCHED_MOVIES,
        payload: movie
    }
}

export const searchedMovieById = (movie:any) => {
    return {
        type:SET_MOVIE_BY_ID,
        payload:movie
        
    }
}



































// import { FORM_DISPLAY, MOVIE_DISPLAY, MOVIE_DETAILS, MOVIE_SEARCH_BY_ID, MOVIE_SEARCH_BY_TITLE } from "./actionTypes"

// export const selectForm = (form : string) =>{
//     return {
//         type : FORM_DISPLAY,
//         payload : form
//     }
// }

// export const setMovieToDisplay = (movie : string[]) =>{
//     return {
//         type : MOVIE_DISPLAY,
//         payload : movie
//     }
// }

// export const setMovieDetails = (movie : string[]) =>{
//     return {
//         type : MOVIE_DETAILS,
//         payload : movie
//     }
// }

// export const setMovieToSearchById = (searchById: any) => {
//     return {
//         type : MOVIE_SEARCH_BY_ID,
//         payload : searchById
//     }
// }

// export const setMovieToSearchByTitle = (searchByTitle: any) => {
//     return {
//         type : MOVIE_SEARCH_BY_TITLE,
//         payload : searchByTitle
//     }
// }