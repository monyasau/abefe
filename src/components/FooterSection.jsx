{
  /* <h1 className="text-white text-3xl">Let’s work together.</h1> */
}
{
  /* <div className="py-32 text-center">© Olajide Sodiq 2023</div> */
}

// import vectorImage from "../assets/images/Vector.png";
import arrowIcon from "../assets/images/arrow.png";

export default function FooterSection() {
  return (
    <>
    <div className="bg-[#222222] ">
        <div className=" max-w-screen-xl mx-auto  grid grid-cols-2">
<div className="mx-auto py-12">
          <div className=" py-24">
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

        <div className="bg-white  ">dd
        <span className="text-white font-bold text-2xl ">cnncnc</span>
        </div>
        </div>
        </div>
    </>
  );
}
