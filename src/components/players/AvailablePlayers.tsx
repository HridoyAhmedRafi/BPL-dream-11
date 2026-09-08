import type { Dispatch, SetStateAction } from "react";
import type { playerType } from "../../types/PlayerType";
import PlayerCard from "./PlayerCard";

interface PlayersProps {
  Players: playerType[];
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
  selectedPlayers: playerType[];
  setSelectedPlayers: Dispatch<SetStateAction<playerType[]>>;
}

const AvailablePlayers = ({
  Players,
  coin,
  setCoin,
  selectedPlayers,
  setSelectedPlayers,
}: PlayersProps) => {
  return (
    <div className="grid grid-cols-3 gap-10">
      {Players.map((player: playerType, index: number) => {
        return (
          <PlayerCard
            key={index}
            player={player}
            coin={coin}
            setCoin={setCoin}
            selectedPlayers={selectedPlayers}
            setSelectedPlayers={setSelectedPlayers}
          ></PlayerCard>
        );
      })}
    </div>
  );
};

export default AvailablePlayers;
