import type { ComponentProps } from "react";

const variants = {
  primary: "bg-brand text-brand-foreground hover:bg-brand-hover",
  secondary:
    "border border-rule bg-surface text-obsidian hover:border-obsidian/30",
} as const;

const sizes = {
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-5 text-[15px]",
} as const;

type ButtonLinkProps = ComponentProps<"a"> & {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
};

export function ButtonLink({
  variant = "primary",
  size = "lg",
  className = "",
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={`group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-sans font-semibold transition-colors duration-200 ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
      <span
        aria-hidden="true"
        className="transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none"
      >
        →
      </span>
    </a>
  );
}
