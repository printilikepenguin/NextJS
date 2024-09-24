import "./css/globals.css";
import UserCard from "./components/usercard/UserCard";

export default function App() {
  const bgImage =
    "https://images.pexels.com/photos/158251/forest-the-sun-morning-tucholskie-158251.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
  const profileImage =
    "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
  const username = "어중이떠중이";
  const id = "@watdarigatdari";
  const printName = (name: string) => {};

  return (
    <>
      {/* UserCard에 props 전달 */}
      <UserCard
        bgImage={bgImage}
        profileImage={profileImage}
        username={username}
        id={id}
        printName={printName}
      />
    </>
  );
}
