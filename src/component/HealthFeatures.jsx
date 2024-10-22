
import arrow from "../assets/img/icons/arrow.png";
const HealthFeatures = ({title,p1,p2,img, width, right,bottom}) => {
  return (
    <div className="relative bg-white box-shadow rounded-2xl pt-[15px] pb-20 px-4 flex justify-between w-[170px] ">
      <div className="flex flex-col gap-2 justify-center  w-[100%]">
        <div className="flex justify-between items-center">
          <h3 className="text-[18px]">{title}</h3>
          <img src={arrow} className="w-[20px] h-auto" />
        </div>
        <div>
          <p className="text-[12px] opacity-[50%]">{p1}</p>
          <p className="text-[12px] opacity-[50%]">{p2}</p>
        </div>

        <button className="bg-orange-500 w-[50%] rounded-2xl text-[--secondaryText-color]">
          Go
        </button>
      </div>
      <img
        src={img}
        width={width}
        style={{position: "absolute", right:`${right}`,bottom:`${bottom}`}}
        className=" h-[auto] absolute  "
      />
    </div>
  );
};

export default HealthFeatures;
