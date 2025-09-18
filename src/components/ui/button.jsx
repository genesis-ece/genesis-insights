export function Button({ asChild, className = "", children, ...props }) {
  const Cmp = asChild ? "a" : "button";
  return (
    <Cmp
      className={
        "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium border border-transparent bg-black text-white hover:opacity-90 transition " +
        className
      }
      {...props}
    >
      {children}
    </Cmp>
  );
}
