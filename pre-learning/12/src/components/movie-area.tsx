import MovieItem from "./movie-item";

/* async function getMovies(path: string) {
  const delay = [5000, 7000, 10000];

  await new Promise((resolve) =>
    setTimeout(resolve, delay[Math.floor(Math.random() * delay.length)])
  );

  try {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_KEY}`,
      },
    };

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_TMDB_URL}/${path}?language=ko&page=1`,
      options
    );

    if (!response.ok) {
      throw new Error("An error occurred");
    }

    return await response.json();
  } catch (e) {
    throw new Error(e instanceof Error ? e.message : "An error occurred");
  }
}
 */
export default async function MovieArea({
  path,
  title,
}: {
  path: string;
  title: string;
}) {
  const { results: movies, error }: { results: MovieItem[]; error: Error } =
    await fetch(
      `${process.env.NEXT_PUBLIC_DOMAIN_URL}/api/tmdb?path=` + path
    ).then((res) => res.json());

  if (error) {
    throw new Error(error.message);
  }

  return (
    <>
      <article className="bg-black py-10 px-4 xs:px-0">
        <section className="container mx-auto text-white">
          <span className="text-yellow-600">ONLINE STREAMING</span>
          <h2 className="text-[26px] xs:text-[30px] font-bold mb-2 xs:mb-2">
            {title}
          </h2>
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-6 sm:px-0">
            {movies &&
              movies.map((movie) => <MovieItem key={movie.id} {...movie} />)}
          </div>
        </section>
      </article>
    </>
  );
}
