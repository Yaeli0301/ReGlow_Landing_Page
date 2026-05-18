import Link from "next/link";

type ButtonProps = {
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  children: React.ReactNode;
  className?: string;
  external?: boolean;
};

const variants = {
  primary:
    "bg-gradient-to-l from-brand-500 to-purple-500 text-white shadow-lg shadow-brand-500/25 hover:shadow-xl hover:shadow-brand-500/35 active:scale-[0.98]",
  secondary:
    "bg-white text-brand-600 border-2 border-brand-200 hover:border-brand-400 hover:bg-brand-50 shadow-md",
  ghost: "text-brand-600 hover:text-brand-700 underline-offset-4 hover:underline",
};

const sizes = {
  md: "px-6 py-3 text-base rounded-xl font-bold",
  lg: "px-8 py-4 text-lg rounded-2xl font-bold",
};

export function Button({
  href = "#pricing",
  variant = "primary",
  size = "lg",
  children,
  className = "",
  external = false,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 transition-all duration-200 ${variants[variant]} ${variant !== "ghost" ? sizes[size] : "text-base font-semibold"} ${className}`;

  if (external || href.startsWith("http") || href.includes("/demo/start")) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
