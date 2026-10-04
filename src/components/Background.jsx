export default function Background() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <div className="drift-a absolute -left-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-violet-600/25 blur-[120px]" />
      <div className="drift-b absolute -right-40 top-1/4 h-[30rem] w-[30rem] rounded-full bg-cyan-500/20 blur-[120px]" />
      <div className="drift-c absolute -bottom-40 left-1/3 h-[32rem] w-[32rem] rounded-full bg-fuchsia-600/20 blur-[120px]" />
      <div className="grid-fade absolute inset-0" />
      <div className="noise absolute inset-0" />
    </div>
  );
}