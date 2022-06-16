import { dummy } from "../static/dummy";
import { ChangeEvent } from "react";

type DropdownProps = {
  property: string;
  updateValue: (event: ChangeEvent<HTMLSelectElement>) => void; // function call signature
};

export default function Dropdown({
  property,
  updateValue,
}: DropdownProps): JSX.Element {
  const { subProps } = dummy.find((item) => item["property"] === property)!;
  // '!' 관련해서 에러 핸들링 작성하자..

  // Dropdown component가 필요로 하는 것은 dummy의 property
  return (
    <nav className={"mb-8"}>
      <label htmlFor={property} className={"text-xl"}>
        Choose a {property} value :{" "}
      </label>
      <select id={property} onChange={updateValue}>
        {subProps.map((subProp) => (
          <option>{subProp}</option>
        ))}
      </select>
    </nav>
  );
}
