import { useEffect } from "react";

export default function FlexShrink({
  value,
  setValue,
}: {
  value: string;
  setValue: (value: string) => void;
}): JSX.Element {
  useEffect(() => {
    setValue("0");
    return () => {
      setValue("");
    };
  });

  return (
    <div className={`container-primary flex`}>
      <div
        className={`item-primary w-1/2 bg-cyan-400 ${
          value === "0"
            ? "shrink-0"
            : value === "1"
            ? "shrink"
            : value === "2"
            ? "shrink-[2]"
            : "shrink-[3]"
        }`}
      >
        Item
      </div>
      <div className={"item-primary w-1/2 shrink"}>Item</div>
      <div className={"item-primary w-1/2 shrink"}>Item</div>
    </div>
  );
}
