import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type TProps = {
  title: string;
  logo?: ReactNode;
  value: number;
  sign?: string;
  variation?: number;
  secondary?: Omit<TProps, "secondary" | "logo">;
  className?: string;
};

export function StatBlock(props: TProps) {
  return (
    <div
      className={cn(
        "bg-brand-bg md:h-stat px-4 py-2 flex gap-x-3 rounded-xl",
        props.className && props.className,
      )}
    >
      {props.logo ?? null}
      <HeaderValue {...props} />
      {props.secondary?.title && (
        <HeaderValue {...props.secondary} className="ml-auto" />
      )}
    </div>
  );
}

function HeaderValue(props: TProps["secondary"]) {
  if (!props) return null;
  const { value, title, sign, variation, className } = props;

  return (
    <div className={cn("flex flex-col justify-between md:py-2", className ?? "")}>
      <span className="text-brand-secondary uppercase text-sm font-medium pb-1 md:pb-0">
        {title}
      </span>
      <div className="flex gap-x-2 align">
        <span className="truncate font-bold px-2">
          {sign === "$" ? sign + " " : null}
          {Intl.NumberFormat("en-us", {}).format(value)}
          {sign && sign !== "$" ? " " + sign : null}
        </span>
        {variation && (
          <span
            className={
              (cn("font-normal"),
              variation > 0 ? "text-success" : "text-danger")
            }
          >
            ({variation}%)
          </span>
        )}
      </div>
    </div>
  );
}
