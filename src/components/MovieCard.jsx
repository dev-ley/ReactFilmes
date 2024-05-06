import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";

const ContainerMovieCard = styled.div`
  text-align: center;
  width: 100%;
  color: #fff;
  margin-bottom: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: #111;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;

`;

const ImgMovieCard = styled.img`
  width: 100%;
  margin-bottom: 2rem;
`;

const H2MovieCard = styled.h2`
  font-size: 2rem;
  text-shadow: 1px 1px 10px #a3f8f6;
  margin-bottom: 1rem;
`;

const PMovieCard =styled.p`
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
`;

const Detalhes = styled(Link)`
    background-color: #30cbff;
    border: 2px solid #30cbff;
    border-radius: 4px;
    color: #000;
    padding: 1rem 0.5rem;
    text-align: center;
    font-weight: bold;
    text-decoration: none;
    &:hover {
    background-color: transparent;
    color: #30cbff;
    };
`;

const imagesURL = import.meta.env.VITE_IMG;

const MovieCard = ({ movie, showLink = true }) => {
  return (
    <ContainerMovieCard >
      <ImgMovieCard src={imagesURL + movie.poster_path} alt={movie.title} />
      <H2MovieCard>{movie.title}</H2MovieCard>
      <PMovieCard>
        <FaStar color="#30cbff" /> {movie.vote_average.toFixed(1)}
      </PMovieCard>
      {showLink && <Detalhes to={`/movie/${movie.id}`}>Detalhes</Detalhes>}
    </ContainerMovieCard>
  );
};

export default MovieCard;
