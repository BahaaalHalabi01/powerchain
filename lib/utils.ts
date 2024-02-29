import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function truncateMiddle(text: string, start = 7, end = 4) {
  return text.slice(0, start) + "..." + text.slice(-end);
}
