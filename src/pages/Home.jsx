import React from 'react'
import { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';
import styled from 'styled-components';

const Container = styled.div`
    color: #fff;
    font-size: 2.5rem;
    text-align: center;
    margin: 2rem 0 1rem;
`;
const ContainerTitle = styled.h2`
    color: #fff;
    font-size: 2.5rem;
    text-align: center;
    margin: 2rem 0 1rem;
    text-shadow: 1px 1px 10px #a3f8f6;
`;

const MoviesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 2rem;
    margin: 0 auto;
`;

const ContainerMedia = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  @media screen and (min-width: 481px) and (max-width: 1000px) {
      width: 48%; 
      margin-bottom: 2rem;
    }

  @media screen and (min-width: 1001px) {
      width: 33%;
      margin-bottom: 2rem; 
    }
  @media screen and (min-width: 1501px) {
      width: 20%;
      margin-bottom: 2rem; 
    }
 `
const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setTopMovies(data.results);
  };

  useEffect(() => {
    const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;
    getTopRatedMovies(topRatedUrl);
  }, []);

  return (
    <Container >
      <ContainerTitle>Melhores filmes:</ContainerTitle>
      <MoviesContainer>
        {topMovies.length > 0 &&
          topMovies.map((movie) =><ContainerMedia> <MovieCard key={movie.id} movie={movie} /></ContainerMedia> )}
      </MoviesContainer>
    </Container>
  );
};

export default Home;
