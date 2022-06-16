import { useEffect } from "react";

export default function Display({
  value,
  setValue,
}: {
  value: string;
  setValue: (value: string) => void;
}): JSX.Element {
  // value => flex | inline-flex
  // tailwindcss => flex | inline-flex
  useEffect(() => {
    setValue("flex");
    return () => {
      setValue("");
    };
  });

  return (
    <>
      <div className={`container-primary items-start ${value}`}>
        <div className={"item-primary"}>One</div>
        <div className={"item-primary"}>Two</div>
        <div className={"item-primary"}>Three</div>
      </div>
      <div className={`container-primary ${value}`}>
        <div className={"item-primary"}>One</div>
        <div className={"item-primary"}>Two</div>
        <div className={"item-primary"}>Three</div>
      </div>
      <div className={`container-primary ${value}`}>
        <div className={"item-primary"}>One</div>
        <div className={"item-primary"}>Two</div>
        <div className={"item-primary"}>Three</div>
      </div>
    </>
  );
}
