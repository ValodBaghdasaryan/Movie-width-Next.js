import React, { useState } from "react";
import { formatDate } from "@/helpers/formatDate";
import { MovieCastPopup } from "../MovieCastPopup/MovieCastPopup";
import { getImgUrl } from "@/helpers/getImgUrl";
import MovieVideoBtn from "../MovieVideoBtn/MovieVideoBtn";

export const TrendingMovie = ({ movie }) => {
  const [isOpenShowCast, setIsOpenShowCast] = useState(false);

  console.log(isOpenShowCast)

  return (
    <li>
      <img src={getImgUrl(220, 330, movie.backdrop_path)} alt={movie.title} />
      <h3>{movie.title}</h3>
      <div>{formatDate(movie.release_date)}</div>
      <MovieCastPopup isOpen={isOpenShowCast} onClose={()=>setIsOpenShowCast(false)} movie={movie}/>
      <button type="button" onClick={() => setIsOpenShowCast(true)}>
        Show Cast
      </button>
      <MovieVideoBtn movie={movie} />
    </li>
  );
};
