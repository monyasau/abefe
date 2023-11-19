// import vectorImage from "../assets/images/Vector.png";
import arrowIcon from "../assets/images/arrow.png";
import behanceIcon from "../assets/images/behance.png"
import linkedinIcon from "../assets/images/linkedin.png"
import iGIcon from "../assets/images/instagram.png"
import xIcon from "../assets/images/x.png"


export default function FooterSection() {
  return (
    <>
      <div className="bg-[#222222] py-24">
        <div className=" max-w-screen-xl mx-auto  grid grid-cols-2">
          <div>
            <div className="pb-24">
              <h1 className=" text-white font-semibold text-3xl">
                Let’s work together.
              </h1>
              <p className="text-[#D9d9d9] my-6 text-xl">
                Let’s work together to build something great.
              </p>
            </div>
            <div className="my-12 ">
              <a
                href="#"
                className="flex gap-20 text-white font-medium hover:underline text-lg"
              >
                SEE MY WORKS <img src={arrowIcon} alt="" />
              </a>
            </div>
          </div>

          <div className=" my-24">
            <div className="grid  grid-cols-4 mx-ato">
              <a href="#" className=" text-xl mx-auto text-white hover:underline">Behance</a>
              <a href="#" className=" text-xl mx-auto text-white hover:underline">Linkedin</a>
              <a href="#" className=" text-xl mx-auto text-white hover:underline">Instagram</a>
              <a href="#" className=" text-2xl  mx-auto text-white hover:underline">X</a>
              {/* <br /> */}
            </div>
            <a href="#" className=" text-2xl px-10 my-44  mx-auto text-white hover:underline">Olajide3212@gmail.com</a>
          </div>
        </div>
        <div className="mx-auto py-32 text-white font-inter text-xl text-center flex items-center ">
          <div className="flex mx-auto">
          <span className="mx-4"> © Olajide Sodiq 2023 | </span><div className="flex gap-14">
          <a href="#" className=""><img src={behanceIcon} alt="" /></a>
          <a href="#" className=""><img src={linkedinIcon} alt="" /></a>
          <a href="#" className=""><img src={iGIcon} alt="" /></a>
          <a href="#" className=""><img src={xIcon} alt="" /></a>
        </div>
        </div>
        </div>
      </div>
    </>
  );
}
