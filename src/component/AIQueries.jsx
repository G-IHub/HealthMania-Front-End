import { Query } from "@/data/AiQuery";
import { useState, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const AIQueries = () => {
  const inputRef = useRef(null);
  const [queryNo, setQueryNo] = useState(0);
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [hrs, setHours] = useState("");
  const [occupation, setOccupation] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [systolicBP, setSystolicBP] = useState("");
  const [diastolicBP, setDiastolicBP] = useState("");

  const addClick = () => {
    setQueryNo((prev) => prev + 1);
  };
  const subClick = () => {
    setQueryNo((prev) => prev - 1);
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    addClick();
    const value = e.target.value;
    setAge(value);
    console.log(value);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setAge(value);
    setHours(value);
    setOccupation(value);
    setWeight(value);
    setHeight(value);
    setSystolicBP(value);
    setDiastolicBP(value);
  };
  console.log(age);
  console.log("i am " + `${age}` + " years old");
  console.log(hrs);
  console.log(occupation);
  console.log(weight);
  console.log(height);
  console.log(systolicBP);
  console.log(diastolicBP);

  const handleLeftClick = () => {
    queryNo > 0 ? subClick() : null;
  };

  const handleSubmitClick = () => {
    inputRef.current.value = "";
    queryNo < Query.length - 1 ? addClick() : queryNo;
  };

  return (
    <div className="h-[100svh] pt-[2rem] flex flex-col  ">
      <div className="flex w-full items-center">
        <div className="bg-black w-[12%] h-[40px] rounded-lg flex justify-center items-center m-[.7rem] mx-[1rem] ">
          <FaArrowLeft
            onClick={() => handleLeftClick()}
            className="text-white text-[25px] "
          />
        </div>
        <p className="text-[1rem] w-[60%] text-center select-none">
          0{1 + queryNo} of {Query.length}
        </p>
        {/* {queryNo > 0 && (
          <div
            onClick={() => handleRightClick()}
            className="bg-black w-[12%] h-[40px] rounded-lg flex justify-center items-center m-[.7rem] mx-[1rem] "
          >
            <FaArrowRight className="text-white text-[25px] " />
          </div>
        )} */}
      </div>

      <div className="mt-[2rem] mx-[1rem] flex flex-col ">
        <div className="bg-slate-200 w-[100%] h-[9px] rounded-xl flex">
          {queryNo === 0 ? (
            <div className="w-[14.2%] h-[9px] bg-orange-500 rounded-xl"></div>
          ) : queryNo === 1 ? (
            <>
              <div className="w-[28.4%] h-[9px] bg-orange-500 rounded-xl"></div>
            </>
          ) : queryNo === 2 ? (
            <>
              <div className="w-[39.5%]  h-[9px] bg-orange-500 rounded-xl"></div>
            </>
          ) : queryNo === 3 ? (
            <>
              <div className="w-[50.6%] h-[9px] bg-orange-500 rounded-xl"></div>
            </>
          ) : queryNo === 4 ? (
            <>
              <div className="w-[62.7%] h-[9px] bg-orange-500 rounded-xl"></div>
            </>
          ) : queryNo === 5 ? (
            <>
              <div className="w-[68.8%] h-[9px] bg-orange-500 rounded-xl"></div>
            </>
          ) : queryNo === 6 ? (
            <>
              <div className="w-[80%] h-[9px] bg-orange-500 rounded-xl"></div>
            </>
          ) : queryNo === 7 ? (
            <>
              <div className="w-[100%] h-[9px] bg-orange-500 rounded-xl"></div>
            </>
          ) : null}
        </div>
        <div className="mt-[2rem] flex items-center  justify-between h-[70svh] flex-col">
          {Query[queryNo].type === "option" ? (
            <div className="px-[.3rem] pb-[.2rem] flex flex-col  w-[21rem]">
              <form>
                <p className="font-m800 text-[2.5rem] mt-[.5rem] ">
                  {Query[queryNo].question}
                </p>
                <div className="mt-[1rem] flex flex-col gap-[20px]">
                  <button
                    value={Query[queryNo].option[0]}
                    onClick={handleButtonClick}
                    className="text-black bg-slate-100 focus:border-[1px] py-[1rem] px-[2rem] rounded-2xl text-[1.5rem] shadow-md focus:shadow-none"
                  >
                    {Query[queryNo].option[0]}
                  </button>
                  <button
                    value={Query[queryNo].option[1]}
                    onClick={handleButtonClick}
                    className="placeholder:text-black bg-slate-100 focus:border-[1px] py-[1rem] px-[2rem] rounded-2xl text-[1.5rem] shadow-md focus:shadow-none"
                  >
                    {Query[queryNo].option[1]}
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="px-[.3rem] pb-[.2rem] flex flex-col  w-[21rem]">
              <form className="flex flex-col">
                <p className="font-m800 text-[2.0rem] mt-[.5rem] ">
                  {Query[queryNo].question}
                </p>
                <div className="mt-[1rem] flex flex-col gap-[20px] items-center justify-center">
                  <div className="flex relative">
                    <input
                      ref={inputRef}
                      onChange={handleInputChange}
                      type="text"
                      required
                      className="text-black border-[2px] border-slate-300 focus:border-[1px] focus:border-slate-5008 py-[1rem] px-[2rem] rounded-2xl text-[1.5rem] w-[100%] relative"
                      autoFocus
                    />
                    <div className="absolute right-[2rem] top-1/2 transform -translate-y-1/2 text-slate-500">
                      {Query[queryNo].unit}
                    </div>
                  </div>
                </div>
                <div
                  onClick={handleSubmitClick}
                  className="placeholder:text-black bg-slate-100 focus:border-[1px] py-[1rem] px-[2rem] rounded-2xl text-[1.5rem] shadow-md focus:shadow-none mt-[2rem] text-center"
                >
                  Next
                </div>
              </form>
            </div>
          )}

          <p className=" text-[.8rem] text-slate-500 ">Powered by Geno AI</p>
        </div>
      </div>
    </div>
  );
};
export default AIQueries;
