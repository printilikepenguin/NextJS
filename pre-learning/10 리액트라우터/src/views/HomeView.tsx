import { useSearchParams } from "react-router-dom";

export default function HomeView() {
  console.log("HomeView Rendered");
  // useParams();
  // useSearchParams();
  const [serachParams] = useSearchParams();
  console.log(serachParams.get("lang"));
  return (
    <>
      <h1>HomeView Component</h1>
    </>
  );
}
