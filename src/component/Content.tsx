import { useParams } from "react-router-dom";
import { ChangeEvent, useCallback, useEffect, useMemo, useState } from "react";
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
  const { property = "display" } = useParams(); // display, flex-direction 이런 값들이 들어온다.
  const { subProps } = dummy.find((item) => item["property"] === property)!;
  const [value, setValue] = useState<string>(subProps[0]);

  useEffect(() => {
    setClickedProp(property);
    setValue(value);
  }, [property, value]);
  // deps에 상태변경함수(setValue)도 inject해 주어야 하느냐로 찬반이 갈리는데, 굳이 안 넣어도 상관은 없음

  const updateValue = useCallback(
    (event: ChangeEvent<HTMLSelectElement>): void => {
      setValue(event.target.value);
    },
    []
    // 여기도 위의 useEffect와 마찬가지로 deps에 굳이 상태변경함수(setValue)는 안 넣어도 상관없음
  );

  // useMemo 사용한 switch 문으로 conditional rendering 최적화
  const result = useMemo(() => {
    switch (property) {
      case "display":
        return <Display value={value} setValue={setValue} />;
      case "flex-direction":
        return <FlexDirection value={value} setValue={setValue} />;
      case "flex-wrap":
        return <FlexWrap value={value} setValue={setValue} />;
      case "justify-content":
        return <JustifyContent value={value} setValue={setValue} />;
      case "align-items":
        return <AlignItems value={value} setValue={setValue} />;
      case "align-content":
        return <AlignContent value={value} setValue={setValue} />;
      case "order":
        return <Order value={value} setValue={setValue} />;
      case "flex-grow":
        return <FlexGrow value={value} setValue={setValue} />;
      case "flex-shrink":
        return <FlexShrink value={value} setValue={setValue} />;
      case "flex-basis":
        return <FlexBasis value={value} setValue={setValue} />;
      case "align-self":
        return <AlignSelf value={value} setValue={setValue} />;
      default:
        return <div>Error</div>;
    }
  }, [property, value]);

  return (
    <article className={"bg-blue-300 w-full flex flex-col items-center"}>
      <header className={"mt-14 mb-16 text-9xl"}>{property}</header>
      <Dropdown property={property} updateValue={updateValue} />
      <main className={"bg-white w-[1000px] h-96 border-4"}>{result}</main>
    </article>
  );
}
