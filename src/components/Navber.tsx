import { AiFillDollarCircle } from "react-icons/ai";
import Logo from "../assets/logo.png";


const Navber = ({coin}:{coin:number}) => {

  

  return (
    <>
      <nav className="flex items-center justify-between container mx-auto px-4">
        <img src={Logo} alt="" />

        <ul className="flex items-center justify-between gap-4">
          <li>Home</li>
          <li>Fixture</li>
          <li>Teams</li>
          <li>Schedules</li>
          <div className="flex items-center justify-between gap-2 border border-[#a39d9d] rounded-xl py-1 px-2">
            <span className="font-bold">{coin} Coin</span>{" "}
            <AiFillDollarCircle className="text-[23px] text-[#f5b03b]" />
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Navber;
