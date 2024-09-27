import MovieItem from "./MovieItem";

export default function MovieArea({
  movies,
  title,
}: {
  movies: MovieType[];
  title: string;
}) {
  return (
    <>
      {/* 무비 에어리어 */}
      <article className="bg-black py-10 px-4 xs:px-0">
        <section className="container mx-auto text-white">
          <span className="text-yellow-600">ONLINE STREAMING</span>
          <h2 className="text-[36px] font-bold mb-8">{title}</h2>
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-6 sm:px-0">
            {movies.map((movie) => (
              <MovieItem key={movie.id} {...movie} />
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
