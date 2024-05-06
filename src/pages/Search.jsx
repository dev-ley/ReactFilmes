import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import MovieCard from '../components/MovieCard';

const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;


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
    text-shadow: 0px px 0px #a3f8f6;
`;

const MoviesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2rem;
  margin: 0 auto;
`;

const TextQuery = styled.span`
      color: #30cbff;
      text-shadow: 0 0 0;
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
 `;

const Search = () => {
  const [searchParams] = useSearchParams();

  const [movies, setMovies] = useState([]);
  const query = searchParams.get("q");

  const getSearchedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMovies(data.results);
  };

  useEffect(() => {
    const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}`;
    getSearchedMovies(searchWithQueryURL);
  }, [query]);

  return (
    <Container>
      <ContainerTitle>
        Resultados para: <TextQuery className="query-text">{query}</TextQuery>
      </ContainerTitle>
      <MoviesContainer>
        {movies.length > 0 &&
          movies.map((movie) => <ContainerMedia><MovieCard key={movie.id} movie={movie}/></ContainerMedia>)}
      </MoviesContainer>
    </Container>
  );
};

export default Search;