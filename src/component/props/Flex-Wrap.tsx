import { useEffect } from "react";

export default function FlexWrap({
  value,
  setValue,
}: {
  value: string;
  setValue: (value: string) => void;
}): JSX.Element {
  // value => nowrap | wrap | wrap-reverse
  // tailwindcss => flex-no-wrap | flex-wrap | flex-wrap-reverse

  useEffect(() => {
    setValue("nowrap");
    return () => {
      setValue("");
    };
  });

  return (
    <>
      <div
        className={`container-primary flex 
      ${
        value === "nowrap"
          ? "flex-nowrap"
          : value === "wrap"
          ? "flex-wrap"
          : "flex-wrap-reverse"
      }`}
      >
        <div className={"item-primary"}>One</div>
        <div className={"item-primary"}>Two</div>
        <div className={"item-primary"}>Three</div>
        <div className={"item-primary"}>Four</div>
        <div className={"item-primary"}>Five</div>
        <div className={"item-primary"}>Six</div>
        <div className={"item-primary"}>Seven</div>
        <div className={"item-primary"}>Eight</div>
        <div className={"item-primary"}>Nine</div>
        <div className={"item-primary"}>Ten</div>
        <div className={"item-primary"}>Eleven</div>
        <div className={"item-primary"}>Twelve</div>
        <div className={"item-primary"}>Thirteen</div>
        <div className={"item-primary"}>Fourteen</div>
      </div>
    </>
  );
}
