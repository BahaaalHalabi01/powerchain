import { cn } from "@/lib/utils";
import { PWR } from "./pwr";
import Image from "next/image";

type TProps = {
  id: number;
  date: string;
  recipient: string;
  transactions: number;
  pwr: number;
  className?: string;
};
export function ChainBlock({
  pwr,
  id,
  transactions,
  recipient,
  date,
  className,
}: TProps) {
  return (
    <div className={cn("item-block", className ?? "")}>
      <div className="flex items-center grow gap-x-2">
        <Image
          src="/icons/block.svg"
          height={32}
          width={32}
          alt="block"
          className="md:block inline"
        />
        <div className="id-date">
          <strong className="truncate text-base">{id}</strong>
          <span className="font-medium italic">{date}</span>
        </div>
      </div>
      <div className="flex flex-col grow justify-between h-full flex-wrap">
        <div className="flex gap-x-2 text-xs md:text-base md:justify-between flex-wrap">
          Fee Recipient <strong>{recipient}</strong>
          <strong className="flex items-end md:hidden ml-auto">
            {transactions} txns
          </strong>
        </div>
        <div className="flex justify-between mt-auto text-sm md:text-base items-center pt-0.5 md:pt-0">
          <strong className="md:flex items-end hidden">
            {transactions} txns
          </strong>
          <PWR value={pwr} />
        </div>
      </div>
    </div>
  );
}
