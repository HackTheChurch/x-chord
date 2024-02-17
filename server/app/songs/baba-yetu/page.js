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
        <h1 className="text-xl font-bold uppercase">Baba yetu</h1>
        <p>Nastavení zdrojů imporotování písní nadete v nastavení.</p>
        <h2 className="font-semibold uppercase mt-4">Seznam písní</h2>
        <ul>
          <Link href="/songs/baba-yetu">
            <li></li>
          </Link>
        </ul>
      </Main>
      <Footer />
    </>
  );
}
