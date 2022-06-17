import { useEffect } from "react";

export default function FlexWrap({
  value,
  setValue,
}: {
  value: string;
  setValue: (value: string) => void;
}): JSX.Element {
  useEffect(() => {
    setValue("nowrap");
    return () => {
      setValue("");
    };
  });

  return (
    <div
      className={`flex 
      ${
        value === "nowrap"
          ? "flex-nowrap"
          : value === "wrap"
          ? "flex-wrap"
          : "flex-wrap-reverse"
      }`}
    >
      <div className={"container-primary"}>
        <div className={"item-primary"}>One</div>
      </div>
      <div className={"container-primary"}>
        <div className={"item-primary"}>Two</div>
      </div>
      <div className={"container-primary"}>
        <div className={"item-primary"}>Three</div>
      </div>
      <div className={"container-primary"}>
        <div className={"item-primary"}>Four</div>
      </div>
      <div className={"container-primary"}>
        <div className={"item-primary"}>Five</div>
      </div>
      <div className={"container-primary"}>
        <div className={"item-primary"}>Six</div>
      </div>
      <div className={"container-primary"}>
        <div className={"item-primary"}>Seven</div>
      </div>
      <div className={"container-primary"}>
        <div className={"item-primary"}>Eight</div>
      </div>
      <div className={"container-primary"}>
        <div className={"item-primary"}>Nine</div>
      </div>
      <div className={"container-primary"}>
        <div className={"item-primary"}>Ten</div>
      </div>
      <div className={"container-primary"}>
        <div className={"item-primary"}>Eleven</div>
      </div>
      <div className={"container-primary"}>
        <div className={"item-primary"}>Twelve</div>
      </div>
      <div className={"container-primary"}>
        <div className={"item-primary"}>Thirteen</div>
      </div>
      <div className={"container-primary"}>
        <div className={"item-primary"}>Fourteen</div>
      </div>
    </div>
  );
}
