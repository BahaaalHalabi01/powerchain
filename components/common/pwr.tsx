type TProps = {
  value: number;
};

export function PWR(props: TProps) {
  return (
    <span className="bg-gray-200 text-black rounded-lg md:p-2 flex items-center flex-row min-w-fit md:text-sm p-1 text-xs">
      {props.value} PWR
    </span>
  );
}
