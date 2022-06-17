import { useEffect } from "react";

export default function JustifyContent({
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
      className={`flex ${
        value === "flex-start"
          ? "justify-start"
          : value === "flex-end"
          ? "justify-end"
          : value === "center"
          ? "justify-center"
          : value === "space-between"
          ? "justify-between"
          : value === "space-around"
          ? "justify-around"
          : "justify-evenly"
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
    </div>
  );
}
