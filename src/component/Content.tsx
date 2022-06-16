import { useParams } from "react-router-dom";
import { ChangeEvent, useEffect, useState } from "react";
import { dummy } from "../static/dummy";
import Dropdown from "./Dropdown";
import Display from "./props/Display";
import FlexDirection from "./props/Flex-Direction";
import FlexWrap from "./props/Flex-Wrap";
import JustifyContent from "./props/Justify-Content";
import AlignItems from "./props/Align-Items";
import AlignContent from "./props/Align-Content";
import Order from "./props/Order";
import FlexGrow from "./props/Flex-Grow";
import FlexShrink from "./props/Flex-Shrink";
import FlexBasis from "./props/Flex-Basis";
import AlignSelf from "./props/Align-Self";

type ContentProps = {
  setClickedProp: (property: string) => void;
};

export default function Content({ setClickedProp }: ContentProps): JSX.Element {
  const { property } = useParams(); // display, flex-direction 이런 값들이 들어온다.
  if (property === undefined) return <div>Error</div>;
  const { subProps } = dummy.find((item) => item["property"] === property)!;
  const [value, setValue] = useState<string>(subProps[0]);

  useEffect(() => {
    setClickedProp(property);
    setValue(value);
  }, [property, value]);

  const updateValue = (event: ChangeEvent<HTMLSelectElement>): void => {
    // argument 타입을 ChangeEvent<HTMLInputElement> 으로 지정하게 되면 에러가 발생함.
    // 왜냐하면 <select> 엘리먼트에는 ChangeEvent<HTMLSelectElement>라는 타입을 사용해야 하기 때문(?)
    setValue(event.target.value);
  };

  return (
    <article className={"bg-blue-300 w-full flex flex-col items-center"}>
      <header className={"mt-14 mb-16 text-9xl"}>{property}</header>
      <Dropdown property={property} updateValue={updateValue} />
      <main className={"bg-white w-9/12 h-2/5 border-4 max-w-[1500px]"}>
        {property === "display" ? (
          <Display value={value} setValue={setValue} />
        ) : property === "flex-direction" ? (
          <FlexDirection value={value} setValue={setValue} />
        ) : property === "flex-wrap" ? (
          <FlexWrap value={value} setValue={setValue} />
        ) : property === "justify-content" ? (
          <JustifyContent value={value} setValue={setValue} />
        ) : property === "align-items" ? (
          <AlignItems value={value} setValue={setValue} />
        ) : property === "align-content" ? (
          <AlignContent value={value} setValue={setValue} />
        ) : property === "order" ? (
          <Order value={value} setValue={setValue} />
        ) : property === "flex-grow" ? (
          <FlexGrow value={value} setValue={setValue} />
        ) : property === "flex-basis" ? (
          <FlexBasis value={value} setValue={setValue} />
        ) : property === "flex-shrink" ? (
          <FlexShrink value={value} setValue={setValue} />
        ) : property === "align-self" ? (
          <AlignSelf value={value} setValue={setValue} />
        ) : null}
      </main>
    </article>
  );
}
