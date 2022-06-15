import { Link } from "react-router-dom";
import { dummy } from "../static/data";
import { useEffect } from "react";

type Dummy = {
  type: string;
  title: string;
};

export default function Sidebar({
  isClicked,
}: {
  isClicked: string;
}): JSX.Element {
  useEffect(() => {
    console.log(isClicked);
  }, [isClicked]);

  return (
    <ul className={"bg-amber-200 w-60"}>
      {dummy.map((item: Dummy, index: number) => {
        return (
          // <Link to={`/${index}`} key={index}> // 정상 동작하는 이전의 코드
          <Link to={`/${item.title}`} key={index}>
            <li
              className={`list-primary${
                index.toString() === isClicked ? " bg-green-500" : ""
              }`}
            >
              {item.title}
            </li>
          </Link>
        );
      })}
    </ul>
  );
}

// 하드코딩한 부분, map 고차함수 사용하여 boilerplate 줄이기 (완료)

// <li>는 폼 엘리먼트가 아니기 때문에, focus / blur 이벤트를 트리거할 수 없다.
// 따라서, 다른 방법으로 효과를 주어야 한다.
