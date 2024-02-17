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
        <h1 className="text-xl font-bold uppercase mt-12">Baba yetu</h1>
        <div className="mt-2">
          <span className="flex items-center">
            <IconAuthor className={"mr-2"} /> Christopher Tin
          </span>
          <span className="flex items-center">
            <IconInput className={"mr-2"} /> Zpěvník pro Scholy
          </span>
        </div>
        <div className="mt-4 mb-8 text-xl leading-8">
          <p className="my-4">
            R: Baba yetu, yetu uliye
            <br />
            Mbinguni yetu, yetu, amina!
            <br />
            Baba yetu, yetu, uliye
            <br />
            Jina lako litukuzwe
          </p>
          <p className="my-4">
            Baba yetu, yetu uliye
            <br />
            Mbinguni yetu, yetu, amina!
            <br />
            Baba yetu, yetu, uliye
            <br />
            Jina lako litukuzwe
          </p>
          <p className="mb-2 mt-12">
            1. Utupe leo chakula chetu
            <br />
            Tunachohitaji utusamehe
            <br />
            Makosa yetu, hey!
            <br />
            Kama nasi tunavyowasamehe
          </p>
          <p classname="my-4">
            Waliotukosea usitutie
            <br />
            Katika majaribu, lakini
            <br />
            Utuokoe, na yule
            <br />
            Mwovu, milele!
          </p>
          <p className="mb-2 mt-12">
            R: Baba yetu, yetu uliye
            <br />
            Mbinguni yetu, yetu, amina!
            <br />
            Baba yetu, yetu, uliye
            <br />
            Jina lako litukuzwe
          </p>
          <p className="my-4">
            Baba yetu, yetu uliye
            <br />
            Mbinguni yetu, yetu, amina!
            <br />
            Baba yetu, yetu, uliye
            <br />
            Jina lako litukuzwe
          </p>
          <p className="mb-2 mt-12">
            B: Ufalme wako ufike utakalo
            <br />
            Lifanyike duniani kama mbinguni. (Amina)
          </p>
          <p className="mb-2 mt-12">
            R: Baba yetu, yetu uliye
            <br />
            Mbinguni yetu, yetu, amina!
            <br />
            Baba yetu, yetu, uliye
            <br />
            Jina lako litukuzwe
          </p>
          <p className="my-4">
            Baba yetu, yetu uliye
            <br />
            Mbinguni yetu, yetu, amina!
            <br />
            Baba yetu, yetu, uliye
            <br />
            Jina lako litukuzwe
          </p>
          <p className="mb-2 mt-12">
            1. Utupe leo chakula chetu
            <br />
            Tunachohitaji utusamehe
            <br />
            Makosa yetu, hey!
            <br />
            Kama nasi tunavyowasamehe
          </p>
          <p className="my-4">
            Waliotukosea usitutie
            <br />
            Katika majaribu, lakini
            <br />
            Utuokoe, na yule
            <br />
            Mwovu, milele!
          </p>
          <p className="my-4">
            Baba yetu, yetu, uliye
            <br />
            Jina lako litukuzwe
          </p>
        </div>
      </Main>
      <Footer />
    </>
  );
}
