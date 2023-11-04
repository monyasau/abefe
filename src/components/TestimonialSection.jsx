import TestimonialImage from "../assets/images/testimonial-Image.png";
import TestimonialLine from "../assets/images/testimonial-Line.png";

export default function TestimonialSection() {
  return (
    <div className="bg-white">
      <div className="max-w-screen-xl mx-auto  py-20">
        <h2 className="font-bold text-center text-2xl">Testimonials</h2>

        <p className=" text-dark-gray text-center text-xl  my-16">
          Read success stories and testimonials from clients who have partnered
          with us to design exceptional digital products.
          <br />
          Discover how our designs have improved user engagement, increased
          conversions,
          <br />
          and helped businesses achieve their goals.
        </p>

        <div className="bg-[#D9D9D9] rounded-full mx-auto">
          <img src={TestimonialImage} alt="" />
        </div>
        <div className="my-24">
            <img src={TestimonialLine} className="mx-auto mb-48" alt="" />
            <p className="font-semibold text-3xl text-center">" Choose a job you love, and you’ll never have to work a day in your life "</p>
        </div>
      </div>
    </div>
  );
}
