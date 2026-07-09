export function AnimatedBlobs() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute top-[-10%] left-[-5%] w-[420px] h-[420px] bg-primary/25 rounded-full blur-[110px] animate-blob" />
      <div className="absolute top-[20%] right-[-10%] w-[380px] h-[380px] bg-primary-teal/20 rounded-full blur-[110px] animate-blob [animation-delay:2s]" />
      <div className="absolute bottom-[-10%] left-[30%] w-[350px] h-[350px] bg-primary-cyan/20 rounded-full blur-[110px] animate-blob [animation-delay:4s]" />
    </div>
  );
}
