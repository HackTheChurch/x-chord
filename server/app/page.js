import Footer from "@/components/footer";
import Header from "@/components/header";
import Main from "@/components/main";
import { title } from "@/components/variables";
import Image from "next/image";

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
      </Main>
      <Footer />
    </>
  );
}
