import { useEffect } from "react";

export default function AlignSelf({
  value,
  setValue,
}: {
  value: string;
  setValue: (value: string) => void;
}): JSX.Element {
  // value => 1, 2, 3
  useEffect(() => {
    setValue("flex-start");
    return () => {
      setValue("");
    };
  });

  return (
    <div className={`flex h-full items-center`}>
      <div
        className={`container-primary grow ${
          value === "flex-start"
            ? "self-start"
            : value === "flex-end"
            ? "self-end"
            : value === "center"
            ? "self-center"
            : "self-stretch"
        }`}
      >
        <div className={`item-primary bg-cyan-400 grow`}>Item</div>
      </div>
      <div className={"container-primary grow"}>
        <div className={"item-primary"}>Item</div>
      </div>
      <div className={"container-primary grow"}>
        <div className={"item-primary"}>Item</div>
      </div>
      <div className={"container-primary grow"}>
        <div className={"item-primary"}>Item</div>
      </div>
    </div>
  );
}
