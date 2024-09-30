import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const { city } = router.query;

  // Mapping city query parameter to specific names
  const cityNames = {
    london: "런던",
    paris: "파리",
    newyork: "뉴욕",
  };

  return (
    <div>
      <h1>Selected City</h1>
      <p>{city ? cityNames[city.toLowerCase()] : "City not found"}</p>
    </div>
  );
}
