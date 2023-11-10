{
  /* <h1 className="text-white text-3xl">Let’s work together.</h1> */
}
{
  /* <div className="py-32 text-center">© Olajide Sodiq 2023</div> */
}

import vectorImage from "../assets/images/Vector.png";
import arrowIcon from "../assets/images/arrow.png";

export default function FooterSection() {
  return (
    <>
      <div className="bg-[#222222] py-32 relative grid grid-cols-2 ">
        <div
          className="h-80 w-[100%] ml-[10%] px-[15%] mr-auto bg-no-repeat"
          style={{ backgroundImage: `url(${vectorImage})` }}
        >
          <div className="max-w-screen-xl mx-auto py-24">
            <h1 className=" text-white font-semibold text-3xl">
              Let’s work together.
            </h1>
            <p className="text-[#D9d9d9] my-6 text-xl">
              Let’s work together to build something great.
            </p>
          </div>
          <div className="my-12 ">
            <a href="#" className="flex gap-20 text-white font-medium hover:underline text-lg">
              SEE MY WORKS <img src={arrowIcon} alt="" />
            </a>
            
          </div>
        </div>

        <div className="bg-white">dd</div>
      </div>
    </>
  );
}
