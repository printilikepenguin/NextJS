export default function BgImage({ bgImage }: { bgImage: string }) {
  return (
    <>
      <div>
        <img className="card-img" src={bgImage} alt="background-pic" />
      </div>
    </>
  );
}
