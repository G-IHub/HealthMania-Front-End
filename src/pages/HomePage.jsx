import running from "../assets/img/running.png";
import Plan from "../component/Plan";
import HealthFeatures from "../component/HealthFeatures";
import runchase from "../assets/img/run-chase.gif";
import moon from "../assets/img/moon.png"
import stress from "../assets/img/stress.png"
import bmi from "../assets/img/bmi.png"
const homePage = () => {
  return (
    <div className="bg-[#FBFBFB] [--primaryBody-color] min-[100svh] text-[--text-color]">
      <div className="h-[300px] w-[100%] pt-5">
        <p className="text-center flex justify-center gap-2 items-center mb-[25px]">
          <span className="font-medium text-[20px]">Health</span>
          <img src={running} width={20} height="auto" />
          <span className="text-[20px] font-medium">Mania</span>
        </p>
      </div>
      <div className="px-3 flex flex-col gap-8 min-h-[100vh]">
    <Plan />
        <div className="flex flex-wrap w-[100%] gap-x-4 gap-y-8 justify-between">
          <HealthFeatures title={"Workout"} p1={"No records"} p2={"Get Started"} img={runchase} width={150} right={"-20px"} bottom={"-4px"}/>
          <HealthFeatures title={"Sleep"} p1={"No records"} p2={"Get Started"} img={moon} width={60} right={"20px"} bottom={"12px"}/>
          <HealthFeatures title={"Weight"} p1={"No records"} p2={"Get Started"} img={bmi} width={100} right={"0px"} bottom={"0px"}/>
          <HealthFeatures title={"Stress"} p1={"No records"} p2={"Get Started"} img={stress} width={60} right={"20px"} bottom={"12px"} />
        </div> 
      </div>

      {/* <HealthRing/> */}
      {/* <div className="mb-[25px]">
        <p className="flex gap-2  items-center">
          <span className="text-[1.8rem] text-[--primaryText-color]">
            Good Morning,
          </span>
          <span className="font-bold text-[1.8rem]  text-[--tertiaryText-color]">
            SKAI
          </span>
        </p>
        <p className="text-[20px] opacity-70">We wish you a good day.</p>
      </div> */}
    </div>
  );
};

export default homePage;
