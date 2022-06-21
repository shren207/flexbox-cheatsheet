import { useEffect } from "react";

export default function Order({
  value,
  setValue,
}: {
  value: string;
  setValue: (value: string) => void;
}): JSX.Element {
  useEffect(() => {
    setValue("2");
    return () => {
      setValue("");
    };
  });

  return (
    <div className={`flex`}>
      <div className={"container-primary grow order-1"}>
        <div className={"item-primary"}>order : 1</div>
      </div>
      <div className={"container-primary grow order-2"}>
        <div className={"item-primary"}>order : 2</div>
      </div>
      <div
        className={`container-primary grow ${
          value === "2" ? "order-2" : value === "-1" ? "-order-1" : "order-5"
        }`}
      >
        <div className={`item-primary bg-cyan-400`}>Me</div>
      </div>
      <div className={"container-primary grow order-3"}>
        <div className={"item-primary"}>order : 3</div>
      </div>
      <div className={"container-primary grow order-4"}>
        <div className={"item-primary"}>order : 4</div>
      </div>
    </div>
  );
}
