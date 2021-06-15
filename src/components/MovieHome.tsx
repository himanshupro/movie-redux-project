import React, { useState, useEffect } from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBBtn, MDBCardImage, MDBCardText } from 'mdbreact'
import { Form, FormControl, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { getMovieList, getSearchedMoviesByTitles, getSearchedMovieById } from '../services/movieServices'
import { useHistory } from 'react-router-dom';
import { setMovieList } from '../redux/actions';

const MovieHome = () => {

  const moviesData = useSelector((store: any) => store.movies.movieList)
  console.log("MovieHome:", moviesData)
  const dispatch = useDispatch();

  useEffect(() => {
    getMovieList(dispatch)
    .then(res => dispatch(setMovieList(res.data.data)))
  }, [])

  return (
    <MDBCard style={{ maxWidth: '22rem' }}>


      {
        moviesData.map(function (movie: any) {
          return (
            <MDBCardBody>
              <MDBCardImage src={movie.Poster} position='top' alt='...' />
              <MDBCardTitle>{movie.Title}</MDBCardTitle>
              <MDBCardText>{movie.Year}</MDBCardText>
              <MDBCardText>{movie.imdbRating}</MDBCardText>
            </MDBCardBody>
          )
        })
      }

    </MDBCard>
  )
}

export default MovieHome;