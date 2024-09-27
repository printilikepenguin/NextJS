import FetchEx1 from "./components/fetch/FetchEx1";
import useFetch from "./hook/useFetch";

export default function App() {
  const { data, isLoading, isError } = useFetch<{
    id: number;
    title: string;
    body: string;
    userId: string;
  }>("https://jsonplaceholder.typicode.com/posts");

  if (isLoading) return <div>로딩 중...</div>;
  if (isError) return <div>에러가 발생했습니다.</div>;

  return (
    <>
      <FetchEx1 />
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </>
  );
}
