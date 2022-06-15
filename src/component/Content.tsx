import { useParams } from "react-router-dom";
import { dummy } from "../static/data";
import { ChangeEvent, useState } from "react";

export default function Content(): JSX.Element {
  const { id } = useParams();
  const [value, setValue] = useState<string>("flex");

  const updateValue = (event: ChangeEvent<HTMLSelectElement>): void => {
    setValue(event.target.value);
  };

  if (id === undefined) {
    return <div>404 Error</div>;
  }
  return (
    <article className={"bg-blue-300 w-full flex flex-col items-center"}>
      <header className={"mt-16 mb-32 text-8xl"}>{dummy[+id].title}</header>
      <main className={"bg-white w-9/12 h-3/6 border-4"}>
        <div className={`bg-red-600 m-1 p-2.5 rounded-md ${value}`}>
          <span className={"bg-black text-white m-1 p-2.5 rounded-md"}>
            First
          </span>
          <span className={"bg-black text-white m-1 p-2.5 rounded-md"}>
            Second
          </span>
          <span className={"bg-black text-white m-1 p-2.5 rounded-md"}>
            Third
          </span>
        </div>
        <div className={`bg-red-600 m-1 p-2.5 rounded-md ${value}`}>
          <span className={"bg-black text-white m-1 p-2.5 rounded-md"}>
            First
          </span>
          <span className={"bg-black text-white m-1 p-2.5 rounded-md"}>
            Second
          </span>
          <span className={"bg-black text-white m-1 p-2.5 rounded-md"}>
            Third
          </span>
        </div>
      </main>

      <div>
        <label htmlFor="display">Choose a display value:</label>
        <select id="display" onChange={updateValue}>
          <option selected>flex</option>
          <option>inline-flex</option>
        </select>
      </div>
    </article>
  );
}

// 여기서 밑에 flex, inline-flex dropdown 추가하거나 하는 식으로 코드 구현하면 간단할 것 같은데...?
// 은근 생각보다 간단할 것 같다. 노하우만 이해한다면 일일히 다 하드코딩하는 것보다 훨씬 간단할 것 같다.
