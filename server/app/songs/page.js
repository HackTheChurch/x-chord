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
        <h1 className="text-xl font-bold uppercase">Seznam písní</h1>
        <p>Nastavení zdrojů imporotování písní nadete v nastavení.</p>
        <p>Vyber píseň, kterou chceš přehrávat.</p>
        <h2 className="font-semibold uppercase mt-4">Seznam písní</h2>
        <ul className="">
          <Link href="/songs/">
            <li className="cursor-pointer my-2">Ať srdce mé Tebe vídá</li>
          </Link>
          <Link href="/songs/baba-yetu">
            <li className="cursor-pointer my-2">Baba yetu</li>
          </Link>
          <Link href="/songs/">
            <li className="cursor-pointer my-2">Hledám Tvoji tvár</li>
          </Link>
          <Link href="/songs/">
            <li className="cursor-pointer my-2">Cesta života</li>
          </Link>
          <Link href="/songs/">
            <li className="cursor-pointer my-2">Chvalte služebníci</li>
          </Link>
          <Link href="/songs/">
            <li className="cursor-pointer my-2">Toužím po Tobě toužím</li>
          </Link>
          <Link href="/songs/">
            <li className="cursor-pointer my-2">Emanuel</li>
          </Link>
          <Link href="/songs/">
            <li className="cursor-pointer my-2">Chci Tebe chválit</li>
          </Link>
          <Link href="/songs/">
            <li className="cursor-pointer my-2">Proč jen mlčíš, Pane</li>
          </Link>
          <Link href="/songs/">
            <li className="cursor-pointer my-2">Narodil se Kristus Pán</li>
          </Link>
        </ul>
      </Main>
      <Footer />
    </>
  );
}
