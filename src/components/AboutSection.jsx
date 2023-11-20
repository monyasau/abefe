import TitleUnderline from "../assets/images/title-underline.png";

export default function AboutSection() {
  const sectionItems = [
    {
      title: "Provision of Innovative Design Solutions",
      text1: `The primary focus is on developing products that are not only aesthetically pleasing but also 
    optimized for efficient manufacturing 
    processes. `,
      text2: `
    
    By considering factors that ensure your product can be successful at the competitive digital market.`,
    },
    {
      title: "Crafting User-Friendly Interface",
      text1: `Delivering user-friendly interface is top priority, thereby crafting visually appealing and functional user interfaces.`,
      text2: `
      Combining aesthetics, interaction design, and usability principles to create interfaces that not only look great but also provide a seamless user journey.`
    },
    {
      title: "Priortising Accessibility and Inclusivity",
      text1: `Understand my commitment to designing inclusive digital experiences that cater to users of all abilities. `,
      text2: `Adhering to accessibility guidelines and ensuring that all designs are accessible to individuals with disabilities, providing equal opportunities for all users.`
    },
  ];


  return (
    <div className="  bg-[#D9D9D9]">
      <div className="max-w-screen-xl mx-auto py-36">
        <h2 className="text-2xl font-semibold pb-4 text-center max-w-lg mx-auto">
          Explore my commitment to delivering sustainable user-friendly
          products.
        </h2>
        <img src={TitleUnderline} alt="" className="mx-auto max-w-sm" />

        <div className="md:grid grid-cols-3 gap-8 pt-16">
          {sectionItems.map((item, i) => (
            <div key={i} className="border-2 my-6 md:my-0 border-black p-6">
              <h3 className="font-semibold max-w-[50%] text-center mx-auto mb-16">
                {item.title}
              </h3>
              <p className="text-dark-gray">{item.text1}</p>
              <br />
              <p className="text-dark-gray">{item.text2}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
