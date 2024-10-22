import calendar from "../assets/img/calendar.png";
import runningGuy from "../assets/img/runningGuy.png"

const Plan = () => {
  return (
    <div className="bg-white box-shadow rounded-[6px] py-2 px-6 flex items-center justify-between ">
      <div>
        <h3 className="text-[18px]">Build your plan.</h3>
        <p className="text-orange-500 mt-[10px] text-[15px]">Build</p>
      </div> 
      <div className="relative">
        <img src={calendar} className="w-[80px] h-auto" />
        <img src={runningGuy} className="w-[60px] h-auto absolute top-[20px] right-[-10px]" />
      </div>
    </div>
  );
};

export default Plan;
