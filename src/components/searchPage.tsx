import React, { useState} from 'react'
import {useSelector,useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
import { MDBCardImage,MDBCardText,MDBBtn, MDBCard, MDBCardBody, MDBCardTitle} from 'mdbreact';
import { Form, FormControl, Button } from 'react-bootstrap';
import {getMovieList, getSearchedMovieById,getSearchedMoviesByTitles } from '../services/movieServices'


const SearchPage = () => {

    const movieItem = useSelector((store: any) => store.movies.movieSearch);

    const [searchMovie, setSearchMovie] = useState("");

    const history = useHistory();

    const dispatch = useDispatch();

    const handleMovieSearch = () => {
        if (searchMovie.startsWith('tt')) {
        getSearchedMovieById(dispatch, searchMovie)
          history.push("/movie/details")
        }
        else {
            getSearchedMoviesByTitles(dispatch, searchMovie)
          history.push("/search")
        }
      }

    return (
        <MDBCard style={{ maxWidth: '22rem' }}>
             <Form style={{
              display: "grid",
              width: "100%",
              gridTemplateColumns: "65% 35%"
            }} inline>
           <FormControl type='text' placeholder='Search movie by id/title' className='mr-sm-1' onChange={(e:any)=>setSearchMovie(e.target.value)} />
              <Button type='submit' style={{ margin: '0 auto' }} onClick={()=>handleMovieSearch()}>Submit</Button>
            </Form> 
           { movieItem.length > 0 ? movieItem.map(function(movie:any){
               return (
                <MDBCardBody>
                 <MDBCardImage src={movieItem.Poster} position='top' alt='...' />
                  <MDBCardTitle>{movieItem.Title}</MDBCardTitle>
                  <MDBCardText>{movieItem.Year}</MDBCardText>
                  <MDBCardText>{movieItem.imdbRating}</MDBCardText>
                  <MDBBtn href='#'>Button</MDBBtn>
                </MDBCardBody>
            )
           } ):null}
        
        
      </MDBCard>
       
    )   
}

export default SearchPage;