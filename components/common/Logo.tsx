import { cn } from "@/lib/utils";
import Link from "next/link";

interface Props {
  className?: string;
  variant?: "default" | "sm";
}

const Logo = ({ className, variant = "default" }: Props) => {
  const isSmall = variant === "sm";

  return (
    <Link href="/">
      <div
        className={cn(
          "flex items-center group hoverEffect select-none",
          isSmall ? "gap-1.5" : "gap-2",
          className
        )}
      >
        {/* Decorative Dot */}
        <div className="relative">
          <div
            className={cn(
              "absolute bg-shop_orange rounded-full animate-pulse group-hover:bg-shop_light_green hoverEffect",
              isSmall ? "-top-0.5 -right-0.5 w-2 h-2" : "-top-1 -right-1 w-3 h-3"
            )}
          />
        </div>

        {/* AD7STORE Text Logo */}
        <h1
          className={cn(
            "font-black tracking-widest uppercase font-sans flex items-center",
            isSmall ? "text-sm" : "text-2xl"
          )}
        >
          <span className="text-shop_dark_green group-hover:text-shop_light_green hoverEffect">
            I 
          </span>
          <span className="bg-gradient-to-r from-shop_light_green to-shop_orange bg-clip-text text-transparent group-hover:from-shop_dark_green group-hover:to-shop_light_green hoverEffect">
            A
          </span>
        </h1>

        {/* Decorative Dots */}
        <div className={cn("flex flex-col gap-0.5", isSmall ? "ml-0.5" : "ml-1")}>
          <div
            className={cn(
              "bg-shop_orange rounded-full group-hover:bg-shop_light_green hoverEffect",
              isSmall ? "w-0.5 h-0.5" : "w-1 h-1"
            )}
          />
          <div
            className={cn(
              "bg-shop_light_green rounded-full group-hover:bg-shop_orange hoverEffect",
              isSmall ? "w-0.5 h-0.5" : "w-1 h-1"
            )}
          />
        </div>
      </div>
    </Link>
  );
};

export default Logo;
