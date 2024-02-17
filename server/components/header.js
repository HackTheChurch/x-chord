import IconHome from "./icons/home";
import IconSetting from "./icons/settings";
import { title } from "./variables";

export default function Header() {
  return (
    <header className="w-full py-2 bg-black flex flex-row items-center justify-center">
      <div className="flex flex-row items-center justify-between max-w-[1000px] w-[90vw]">
        <IconHome className={"cursor-pointer"} />
        <p className="text-2xl m-2 font-bold uppercase tracking-widest">
          {title}
        </p>
        <IconSetting className={"cursor-pointer"} />
      </div>
    </header>
  );
}
