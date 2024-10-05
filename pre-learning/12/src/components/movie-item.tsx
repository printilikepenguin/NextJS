import { star } from "@/assets/assets";
import Image from "next/image";
import { format } from "date-fns";

export default function MovieItem({
  title,
  poster_path,
  vote_average,
  release_date,
}: MovieItem) {
  const thumbnail = `https://image.tmdb.org/t/p/w500/${poster_path}`;
  return (
    <>
      <div>
        <Image
          src={thumbnail}
          alt="thumbnail"
          className="rounded-md w-full"
          width={366}
          height={519}
        />
        <div className="flex justify-between items-center font-bold mt-4 mb-2 text-lg">
          <h4 className="line-clamp-1">{title}</h4>
        </div>
        <div className="flex justify-between items-center text-sm text-gray-200">
          <div className="flex items-center gap-2 font-bold">
            <Image
              src={star.src}
              alt="star"
              width={18}
              height={18}
              className="object-contain"
            />
            <span className="text-yellow-500">{vote_average.toFixed(1)}</span>
          </div>
          <span className="text-yellow-500 font-bold">
            {format(release_date, "yyyy")}
          </span>
        </div>
      </div>
    </>
  );
}
