// hero section

import HeroBg from "../assets/bg-shadow.png";
import HeroLogo from "../assets/banner-main.png";

const Hero = () => {
  return (
    <div className="container mx-auto px-4 ">
      <div
        className="h-125 bg-cover bg-center  rounded-3xl bg-[#131313] my-10  flex items-center justify-center text-center"
        style={{ backgroundImage: `url(${HeroBg})` }}
      >
        <div className="space-y-3">
          <img src={HeroLogo} alt="" className=" mx-auto " />
          <h1 className="text-[40px] text-white font-bold">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h1>
          <p className="text-[24px] text-[#6b6b6b]">
            Beyond Boundaries Beyond Limits
          </p>
          <button className="relative rounded-2xl border border-[#e2f929] p-1 font-sans transition-transform active:scale-95">
            <span className="block rounded-xl bg-[#e2f929] px-8 py-3 text-base font-bold text-black shadow-inner">
              <a href="">Claim Free Credit</a>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
