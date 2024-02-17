import Footer from "@/components/footer";
import Header from "@/components/header";
import Main from "@/components/main";
import { title } from "@/components/variables";

export default function Home() {
  return (
    <>
      <Header />
      <Main>
        <h1 className="text-xl font-bold uppercase">Projekce</h1>
        <p>Tato stránka Zobrazuje projekci písní.</p>
      </Main>
      <Footer />
    </>
  );
}
