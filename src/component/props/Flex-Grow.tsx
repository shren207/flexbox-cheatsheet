import { useEffect } from "react";

export default function FlexGrow({
  value,
  setValue,
}: {
  value: string;
  setValue: (value: string) => void;
}): JSX.Element {
  // value => 0, 1, 2, 3
  useEffect(() => {
    setValue("1");
    return () => {
      setValue("");
    };
  });

  return (
    <div className={`container-primary flex`}>
      <div className={`item-primary bg-cyan-400 grow-[${value}]`}>Item</div>
      <div className={`item-primary grow`}>Item</div>
      <div className={`item-primary grow`}>Item</div>
    </div>
  );
}
