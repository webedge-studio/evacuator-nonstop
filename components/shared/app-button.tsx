import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  icon?: ReactNode;
  className?: string;
  iconPosition?: "left" | "right";
  iconClassName?: string;
  linkRef?: string;
  target?: "_blank" | "_self";
}

export function AppButton({
  label,
  icon,
  iconPosition = "left",
  className,
  iconClassName,
  linkRef,
  target,
  ...props
}: AppButtonProps) {
  const renderButton = () => (
    <Button
      className={cn(
        "default-transition hover:bg-yellow-card gap-2.5 bg-black/75 text-xs font-semibold hover:-translate-y-[1px] hover:cursor-pointer md:text-sm",
        className,
      )}
      {...props}
    >
      {/* Icon pe stânga */}
      {icon && iconPosition === "left" && (
        <span className={cn("icon", iconClassName)}>{icon}</span>
      )}

      <span>{label}</span>

      {/* Icon pe dreapta */}
      {icon && iconPosition === "right" && (
        <span className={cn("icon", iconClassName)}>{icon}</span>
      )}
    </Button>
  );

  return linkRef ? (
    <Link
      href={linkRef}
      {...(target ? { target, rel: "noopener noreferrer" } : {})}
    >
      {renderButton()}
    </Link>
  ) : (
    renderButton()
  );
}
