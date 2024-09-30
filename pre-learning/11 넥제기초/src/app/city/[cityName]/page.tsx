import Image from "next/image";
import seoul from "/public/images/seoul.jpg";
import london from "/public/images/london.jpg";
import paris from "/public/images/paris.jpg";
import newyork from "/public/images/newyork.jpg";

export default function page({
  params,
}: {
  params: { cityName: "seoul" | "london" | "paris" | "newyork" };
}) {
  const { cityName: city } = params;
  return (
    <>
      <div>
        {city === "seoul" && <Image src={seoul} alt={!city ? "seoul" : city} />}
        {city === "london" && <Image src={london} alt={city} />}
        {city === "paris" && <Image src={paris} alt={city} />}
        {city === "newyork" && <Image src={newyork} alt={city} />}
      </div>
    </>
  );
}
