import { title } from "./variables";

export default function Header() {
  return (
    <header className="w-full py-2 bg-black flex flex-col items-center justify-center">
      <p className="text-2xl m-2 font-bold uppercase tracking-widest">
        {title}
      </p>
    </header>
  );
}
