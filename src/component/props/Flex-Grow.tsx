import { useEffect } from "react";

export default function FlexGrow({
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
        className={`item-primary bg-cyan-400 ${
          value === "0"
            ? "grow-0"
            : value === "1"
            ? "grow"
            : value === "2"
            ? "grow-[2]"
            : "grow-[3]"
        }`}
      >
        Item
      </div>
      <div className={`item-primary grow`}>Item</div>
      <div className={`item-primary grow`}>Item</div>
    </div>
  );
}
