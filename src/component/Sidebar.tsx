import { Link } from "react-router-dom";
import { dummy } from "../static/data";

type Dummy = {
  type: string;
  title: string;
};

export default function Sidebar() {
  return (
    <ul className="bg-amber-200 w-60">
      {dummy.map((item: Dummy, index: number) => {
        return (
          <Link to={`/${index}`}>
            <li key={index} className={"list-primary"}>
              {item.title}
            </li>
          </Link>
        );
      })}
    </ul>
  );
}

// 하드코딩한 부분, map 고차함수 사용하여 boilerplate 줄이기 (완료)
