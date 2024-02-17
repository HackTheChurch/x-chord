import Link from "next/link";
import IconHome from "./icons/home";
import IconSetting from "./icons/settings";
import { title } from "./variables";

export default function Header({ id }) {
  return (
    <header
      id={id}
      className="w-full py-2 bg-black flex flex-row items-center justify-center"
    >
      <div className="flex flex-row items-center justify-between max-w-[1000px] w-[90vw]">
        <Link href="/">
          <IconHome className={"cursor-pointer"} />
        </Link>
        <p className="text-2xl m-2 font-bold uppercase tracking-widest">
          {title}
        </p>
        <Link href="/settings">
          <IconSetting className={"cursor-pointer"} />
        </Link>
      </div>
    </header>
  );
}
