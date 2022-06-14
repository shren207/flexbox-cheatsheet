import { useParams } from "react-router-dom";

export default function Content() {
  const { id } = useParams();
  return <h1 className="bg-blue-300 w-full">Content {id}</h1>;
}
