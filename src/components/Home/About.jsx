import React from "react";

const AboutSection = () => {
  return (
    <section className="w-full bg-[#efefef] py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10 lg:px-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="max-w-120">
            <div className="mb-8 h-px w-full bg-[#3b3b3b]" />
            <h2 className="text-[42px] font-light leading-none   text-[#2f2f2f] md:text-[46px]">
              Exceptional homes, extraordinary service—more than agents, true
              partners in property
            </h2>
          </div>

          <div className=" lg:pt-1">
            <p className="text-xl leading-none text-[#1f1f1f]">
              We are a team of committed professionals passionate about
              providing a seamless and stress-free property experience. Our
              personalised approach, creative marketing strategies, and
              customised property management services make us stand out.
              Whether you’re buying, selling, renting, or letting, we
              prioritise building genuine connections and understanding what
              truly matters to you. With a relentless drive to simplify the
              process, we ensure every detail is handled with care and
              efficiency. By rethinking traditional methods and always putting
              your needs first, we strive to go above and beyond to deliver
              exceptional results every step of the way.
            </p>
          </div>
        </div>

        {/* Middle Image Section */}
        <div className="mt-20 grid grid-cols-1 items-start gap-y-10 md:grid-cols-2 md:gap-x-10 lg:mt-28 lg:grid-cols-3">
          {/* Left Image */}
          <div className="flex justify-center lg:justify-start lg:pt-28">
            <div className="w-full max-w-105">
              <img
                src="https://berkleyestates.co.uk/wp-content/uploads/2025/01/IMG_0268-1.webp"
                alt="Berkley Estates home exterior"
                className="block h-auto w-full object-cover"
              />
            </div>
          </div>

          {/* Center Image + Text */}
          <div className="flex flex-col items-center lg:-mt-8">
            <div className="w-full max-w-105">
              <img
                src="https://berkleyestates.co.uk/wp-content/uploads/elementor/thumbs/IMG_5418-2-r04po368vqxzr3zyh71sonx8gmbazcx5jlntcmelee.webp"
                alt="Berkley Estates agent"
                className="block h-auto w-full object-cover"
              />
            </div>

            <div className="mt-8 w-full max-w-105">
              <p className="text-5 leading-none text-[#1f1f1f]">
                Building authentic relationships with clients is at the heart of
                everything we do. We take the time to listen, understand, and
                connect on a personal level.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end lg:pt-28">
            <div className="w-full max-w-105">
              <img
                src="https://berkleyestates.co.uk/wp-content/uploads/2025/01/IMG_8293-1.webp"
                alt="Berkley Estates interior"
                className="block h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-24 grid grid-cols-1 items-center gap-12 lg:mt-28 lg:grid-cols-2 lg:gap-20">
          <div className="max-w-190">
            <p className="text-[18px] leading-[1.2] text-[#1f1f1f]">
              Berkley Estates is a leading estate agency with comprehensive
              coverage across Leicestershire, offering expert sales and
              lettings services. Our top-performing sales agents are at the
              peak of their profession, consistently achieving outstanding
              results for our clients, while our highly efficient lettings team
              expertly manages a vast portfolio to an exceptional standard.
              With an extensive office network and hundreds of years of
              combined experience, we bring unrivalled knowledge, empathy, and
              dedication to every transaction. At Berkley Estates, we are
              driven by a passion for delivering results the right way—with
              integrity, compassion, and a commitment to exceeding
              expectations.
            </p>
          </div>

          <div className="w-full">
            <img
              src="https://berkleyestates.co.uk/wp-content/uploads/2025/01/IMG_6282-1024x768.webp"
              alt="Berkley Estates aerial property view"
              className="block h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;