export default function Display({ value }: { value: string }): JSX.Element {
  return (
    <>
      <div className={`bg-red-600 m-1 p-2.5 rounded-md ${value}`}>
        <span className={"bg-black text-white m-1 p-2.5 rounded-md text-2xl"}>
          First
        </span>
        <span className={"bg-black text-white m-1 p-2.5 rounded-md text-2xl"}>
          Second
        </span>
        <span className={"bg-black text-white m-1 p-2.5 rounded-md text-2xl"}>
          Third
        </span>
      </div>
      <div className={`bg-red-600 m-1 p-2.5 rounded-md ${value}`}>
        <span className={"bg-black text-white m-1 p-2.5 rounded-md text-2xl"}>
          First
        </span>
        <span className={"bg-black text-white m-1 p-2.5 rounded-md text-2xl"}>
          Second
        </span>
        <span className={"bg-black text-white m-1 p-2.5 rounded-md text-2xl"}>
          Third
        </span>
      </div>
      <div className={`bg-red-600 m-1 p-2.5 rounded-md ${value}`}>
        <span className={"bg-black text-white m-1 p-2.5 rounded-md text-2xl"}>
          First
        </span>
        <span className={"bg-black text-white m-1 p-2.5 rounded-md text-2xl"}>
          Second
        </span>
        <span className={"bg-black text-white m-1 p-2.5 rounded-md text-2xl"}>
          Third
        </span>
      </div>
    </>
  );
}
