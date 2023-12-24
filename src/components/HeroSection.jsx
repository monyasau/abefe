import HeroImage from "../assets/images/hero-photo.png";

export default function HeroSection() {
    return (
        <section className="max-w-screen-xl mx-auto md:grid md:text-start text-center grid-cols-2 py-12">
            <div className="md:flex md:flex-col md:justify-center">
                <h1 className="font-extrabold text-4xl md:max-w-sm">A creative product & music designer.</h1>

                <p className="py-12 text-lg md:max-w-md">
                Hi, I’m Olajide Sodiq.
                <br /> A passionate UI/UX designer and a music producer based in Lagos, Nigeria.
                </p>

                <div>
                    <a href="#" className="font-medium hover:underline text-lg flex justify-center md:justify-normal">SEE MY WORKS 
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-20 h-6">
  <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
</svg>

                    </a>
                </div>
            </div>

            <div>
                <img src={HeroImage} alt="" />
            </div>
        </section>
    );
}