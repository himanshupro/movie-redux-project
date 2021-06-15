// import { FORM_DISPLAY, MOVIE_DISPLAY,MOVIE_DETAILS, MOVIE_SEARCH_BY_ID, MOVIE_SEARCH_BY_TITLE} from './actionTypes';
import {FORM_DISPLAY,SET_MOVIE_LIST, SET_MOVIE_BY_ID, SET_SEARCHED_MOVIES} from './actionTypes'

// const userInitialState = {token:""}
const moviesInitialState = {
  movieList : [],
  movieSearch:[],
  movieDetails:{}
}

const formInitialState = {
  formDisplay: 'LOGIN_FORM',
};

export const formReducer = (state = formInitialState, action: any) => {
  switch (action.type) {
    case FORM_DISPLAY:
      return { ...state, formDisplay: action.payload };
    default:
      return state;
  }
};

export const movieReducer = (state = moviesInitialState, action:any) => {
  switch(action.type) {
    case SET_MOVIE_LIST:
      return {...state, movieList:action.payload};
    case SET_SEARCHED_MOVIES:
      return {...state, movieSearch: action.payload};
    case SET_MOVIE_BY_ID:
      return {...state, movieDetails:action.payload};
    default:
        return state;  
  }
}




// const movieInitialState = {
//   movieList: [],
//   movieDetail :[],
// };

// const searchByIdInitialState = {
//   movieSearchedById: [],
// }

// const searchByTitleInitialState = {
//   movieSearchedByTitle: [],
// }



// export const movieReducer = (state = movieInitialState, action: any) => {
//   switch (action.type) {
//     case MOVIE_DISPLAY:
//       return { ...state, movieList: action.payload };
//     // case MOVIE_DETAILS:
//     //   return {...state, movieDetails: action.payload};  
//     default:
//       return state;
//   }
// };

// export const searchMovieByIdReducer = (state = searchByIdInitialState, action: any) => {
//   switch (action.type) {
//     case MOVIE_SEARCH_BY_ID:
//       return {...state, movieSearched: action.payload}  ;
//      default:
//       return state;
//   }
// };
//   export const searchMovieByTitleReducer = (state = searchByTitleInitialState, action: any) => {
//     switch (action.type) {
//       case MOVIE_SEARCH_BY_TITLE:
//         return {...state, movieDetail: action.payload};  
//       default:
//         return state;
//     }
// };