import { Link, useLocation, useNavigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";

export default function Nav() {
  console.log("nav");
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  return (
    <>
      <div className="flex gap-4 text-blue-500 underline">
        <Link
          to="/"
          className={twMerge(location.pathname === "/" && "text-rose-500")}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={twMerge(location.pathname === "/about" && "text-rose-500")}
        >
          About
        </Link>
        <Link
          to="/detail/1"
          className={twMerge(
            location.pathname.includes("/detail") && "text-rose-500"
          )}
        >
          Detail 1
        </Link>
        <a href="/">Home a tag</a>
        <button onClick={() => navigate("/about")}>about 페이지 이동</button>
      </div>
    </>
  );
}
