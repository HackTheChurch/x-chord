import Footer from "@/components/footer";
import Header from "@/components/header";
import Main from "@/components/main";
import Switch from "@/components/switch";
import { title } from "@/components/variables";

export default function Home() {
  return (
    <>
      <Header />
      <Main>
        <h1 className="text-xl font-bold uppercase">Nastavení</h1>
        <p>Tato stránka umožňuje základní konfiguraci.</p>
        <div>
          <h2 className="text-lg font-bold mt-2">Spuštěné služby</h2>
          <ul>
            <li className="w-full flex justify-between my-2">
              <Switch
                isChacked={false}
                title={"Synchronizace zpěvníků"}
                description={
                  "Vytvoří webový server, který umožňuje synchornizovat písničky ve zpěvníku pro scholy všem zařízením, které jsou již připojeny."
                }
              />
            </li>
            <li className="w-full flex justify-between my-2">
              <Switch
                isChacked={false}
                title={"Projekce"}
                description={"Spuštění modulu webové projekce na textů."}
              />
            </li>
            <li className="w-full flex justify-between my-2">
              <Switch
                isChacked={true}
                title={"Číselník"}
                description={
                  "Zobrazující číslo písně v papírovém zpěvníku v kostele."
                }
              />
            </li>
            <li className="w-full flex justify-between my-2">
              <Switch
                isChacked={false}
                title={"Speech to text"}
                description={
                  "Možnost synrchonizace textu pomocí poslouchání textu."
                }
              />
            </li>
          </ul>
        </div>
      </Main>
      <Footer />
    </>
  );
}
