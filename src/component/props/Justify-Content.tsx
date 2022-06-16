import { useEffect } from "react";

export default function JustifyContent({
  value,
  setValue,
}: {
  value: string;
  setValue: (value: string) => void;
}): JSX.Element {
  // value => start | end | center | space-between | space-around | space-evenly
  // tailwindcss => justify-start | justify-end | justify-center | justify-between | justify-around | justify-evenly

  useEffect(() => {
    setValue("flex-start");
    return () => {
      setValue("");
    };
  });

  return (
    <>
      <div
        className={`container-primary flex ${
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
        <div className={"item-primary"}>One</div>
        <div className={"item-primary"}>Two</div>
        <div className={"item-primary"}>Three</div>
      </div>
    </>
  );
}
