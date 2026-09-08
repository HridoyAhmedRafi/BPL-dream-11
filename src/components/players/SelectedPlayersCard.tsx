import { FaTrash } from "react-icons/fa";
import type { playerType } from "../../types/PlayerType";
import type { Dispatch, SetStateAction } from "react";

interface SelectedPlayersCardProps {
  player: playerType;
  selectedPlayers: playerType[];
  setSelectedPlayers: Dispatch<SetStateAction<playerType[]>>;
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
}

const SelectedPlayersCard = ({
  player,
  selectedPlayers,
  setSelectedPlayers,
  coin,
  setCoin,
}: SelectedPlayersCardProps) => {
  const handleRemovePlayer = (player: playerType) => {
    const remainingPlayer = selectedPlayers.filter(
      (selectedPlayer) => selectedPlayer.playerName != player.playerName,
    );
    setSelectedPlayers(remainingPlayer);
    const newUpdatedCoin = coin + player.price;
    setCoin(newUpdatedCoin);
  };

  return (
    <div className="flex items-center justify-between  border rounded-2xl border-[#e8e8e8] px-4 py-4 my-2 ">
      <div className="flex items-center gap-5 rounded  ">
        <div className="h-20 w-20">
          <img
            src={player.playerImage}
            alt={player.playerName}
            className="rounded bg-cover object-cover h-20 w-20"
          />
        </div>

        <div>
          <h1 className="text-[24px] font-semibold">{player.playerName}</h1>
          <p className="text-[16px] font-semibold text-[#686666]">
            {player.style}
          </p>
        </div>
      </div>

      <span
        onClick={() => handleRemovePlayer(player)}
        className="cursor-pointer"
      >
        <FaTrash />
      </span>
    </div>
  );
};

export default SelectedPlayersCard;
