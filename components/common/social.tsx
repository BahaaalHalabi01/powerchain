import Link from "next/link";
import { ReactNode } from "react";

type TProps = {
  label: string;
  href: string;
  icon: ReactNode;
};

export function Social({ href, label, icon }: TProps) {
  return (
    <Link
      href={href}
      rel="author"
      target="_blank"
      className="flex bg-brand-purple w-social h-social text-white rounded-2xl px-4 py-3 text-xs items-center justify-between hover:scale-105 hover:bg-light-blue"
    >
      {icon}
      <span className="max-w-14 inline-flex">{label}</span>
    </Link>
  );
}
