import { useParams } from "react-router-dom";
import { dummy } from "../static/data";

export default function Content(): JSX.Element {
  const { id } = useParams();
  if (id === undefined) {
    return <div>404</div>;
  }
  return <h1 className="bg-blue-300 w-full">Content {dummy[+id].title}</h1>;
}
