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
      <div className={`item-primary w-1/2 bg-cyan-400 shrink-[${value}]`}>
        Item
      </div>
      <div className={"item-primary w-1/2 shrink"}>Item</div>
      <div className={"item-primary w-1/2 shrink"}>Item</div>
    </div>
  );
}
