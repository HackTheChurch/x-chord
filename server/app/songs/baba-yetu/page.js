import Footer from "@/components/footer";
import Header from "@/components/header";
import IconAuthor from "@/components/icons/author";
import IconInput from "@/components/icons/input";
import Main from "@/components/main";
import { title } from "@/components/variables";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <Main>
        <h1 className="text-xl font-bold uppercase">Baba yetu</h1>
        <div className="mt-2">
          <span className="flex items-center">
            <IconAuthor className={"mr-2"} /> Christopher Tin
          </span>
          <span className="flex items-center">
            <IconInput className={"mr-2"} /> Zpěvník pro Scholy
          </span>
        </div>
      </Main>
      <Footer />
    </>
  );
}
