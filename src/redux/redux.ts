import { createStore, combineReducers } from "redux";
// import { formReducer, movieReducer, searchMovieByIdReducer,  searchMovieByTitleReducer} from "./reducer";
import { formReducer, movieReducer } from "./reducer";

const reducer = combineReducers({
  form: formReducer, 
  movies : movieReducer,
  // searchById :  searchMovieByIdReducer,
  // searchByTitle:  searchMovieByTitleReducer
});

const store = createStore(reducer);

export default store;
