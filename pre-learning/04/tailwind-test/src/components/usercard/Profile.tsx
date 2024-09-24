interface ProfileProps {
  profileImage: string;
  username: string;
  id: string;
}

export default function Profile({ profileImage, username, id }: ProfileProps) {
  return (
    <div className="profile">
      <img className="prof-img" src={profileImage} alt="profile-pic" />
      <h3 className="alias">{username}</h3>
      <p className="username">{id}</p>
      <button>Follow</button>
    </div>
  );
}
