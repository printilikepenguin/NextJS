import Image from "next/image";
import Link from "next/link";
import travel from "/public/images/travel.png";

export default function layout({
  // {params}:{params:{}}
  params,
  children,
}: {
  params: { cityName: "seoul" | "london" | "paris" | "newyork" };
  children: React.ReactNode;
}) {
  const { cityName: city } = params;
  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <div className="flex flex-col items-center gap-4  max-w-[500px]">
          <Link href="/">
            <Image src={travel} alt={"로고"} width={80} />
          </Link>
          <ul className="flex items-center antialiased justify-around w-full">
            <li>
              <Link
                href="/city/seoul"
                className={`${city === "seoul" && "font-bold"}`}
              >
                Seoul
              </Link>
            </li>
            <li>
              <Link
                href="/city/london"
                className={`${city === "london" && "font-bold"}`}
              >
                London
              </Link>
            </li>
            <li>
              <Link
                href="/city/paris"
                className={`${city === "paris" && "font-bold"}`}
              >
                Paris
              </Link>
            </li>
            <li>
              <Link
                href="/city/newyork"
                className={`${city === "newyork" && "font-bold"}`}
              >
                NewYork
              </Link>
            </li>
          </ul>
          {children}
        </div>
      </div>
    </>
  );
}
