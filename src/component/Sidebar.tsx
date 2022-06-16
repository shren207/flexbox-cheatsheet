import { Link } from "react-router-dom";
import { dummy } from "../static/dummy";
import { useEffect } from "react";

type Dummy = {
  type: string;
  property: string;
  subProps: string[];
};

export default function Sidebar({
  clickedProp,
}: {
  clickedProp: string;
}): JSX.Element {
  useEffect(() => {}, [clickedProp]);

  return (
    <ul className={"bg-amber-200 min-w-[206px]"}>
      {dummy.map((item: Dummy, index: number) => {
        return (
          <Link to={`/${item.property}`} key={index}>
            <li
              className={`list-primary${
                item.property === clickedProp ? " bg-green-500" : ""
              }`}
            >
              {item.property}
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
