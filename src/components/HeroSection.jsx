import HeroImage from "../assets/images/hero-photo.png";
import arrowIcon from "../assets/images/black-arrow.png";

export default function HeroSection() {
    return (
        <section className="max-w-screen-xl mx-auto md:grid text-center grid-cols-2 py-12">
            <div className="md:flex md:flex-col md:justify-center">
                <h1 className="font-extrabold text-4xl md:max-w-sm">A creative product & music designer.</h1>

                <p className="py-12 text-lg md:max-w-md">
                Hi, I’m Olajide Sodiq.
                <br /> A passionate UI/UX designer and a music producer based in Lagos, Nigeria.
                </p>

                <div>
                    <a href="#" className="font-medium hover:underline text-lg">SEE MY WORKS <img src={arrowIcon} alt="" /></a>
                </div>
            </div>

            <div>
                <img src={HeroImage} alt="" />
            </div>
        </section>
    );
}