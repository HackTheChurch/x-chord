import Footer from "@/components/footer";
import Header from "@/components/header";
import Main from "@/components/main";
import { title } from "@/components/variables";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <Main>
        <h1 className="text-xl font-bold uppercase">O projektu</h1>
        <p>
          Tato webová stránka slouží jako hlavní kontroler pro ovládání projektu{" "}
          <strong>{title}</strong>.
        </p>
        <div className="w-full flex flex-row items-center justify-between my-4 flex-wrap">
          <Link
            href="/numbers"
            className="p-2 border-white border cursor-pointer rounded hover:scale-105 transition-all"
          >
            Číselník
          </Link>
          <Link
            href="/playlist"
            className="p-2 border-white border cursor-pointer rounded hover:scale-105 transition-all"
          >
            Playlist
          </Link>
          <Link
            href="/songs"
            className="p-2 border-white border cursor-pointer rounded hover:scale-105 transition-all"
          >
            Seznam&nbsp;písní
          </Link>
        </div>
      </Main>
      <Footer />
    </>
  );
}
