// import { MOVIE_DISPLAY,MOVIE_DETAILS, MOVIE_SEARCH_BY_ID, MOVIE_SEARCH_BY_TITLE } from "../redux/actionTypes";

import axios from "axios"
import {setMovieList, searchedMovieById, searchedMovieByTitle} from '../redux/actions';

export const getMovieList = async (dispatch:any) => {
  let res = await axios.get("http://localhost:4000/api/movie/")
  console.log("Movie:",res.data)
  return res
  // dispatch(setMovieList(res.data.data))
}

export const getSearchedMoviesByTitles = async (dispatch:any, text: string) => {
  let res = await axios.get(`http://localhost:4000/api/movie/search/${text}`)
  console.log(res.data);
  dispatch(searchedMovieByTitle(res.data))
}


export const getSearchedMovieById = async (dispatch:any, id:string) => {
  let res = await axios.get(`http://localhost:4000/api/movie/searchid/${id}`)
  console.log(res.data);
  dispatch(searchedMovieById(res.data));
}

// export const SearchMovieById = async (dispatch: any, id: string) => {
//   let res = await axios.get(`http://localhost:4000/api/movie/searchid/${id}` );
//   dispatch({ type: MOVIE_SEARCH_BY_ID, payload: res.data });
//   return res;
// };

// export const SearchMovieByTitle = async (dispatch: any, title: string) => {
//   let res = await axios.get(`http://localhost:4000/api/movie/search/${title}`);
//   dispatch({ type: MOVIE_SEARCH_BY_TITLE, payload: res.data });
//   return res;
// };


// export const DisplayMovie = async (dispatch:any, movie:any) => {
//   let res = await axios.get('http://localhost:4000/api/movie/' +JSON.stringify(movie));
//   console.log('MovieResponse', res);
//   dispatch({ type: MOVIE_DISPLAY, payload: res.data.data});
//   return res;
// };
