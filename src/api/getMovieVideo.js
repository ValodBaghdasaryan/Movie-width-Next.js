import axios from "axios";

export const getMovieVideo = async (movieId) => {
  const { data } = await axios.get(`/movie/${movieId}/videos?language=en-US`);
  return data.results;
};
