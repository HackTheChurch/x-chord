"use client";
import Footer from "@/components/footer";
import Header from "@/components/header";
import IconAuthor from "@/components/icons/author";
import IconInput from "@/components/icons/input";
import Main from "@/components/main";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    let parts = new Array();
    for (let i = 0; i < 6; i += 1) {
      const part = document.querySelector(`#part-${i}`);
      parts.push(part);
    }

    let position = 0;

    setInterval(() => {
      fetch("/api/controller")
        .then((response) => response.json())
        .then((data) => {
          // console.log("File content:", data.content);

          data.content.map((instruction) => {
            switch (instruction.action) {
              case "down":
                position += 1;
                position > 6 ? (position = 5) : null;
                break;

              case "up":
                position -= 1;
                position < 0 ? (position = 0) : null;
                break;
            }
          });

          parts[position].scrollIntoView({ behavior: "smooth" });
        })
        .catch((error) => {
          console.error("Error fetching file:", error);
        });
    }, 500);
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
