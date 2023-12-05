import Image from "next/image";

import image from "../../public/images/slack-square.png";

g
const Box = ({children}) => {
  return (
    <div className="box">
      <div className="flex items-center w-60 shadow-md px-4 py-2 bg-white h-10 gap-2">
        <Image src={image} alt=""  />
        <h3 className="text-black font-roboto text-base font-medium leading-6">Procurement</h3>
      </div>
      <div className="shadow-md w-60 h-28 bg-white py-6 flex flex-col items-start justify-center gap-2 pl-5">
        <div className="flex justify-evenly gap-20 ">
        <p className=" text-base font-normal">Total Usecases</p><div className="no">20</div>
        </div>
        <div className="flex justify-around gap-20">
        <p className=" text-sm font-">Total Resources</p><div className="no2 text-sm">20</div>

        </div>
        <div className="btn">
            <button><a href="#">Completed</a></button>
        </div>
      </div>
    </div>
  );
};

export default Box;