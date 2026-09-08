// selected players
import type { Dispatch, SetStateAction } from "react";
import type { playerType } from "../../types/PlayerType";
import SelectedPlayersCard from "./SelectedPlayersCard";

interface SelectedPlayersProps {
  selectedPlayers: playerType[];
  setSelectedPlayers: Dispatch<SetStateAction<playerType[]>>;
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
}

const SelectedPlayers = ({
  selectedPlayers,
  setSelectedPlayers,
  coin,
  setCoin,
}: SelectedPlayersProps) => {
  if (selectedPlayers.length === 0) {
    return (
      <div className=" space-y-2 my-20">
        <h2 className="text-center text-[#828080] text-4xl">
          No playes selected yet
        </h2>
        <p className="text-center text-[#a2a1a1]">
          Go to Available tab to select players
        </p>
      </div>
    );
  }

  return (
    <div>
      {selectedPlayers.map((player: playerType, index: number) => {
        return (
          <SelectedPlayersCard
            key={index}
            coin={coin}
            setCoin={setCoin}
            player={player}
            selectedPlayers={selectedPlayers}
            setSelectedPlayers={setSelectedPlayers}
          ></SelectedPlayersCard>
        );
      })}
    </div>
  );
};

export default SelectedPlayers;
