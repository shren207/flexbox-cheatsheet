import { useEffect } from "react";
export default function FlexBasis({
  value,
  setValue,
}: {
  value: string;
  setValue: (value: string) => void;
}): JSX.Element {
  useEffect(() => {
    setValue("auto");
    return () => {
      setValue("");
    };
  });

  return (
    <div className={`container-primary flex`}>
      <div
        className={`item-primary bg-cyan-400 ${
          value === "auto"
            ? "basis-auto"
            : value === "0"
            ? "basis-0"
            : value === "25%"
            ? "basis-1/4"
            : value === "33%"
            ? "basis-1/3"
            : value === "50%"
            ? "basis-1/2"
            : value === "66%"
            ? "basis-2/3"
            : "basis-3/4"
        }`}
      >
        I'm item
      </div>
      <div className={"item-primary order-1 grow"}>Item</div>
      <div className={"item-primary order-2 grow"}>Item</div>
    </div>
  );
}
