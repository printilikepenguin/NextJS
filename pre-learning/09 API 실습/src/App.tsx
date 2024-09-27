import { useEffect } from "react";
import useFetch from "./hooks/useFetch";
import MovieList from "./components/MovieList";
// import MovieLoader from "./components/MovieLoader";
import MovieHeader from "./components/MovieHeader";
import MovieMain from "./components/MovieMain";
import MovieLoader from "./components/MovieLoader";

export default function App() {
  const API_KEY =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OTRkN2VjNWIwODQ2ZTYyYjAzNWY3ZGEzOGRjMWFiNCIsIm5iZiI6MTcyNzQxMDIxMy42NTE1Niwic3ViIjoiNjZmNjFkN2FiOWZkMjc2Mjc5NTA5NmM5Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.C3vtIHHOpzo1-fi7GLdD1gm499kaDmoQpkK56t6vsAk";
  const url = "https://api.themoviedb.org/3/trending/movie/week?language=ko-KR";

  const { data, isLoading, isError } = useFetch<{
    id: number;
    title: string;
    poster_path: string;
    userId: string;
    vote_average: number;
    release_date: string;
  }>(url, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  });

  useEffect(() => {
    console.log("앱tsx", data);
  }, [data]);

  if (isLoading) return <div>로딩 중...</div>;
  if (isError) return <div>에러가 발생했습니다.</div>;

  return (
    <>
      {/* 헤더 */}
      <MovieHeader />
      {/* 메인 */}
      <MovieMain />
      {/* 무비 에어리어 */}
      <article className="bg-black py-10 px-4 xs:px-0">
        <section className="container mx-auto py-8 text-white">
          <span className="text-yellow-600">ONLINE STREAMING</span>
          <h2 className="text-[36px] font-bold mb-8">Movie LIST</h2>
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-6 sm:px-0">
            {/* 아이템 1개 */}
            {isLoading ? (
              <MovieLoader />
            ) : (
              // 데이터가 있을 때 목록을 보여줌
              data.map((movie, i) => (
                <MovieList
                  key={movie.id} // key는 배열의 각 항목에 필요
                  // 아래 다 생략하고 이거 한 줄만 쓰면 댐
                  {...movie}
                  title={movie.title}
                  imgPath={movie.poster_path} // posterPath 대신 API의 정확한 키인 poster_path 사용
                  voteAverage={movie.vote_average}
                  releasedDate={movie.release_date} // released_date도 API의 정확한 키 사용
                />
              ))
            )}
          </div>
        </section>
      </article>
    </>
  );
}
