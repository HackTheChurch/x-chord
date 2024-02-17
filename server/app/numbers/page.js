import Footer from "@/components/footer";
import Header from "@/components/header";
import Main from "@/components/main";
import { title } from "@/components/variables";

export default function Home() {
  return (
    <>
      <Header />
      <Main>
        <h1 className="text-xl font-bold uppercase">Číselník</h1>
        <p>Tato stránka umožňuje zobrazovat čísla písní.</p>
      </Main>
      <Footer />
    </>
  );
}
