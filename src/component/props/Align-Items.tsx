import { useEffect } from "react";

export default function AlignItems({
  value,
  setValue,
}: {
  value: string;
  setValue: (value: string) => void;
}): JSX.Element {
  // value => flex-start | flex-end | center | stretch
  // tailwindcss => items-start | items-end | items-center | items-stretch
  useEffect(() => {
    setValue("flex-start");
    return () => {
      setValue("");
    };
  });
  return (
    <div
      className={`flex h-full ${
        value === "flex-start"
          ? "items-start"
          : value === "flex-end"
          ? "items-end"
          : value === "center"
          ? "items-center"
          : "items-stretch"
      }`}
    >
      <div className={"container-primary grow"}>
        <div className={"item-primary"}>One</div>
      </div>
      <div className={"container-primary grow"}>
        <div className={"item-primary"}>Two</div>
      </div>
      <div className={"container-primary grow"}>
        <div className={"item-primary"}>Three</div>
      </div>
      <div className={"container-primary grow"}>
        <div className={"item-primary"}>Four</div>
      </div>
    </div>
  );
}
