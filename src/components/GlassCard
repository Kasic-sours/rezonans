import React from "react";

type Props = React.PropsWithChildren<{
  className?: string;
  strong?: boolean;
  soft?: boolean;
  as?: keyof React.JSX.IntrinsicElements;
}>;

export default function GlassCard({ children, className = "", strong = false, soft = false, as: Tag = "div" }: Props) {
  const base = soft ? "glass-soft" : strong ? "glass-strong" : "glass";
  return (
    <Tag className={`rounded-[24px] ${base} ${className}`}>
      {children}
    </Tag>
  );
}
