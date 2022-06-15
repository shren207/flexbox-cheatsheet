import { useParams } from "react-router-dom";
import { dummy } from "../static/data";

export default function Content(): JSX.Element {
  const { id } = useParams();
  if (id === undefined) {
    return <div>404 Error</div>;
  }
  return (
    <article className={"bg-blue-300 w-full flex flex-col items-center"}>
      <h1 className={"mt-16 mb-32 text-8xl"}>{dummy[+id].title}</h1>
      <h1 className={"bg-white w-9/12 h-3/6 border-4"}>
        <div className={"bg-red-600 m-1 flex"}>
          <span className={"bg-black text-white m-1 p-10 rounded-md"}>
            First
          </span>
          <span className={"bg-black text-white m-1 p-10 rounded-md"}>
            Second
          </span>
          <span className={"bg-black text-white m-1 p-10 rounded-md"}>
            Third
          </span>
        </div>
        <div className={"bg-red-600 m-1 flex"}>
          <span className={"bg-black text-white m-1 p-10 rounded-md"}>
            First
          </span>
          <span className={"bg-black text-white m-1 p-10 rounded-md"}>
            Second
          </span>
          <span className={"bg-black text-white m-1 p-10 rounded-md"}>
            Third
          </span>
        </div>
      </h1>
    </article>
  );
}
