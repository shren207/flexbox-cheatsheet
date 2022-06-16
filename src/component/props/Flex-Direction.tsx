import { useEffect } from "react";
import { createLogger } from "vite";

export default function FlexDirection({
  value,
  setValue,
}: {
  value: string;
  setValue: (value: string) => void;
}): JSX.Element {
  // value => row | row-reverse | column | column-reverse
  // tailwindcss => flex-row | flex-row-reverse | flex-col | flex-col-reverse
  useEffect(() => {
    setValue("row");
    return () => {
      setValue("");
    };
  });

  return (
    <div
      className={`flex ${
        value === "row"
          ? "flex-row"
          : value === "row-reverse"
          ? "flex-row-reverse"
          : value === "column"
          ? "flex-col"
          : "flex-col-reverse"
      } items-start h-full`}
    >
      <div className={"container-primary"}>
        <div className={`item-primary`}>One</div>
      </div>
      <div className={"container-primary"}>
        <div className={`item-primary`}>Two</div>
      </div>
      <div className={"container-primary"}>
        <div className={`item-primary`}>Three</div>
      </div>
    </div>
  );
}
