export function WelcomeBar({ text }) {
  return (
    <div className="w-full bg-slate-700 text-slate-100 p-4 text-center rounded-md">
      <h1 className="text-xl">{text}</h1>
    </div>
  );
}
