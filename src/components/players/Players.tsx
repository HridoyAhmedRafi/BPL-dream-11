// player 
import { use, useState, type Dispatch, type SetStateAction } from "react";
import type { playerType } from "../../types/PlayerType";
import AvailablePlayers from "./AvailablePlayers";
import SelectedPlayers from "./SelectedPlayers";

interface playerTypeProps {
  PlayersPromise: Promise<playerType[]>;
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
}

const Players = ({ PlayersPromise, coin, setCoin }: playerTypeProps) => {
  const Players = use(PlayersPromise);

  const [buttonAction, setButtonAction] = useState("Available");
  const [selectedPlayers, setSelectedPlayers] = useState<playerType[]>([]);

  const handleButtonAction = (action: "Available" | "Selected") => {
    setButtonAction(action);
  };

  return (
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-between mb-2">
        <h1 className="font-bold text-[28px]">
          {buttonAction === "Available"
            ? "Available Players"
            : " Selected Players"}
        </h1>
        <div>
          <button
            onClick={() => handleButtonAction("Available")}
            className={`btn ${buttonAction === "Available" ? "btn-success" : ""} text-[16px] rounded-r-none`}
          >
            Available
          </button>
          <button
            onClick={() => handleButtonAction("Selected")}
            className={`btn ${buttonAction === "Selected" ? "btn-success" : ""} text-[16px] rounded-l-none`}
          >
            Selected
          </button>
        </div>
      </div>

      {buttonAction === "Available" ? (
        <AvailablePlayers
          Players={Players}
          coin={coin}
          setCoin={setCoin}
          selectedPlayers={selectedPlayers}
          setSelectedPlayers={setSelectedPlayers}
        ></AvailablePlayers>
      ) : (
        <SelectedPlayers
          selectedPlayers={selectedPlayers}
          setSelectedPlayers={setSelectedPlayers}
          coin={coin}
          setCoin={setCoin}
        ></SelectedPlayers>
      )}
    </div>
  );
};

export default Players;
