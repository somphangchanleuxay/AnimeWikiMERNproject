import React from 'react';
import { gql, useQuery } from '@apollo/client';

const GET_ANIME = gql`
  query Query {
    animes {
      title
      description
      image
    }
  }
`;
const AnimeList = () => {
  const { loading, error, data } = useQuery(GET_ANIME);
  console.log(data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <ul>
      {data.animes.map((anime) => (
        <li key={anime.title}>
          {anime.title} - {anime.description} 
          <img src={anime.image} alt={anime.title} />
        </li>
      ))}
    </ul>
  );
};
export default AnimeList;