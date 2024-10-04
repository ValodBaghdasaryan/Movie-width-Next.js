import React from "react";
import { Popup } from "../Popup/Popup";
import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { openSupport } from "@/store/slices/supportSlice";
import { getMovieVideo } from "@/api/getMovieVideo";

export const MovieVideoPopup = ({ isOpen, onClose, movie }) => {
  const dispatch = useDispatch();
  const {
    data: trailers,
    isLoading,
    isError,
  } = useQuery({
    queryFn: () => getMovieVideo(movie.id),
    queryKey: ["movieVideo", movie.id],
    enabled: isOpen,
  });

  const onSupportBtnClick = () => {
    onClose();
    dispatch(openSupport());
  };



  const trailer = trailers?.find(t => t.site ==="YouTube" )



  return (
    <Popup onClose={onClose} isOpen={isOpen}>
      <h3>Top Casts of {movie.title}</h3>

      {isLoading && <div>Loading...</div>}
      {isError && (
        <button type="button" onClick={onSupportBtnClick}>
          Oops! You have a problem, please feel free to ask our support!
        </button>
      )}

      {trailer && (
        <>
          <h4>{trailer.name}</h4>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${trailer.key}?si=5AskfaOIPHKZzkEA`}
            title={`${trailer.title}`}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </>
      )}
    </Popup>
  );
};
