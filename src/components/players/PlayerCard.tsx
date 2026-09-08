// player card
import { FaFlag, FaUser } from "react-icons/fa";

import type { playerType } from "../../types/PlayerType";
import { useState, type Dispatch, type SetStateAction } from "react";
import { toast } from "react-toastify";

interface PlayerProps {
  player: playerType;
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
  selectedPlayers: playerType[];
  setSelectedPlayers: Dispatch<SetStateAction<playerType[]>>;
}

const PlayerCard = ({
  player,
  coin,
  setCoin,
  selectedPlayers,
  setSelectedPlayers,
}: PlayerProps) => {
  const [selected, setSelected] = useState(false);
  const handleSelectedPlayer = () => {
    setSelected(true);
    const newUpdatedCoin = coin - player.price;
    if (newUpdatedCoin < 0) {
      toast.info(`You have no enough coin`);
    } else {
      toast.success(`${player.playerName} is purchased successfuly`);
      setCoin(newUpdatedCoin);
    }

    // selected players
    setSelectedPlayers([...selectedPlayers, player]);
  };

  return (
    <div className="group overflow-hidden rounded-2xl bg-white shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(0,0,0,0.14)]">
      {/* Player Image */}
      <div className="relative h-72 overflow-hidden bg-gray-100">
        <img
          src={player.playerImage}
          alt={player.playerName}
          className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />

        {/* Image Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />

        {/* Player Type */}
        <span className="absolute right-4 top-4 rounded-full bg-white/90 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-gray-800 backdrop-blur">
          {player.playerType}
        </span>

        {/* Player Name */}
        <div className="absolute bottom-5 left-5">
          <p className="mb-1 text-xs font-medium uppercase tracking-widest text-white/70">
            Player
          </p>

          <h2 className="text-2xl font-extrabold tracking-tight text-white">
            {player.playerName}
          </h2>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5">
        {/* Origin */}
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <FaFlag className="text-gray-400" />
          <span>{player.origin}</span>
        </div>

        {/* Divider */}
        <div className="my-5 h-px bg-gray-100" />

        {/* Player Information */}
        <div className="grid grid-cols-2 gap-3">
          {/* Player Type */}
          <div className="rounded-xl bg-gray-50 p-3">
            <div className="mb-2 flex items-center gap-2">
              <FaUser className="text-xs text-gray-400" />

              <p className="text-xs font-medium text-gray-400">Type</p>
            </div>

            <p className="text-sm font-bold text-gray-800">
              {player.playerType}
            </p>
          </div>

          {/* Style */}
          <div className="rounded-xl bg-gray-50 p-3">
            <p className="mb-2 text-xs font-medium text-gray-400">Style</p>

            <p className="text-sm font-bold text-gray-800">{player.style}</p>
          </div>
        </div>

        {/* Price & Button */}
        <div className="mt-5 flex items-center justify-between">
          {/* Price */}
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
              Price
            </p>

            <p className="text-2xl font-extrabold text-gray-900">
              ${player.price}
            </p>
          </div>

          {/* Choose Button */}
          <button
            onClick={() => handleSelectedPlayer()}
            type="button"
            className="rounded-xl bg-gray-900 px-5 py-3 text-sm font-bold text-white disabled:bg-gray-300 disabled:text-gray-500  disabled:cursor-not-allowed cursor-pointer"
            disabled={selected}
          >
            {selected === false ? "Choose Player" : "Selected"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
