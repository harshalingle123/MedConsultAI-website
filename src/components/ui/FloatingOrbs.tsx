export function FloatingOrbs({ variant = "default" }: { variant?: "default" | "subtle" }) {
  const opacity = variant === "subtle" ? "opacity-40" : "opacity-70";
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${opacity}`}>
      <div className="absolute -left-32 top-10 h-80 w-80 animate-float-slow rounded-full bg-primary-400/20 blur-3xl" />
      <div
        className="absolute -right-24 top-1/3 h-96 w-96 animate-float-slow rounded-full bg-accent-400/15 blur-3xl"
        style={{ animationDelay: "-4s" }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-72 w-72 animate-float-slow rounded-full bg-primary-300/15 blur-3xl"
        style={{ animationDelay: "-8s" }}
      />
    </div>
  );
}
