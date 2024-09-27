const apiUrl = "https://api.themoviedb.org/3/movie";
export const nowPlayingUrl = `${apiUrl}/now_playing`;
export const popularUrl = `${apiUrl}/popular`;
export const upComingUrl = `${apiUrl}/upcoming`;
export const initailData = {
  results: [],
};
export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZDZjODUwZmVkZDY0YTUwN2U1MWNmYjIzMzVmMzA1YyIsIm5iZiI6MTcyNzQwOTg0Ny42NjgwOTgsInN1YiI6IjYxMjViZDU5OGMzMTU5MDA2Mjk4OTUzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5_O-IqktGsssq312RHhJMeJhITPtb-FXYalzHTLrgZU",
  },
};
