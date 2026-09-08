import { Suspense, useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Navber from "./components/Navber";
import Players from "./components/players/Players";
import type { playerType } from "./types/PlayerType";


const PlayersPromiseFetch = async (): Promise<playerType[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};
const PlayersPromise = PlayersPromiseFetch();



function App() {
  const [coin, setCoin] = useState(1000);
  return (
    <>
    
      <Navber coin={coin}></Navber>
      <Hero></Hero>
      <Suspense
        fallback={
          <h1 className="text-2xl container mx-auto px-4">Loading...</h1>
        }
      >
        <Players
          PlayersPromise={PlayersPromise}
          coin={coin}
          setCoin={setCoin}
        />
      </Suspense>
    </>
  );
}

export default App;
