// import vectorImage from "../assets/images/Vector.png";
import arrowIcon from "../assets/images/arrow.png";
import behanceIcon from "../assets/images/behance.png"
import linkedinIcon from "../assets/images/linkedin.png"
import dribbleIcon from "../assets/images/linkedin.png"
import iGIcon from "../assets/images/instagram.png"
import xIcon from "../assets/images/x.png"


export default function FooterSection() {
  return (
    <>
      <div className="bg-[#222222] py-12">
        {/* <div className=" max-w-screen-xl mx-auto text-center md:text-start  md:grid grid-cols-2"> */}
          {/* <div>
            <div className="md:pb-24 pb-6">
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
                className="flex justify-center md:justify-normal gap-20 text-white font-medium hover:underline text-lg"
              >
                SEE MY WORKS 
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-6">
  <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
</svg>
              </a>
            </div>
          </div> */}

          {/* <div className=" md:my-24"> */}
            {/* <div className="grid  grid-cols-4 ">
              <a href="#" className=" text-xl mx-auto text-white hover:underline">Behance</a>
              <a href="#" className=" text-xl mx-auto text-white hover:underline">Linkedin</a>
              <a href="#" className=" text-xl mx-auto text-white hover:underline">Instagram</a>
              <a href="#" className=" text-xl  mx-auto text-white hover:underline">X</a>
            </div>
            <a href="mailto:olajide3212@gmail.com" className=" text-2xl px-10  mx-auto text-white hover:underline">Olajide3212@gmail.com</a> */}
          {/* </div> */}
        {/* </div> */}
        <div className="mx-auto md:py-6 pt-32 align-middle text-white font-inter text-xl text-center flex items-center ">
          <div className="md:flex mx-auto">
          <span className="mx-4 my-auto"> © Olajide Sodiq 2023 | </span><div className="flex py-6 gap-14">
          <a href="#" className=""><img src={behanceIcon} alt="" /></a>
          <a href="https://dribbble.com/ThisIsAbefe" className=""><img src={dribbleIcon} alt="loading" /></a>
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
