import { useParams } from "react-router-dom";

export default function DetailView() {
  const params = useParams();
  return (
    <>
      <h1>DetailView Component : {params.id}</h1>
    </>
  );
}
