import { useEffect } from "react";

export default function AlignContent({
  value,
  setValue,
}: {
  value: string;
  setValue: (value: string) => void;
}): JSX.Element {
  useEffect(() => {
    setValue("flex-start");
    return () => {
      setValue("");
    };
  });

  return (
    <div
      className={`flex flex-wrap h-full ${
        value === "flex-start"
          ? "content-start"
          : value === "flex-end"
          ? "content-end"
          : value === "center"
          ? "content-center"
          : value === "space-between"
          ? "content-between"
          : value === "space-around"
          ? "content-around"
          : "content-evenly"
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
    </div>
  );
}
