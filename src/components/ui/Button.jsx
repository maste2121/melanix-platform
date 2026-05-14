import "react";

export const Button = ({ children, variant = "primary", className = "" }) => {
  const base =
    "px-8 py-4 text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-500 border";
  const styles =
    variant === "primary"
      ? "bg-melanixBlack text-white border-melanixBlack hover:bg-melanixGold hover:border-melanixGold"
      : "bg-transparent text-melanixBlack border-melanixBlack hover:bg-melanixBlack hover:text-white";

  return (
    <button className={`${base} ${styles} ${className}`}>{children}</button>
  );
};
