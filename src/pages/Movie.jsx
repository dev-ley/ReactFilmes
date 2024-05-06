import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BsGraphUp, BsWallet2, BsHourglassSplit, BsFillFileEarmarkTextFill, } from "react-icons/bs";
import MovieCard from "../components/MovieCard";
import styled from "styled-components";

const Pagemovie = styled.div`
  color: #fff;
  flex-direction: column;
  max-width: 600px;
  width:100%;
  margin: 2rem auto;
  text-align: start;
  margin-bottom: 1rem;
  font-size: 2rem;
  text-shadow: 1px 1px 10px #a3f8f6;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 0.4rem;
  padding: 20px;

`;

const Tagline = styled.p`
  text-align: center;
  font-size: 1.3rem;
  margin-bottom: 2rem;
`

const Info = styled.div`
    margin-bottom: 1.5rem;
`
const TextInfo = styled.h3`
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`
const Description = styled.p`
  line-height: 2rem;
  text-align: justify;
  text-shadow: 0 0 0;
`;
const Text = styled.p`
  font-size:2rem;
  
`


const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const getMovie = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMovie(data);
  };

  const formatCurrency = (number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  useEffect(() => {
    const movieUrl = `${moviesURL}${id}?${apiKey}`;
    getMovie(movieUrl);
  }, []);

  return (
    <Pagemovie>
      {movie && (
        <>
          <MovieCard  movie={movie} showLink={false} />
          <Tagline >{movie.tagline}</Tagline>
          <Info >
            <TextInfo>
              <BsWallet2 /> Orçamento:
            </TextInfo>
            <Text>{formatCurrency(movie.budget)}</Text>
          </Info>
          <Info >
            <TextInfo>
              <BsGraphUp /> Receita:
            </TextInfo>
            <Text>{formatCurrency(movie.revenue)}</Text>
          </Info>
          <Info >
            <TextInfo>
              <BsHourglassSplit /> Duração:
            </TextInfo>
            <Text>{movie.runtime} minutos</Text>
          </Info>
          <Info >
            <TextInfo>
              <BsFillFileEarmarkTextFill /> Descrição:
            </TextInfo>
            <Description>{movie.overview}</Description>
          </Info>
        </>
      )}
    </Pagemovie>
  );
};

export default Movie;