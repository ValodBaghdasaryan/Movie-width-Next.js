import React from "react";
import { Popup } from "../Popup/Popup";
import { useQuery } from "@tanstack/react-query";
import { getCastsByMovie } from "@/api/getCastsByMovie";
import { getImgUrl } from "@/helpers/getImgUrl";
import { useDispatch } from "react-redux";
import { openSupport } from "@/store/slices/supportSlice";

export const MovieCastPopup = ({ isOpen, onClose, movie }) => {
  const dispatch = useDispatch();
  const {
    data: actors,
    isLoading,
    isError,
  } = useQuery({
    queryFn: () => getCastsByMovie(movie.id),
    queryKey: ["movieCast", movie.id],
    enabled: isOpen,
  });

  const onSupportBtnClick = () => {
    onClose();
    dispatch(openSupport());
  };

  return (
    <Popup onClose={onClose} isOpen={isOpen}>
      <h3>Top Casts of {movie.title}</h3>

      {isLoading && <div>Loading...</div>}
      {isError && (
        <button type="button" onClick={onSupportBtnClick}>
          Oops! You have a problem, please feel free to ask our support!
        </button>
      )}

      {actors && (
        <ul>
          {actors.map((actor) => (
            <li key={actor.id}>
              <h4>{actor.name}</h4>
              <img
                src={getImgUrl(276, 350, actor.profile_path)}
                alt={actor.name}
              />
            </li>
          ))}
        </ul>
      )}
    </Popup>
  );
};
