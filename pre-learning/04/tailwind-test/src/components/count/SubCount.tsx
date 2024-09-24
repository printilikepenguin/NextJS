export default function SubCount({
  count,
  operator,
}: {
  count: number;
  operator: string;
}) {
  // console.log(props);
  // 비구조화 할당도 가능 >> 실무에서 주로 씁니덩
  // const { count, operator } = props

  return (
    <>
      <h1>
        {/* 뭐임 : {props.count} 카운트랑 {props.operator} 오퍼레이터 */}
        뭐임 : {count} 카운트랑 {operator} 오퍼레이터
      </h1>
    </>
  );
}
