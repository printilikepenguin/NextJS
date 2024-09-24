import BgImage from "../usercard/BgImage";
import Profile from "../usercard/Profile";

// UserProps 타입 정의
interface UserProps {
  bgImage: string;
  profileImage: string;
  username: string;
  id: string;
}

export default function UserCard({
  bgImage,
  profileImage,
  username,
  id,
}: UserProps) {
  return (
    <article className="card">
      {/* bgImage를 BgPic에 전달 */}
      <BgImage bgImage={bgImage} />

      {/* Profile에 profileImage, username, id 전달 */}
      <Profile profileImage={profileImage} username={username} id={id} />
    </article>
  );
}
