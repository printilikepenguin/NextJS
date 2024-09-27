import { initailData, nowPlayingUrl, options, popularUrl } from "./api/tmdb";
import MovieArea from "./components/MovieArea";
import MovieHeader from "./components/MovieHeader";
import MovieMain from "./components/MovieMain";
import useFetch from "./hook/useFetch";

export default function App() {
  const {
    data: { results: nowPlaying },
    isLoading: isLoadingNowplaying,
    isError: isErrorNowPlaying,
  } = useFetch<MovieDataType>(nowPlayingUrl, initailData, options);

  const {
    data: { results: popular },
    isLoading: isLoadingPopular,
    isError: isErrorPopular,
  } = useFetch<MovieDataType>(popularUrl, initailData, options);

  const {
    data: { results: upcoming },
    isLoading: isLoadingUpcoming,
    isError: isErrorUpcoming,
  } = useFetch<MovieDataType>(popularUrl, initailData, options);

  if (isLoadingNowplaying || isLoadingPopular || isLoadingUpcoming)
    return <div>Loading...</div>;
  if (isErrorNowPlaying || isErrorPopular || isErrorUpcoming)
    return <div>Error...</div>;

  return (
    <>
      <MovieHeader />
      <MovieMain />
      <MovieArea movies={nowPlaying} title="Now Playing" />
      <MovieArea movies={popular} title="Popular" />
      <MovieArea movies={upcoming} title="Upcoming" />
    </>
  );
}
