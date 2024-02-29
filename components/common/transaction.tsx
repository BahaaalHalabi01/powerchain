import { cn, truncateMiddle } from "@/lib/utils";
import { PWR } from "./pwr";
import Image from "next/image";

type TProps = {
  id: string;
  date: string;
  from: string;
  to: string;
  pwr: number;
  className?: string;
};

export function Transaction({ date, pwr, from, id, to, className }: TProps) {
  return (
    <div className={cn("item-block", className)}>
      <div className="flex items-center grow gap-x-2">
        <Image
          alt="block"
          src="/icons/list.svg"
          height={32}
          width={32}
          className="md:block inline"
        />
        <div className="id-date">
          <strong className="truncate text-base">{id}</strong>
          <span className="font-medium italic">{date}</span>
        </div>
      </div>

      <div className="flex flex-row grow justify-between h-full text-xs md:text-base md:flex-col flex-wrap">
        <span className="flex gap-x-2">
          From <strong>{truncateMiddle(from)}</strong>
        </span>
        <span className="flex gap-x-2 truncate">
          To <strong className="text-blue-500">{truncateMiddle(to)}</strong>
        </span>
      </div>
      <div className="flex items-center min-w-fit">
        <PWR value={pwr} />
      </div>
    </div>
  );
}
