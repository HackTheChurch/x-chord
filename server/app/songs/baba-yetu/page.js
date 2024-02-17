"use client";
import Footer from "@/components/footer";
import Header from "@/components/header";
import IconAuthor from "@/components/icons/author";
import IconInput from "@/components/icons/input";
import Main from "@/components/main";
import { title } from "@/components/variables";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    let parts = new Array();
    for (let i = 0; i < 6; i += 1) {
      const part = document.querySelector(`#part-${i}`);
      parts.push(part);
    }
    parts[1].scrollIntoView({ behavior: "smooth" });
  });
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
          <p className="py-4" id="part-0">
            R: Baba yetu, yetu uliye
            <br />
            Mbinguni yetu, yetu, amina!
            <br />
            Baba yetu, yetu, uliye
            <br />
            Jina lako litukuzwe
          </p>
          <p className="py-4">
            Baba yetu, yetu uliye
            <br />
            Mbinguni yetu, yetu, amina!
            <br />
            Baba yetu, yetu, uliye
            <br />
            Jina lako litukuzwe
          </p>
          <p className="mb-2 pt-12" id="part-1">
            1. Utupe leo chakula chetu
            <br />
            Tunachohitaji utusamehe
            <br />
            Makosa yetu, hey!
            <br />
            Kama nasi tunavyowasamehe
          </p>
          <p className="py-4">
            Waliotukosea usitutie
            <br />
            Katika majaribu, lakini
            <br />
            Utuokoe, na yule
            <br />
            Mwovu, milele!
          </p>
          <p className="mb-2 pt-12" id="part-2">
            R: Baba yetu, yetu uliye
            <br />
            Mbinguni yetu, yetu, amina!
            <br />
            Baba yetu, yetu, uliye
            <br />
            Jina lako litukuzwe
          </p>
          <p className="py-4">
            Baba yetu, yetu uliye
            <br />
            Mbinguni yetu, yetu, amina!
            <br />
            Baba yetu, yetu, uliye
            <br />
            Jina lako litukuzwe
          </p>
          <p className="mb-2 pt-12" id="part-3">
            B: Ufalme wako ufike utakalo
            <br />
            Lifanyike duniani kama mbinguni. (Amina)
          </p>
          <p className="mb-2 pt-12" id="part-4">
            R: Baba yetu, yetu uliye
            <br />
            Mbinguni yetu, yetu, amina!
            <br />
            Baba yetu, yetu, uliye
            <br />
            Jina lako litukuzwe
          </p>
          <p className="py-4">
            Baba yetu, yetu uliye
            <br />
            Mbinguni yetu, yetu, amina!
            <br />
            Baba yetu, yetu, uliye
            <br />
            Jina lako litukuzwe
          </p>
          <p className="mb-2 pt-12" id="part-5">
            1. Utupe leo chakula chetu
            <br />
            Tunachohitaji utusamehe
            <br />
            Makosa yetu, hey!
            <br />
            Kama nasi tunavyowasamehe
          </p>
          <p className="py-4">
            Waliotukosea usitutie
            <br />
            Katika majaribu, lakini
            <br />
            Utuokoe, na yule
            <br />
            Mwovu, milele!
          </p>
          <p className="py-4">
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
