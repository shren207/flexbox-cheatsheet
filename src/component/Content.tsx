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

  useEffect(() => {
    setClickedProp(property);
  }, [property]);

  // property를 string으로 하니까 에러 수정됨
  const { subProps } = dummy.find((item) => item["property"] === property)!;
  const [value, setValue] = useState<string>(subProps[0]);

  const updateValue = (event: ChangeEvent<HTMLSelectElement>): void => {
    // argument 타입을 ChangeEvent<HTMLInputElement> 으로 지정하게 되면 에러가 발생함.
    // 왜냐하면 <select> 엘리먼트에는 ChangeEvent<HTMLSelectElement>라는 타입을 사용해야 하기 때문(?)
    setValue(event.target.value);
  };

  return (
    <article className={"bg-blue-300 w-full flex flex-col items-center"}>
      <header className={"mt-14 mb-16 text-9xl"}>{property}</header>
      <Dropdown property={property} updateValue={updateValue} />
      <main className={"bg-white w-9/12 h-3/6 border-4 max-w-[1500px]"}>
        {property === "display" ? (
          <Display value={value} />
        ) : property === "flex-direction" ? (
          <FlexDirection value={value} />
        ) : property === "flex-wrap" ? (
          <FlexWrap value={value} />
        ) : property === "justify-content" ? (
          <JustifyContent value={value} />
        ) : property === "align-items" ? (
          <AlignItems value={value} />
        ) : property === "align-content" ? (
          <AlignContent value={value} />
        ) : property === "order" ? (
          <Order value={value} />
        ) : property === "flex-grow" ? (
          <FlexGrow value={value} />
        ) : property === "flex-basis" ? (
          <FlexBasis value={value} />
        ) : property === "flex-shrink" ? (
          <FlexShrink value={value} />
        ) : property === "align-self" ? (
          <AlignSelf value={value} />
        ) : null}
      </main>
    </article>
  );
}

// 일단 dropdown 추가해서 메뉴별로 서브 프로퍼티 구현해보았다.
// 2개 정도는 정상적으로 동작하는 것 같다.
// 이제 내가 원하는 것은, 위와 같이 일일히 하드코딩하는 것이 아니라, 컴포넌트별로 렌더링을 해주는 것이다.
// 그 전에, Sidebar 각각의 메뉴에 focusing 효과를 주는 것부터 해줘야 할듯
