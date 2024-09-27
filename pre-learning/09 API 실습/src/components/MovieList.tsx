import { star } from "../assets/assets";

export default function MovieList({
  title,
  imgPath,
  voteAverage,
  releasedDate,
}: {
  title: string;
  imgPath: string;
  voteAverage: number;
  releasedDate: string;
}) {
  const releasedYear = releasedDate?.slice(0, 3);
  const voteAverage2 = voteAverage.toFixed(1);

  return (
    <div>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500/${imgPath}`}
          alt=""
          className="rounded-md w-full"
        />
        <div className="flex justify-between items-center font-bold mt-4 mb-2 text-lg">
          <h4 className="">{title}</h4>
        </div>
        <div className="flex justify-between items-center text-sm text-gray-200">
          <div className="flex items-center gap-2 font-bold">
            <img
              src={star}
              alt="star"
              width={18}
              height={18}
              className="object-contain"
            />
            <span className="text-yellow-500">{voteAverage2}</span>
          </div>
          <span className="text-yellow-500 font-bold">{releasedYear}</span>
        </div>
      </div>
    </div>
  );
}
