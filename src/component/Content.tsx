import { useParams } from "react-router-dom";
import { dummy } from "../static/data";

export default function Content(): JSX.Element {
  const { id } = useParams();
  if (id === undefined) {
    return <div>404 Error</div>;
  }
  return (
    <div className={"bg-blue-300 w-full flex flex-col items-center"}>
      <h1 className={"mt-16 mb-32 text-8xl"}>{dummy[+id].title}</h1>
      <h1 className={"w-9/12 h-3/6 bg-amber-100"}> contents here</h1>
    </div>
  );
}
