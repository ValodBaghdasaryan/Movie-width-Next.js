import React, { useState } from "react";
import { MovieVideoPopup } from "../MovieVideoPopup/MovieVideoPopup";

const MovieVideoBtn = ({movie}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Trailers</button>
      <MovieVideoPopup movie={movie} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default MovieVideoBtn;
