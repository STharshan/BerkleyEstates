
const About = () => {
  return (
    <section className="w-full bg-white px-5 py-2 pt-6 md:pt-10  md:px-8 md:py-10 lg:py-24 font-primary">
      <div className="mx-auto flex max-w-7xl flex-col items-center text-center ">
        <h2
          className="
            max-w-[900px]
            text-[28px]
            leading-[28PX]
            text-black
            md:text-[32px]
            lg:text-[32px]
            font-normal
          "

        >
         Report Maintenance Problem Below
        </h2>

        <p
          className="
            mt-6
            
            text-[14px]
            leading-[25px]
            text-black
            md:text-[14px]
            lg:text-[17px]
            font-primary
            px-1
            md:px-1
            lg:px-12
          "
        >
       Our easy-to-use maintenance system allows you to report maintenance problems from a large selection of issues. In addition, it also gives recommendations on how you can resolve the issue yourself. If these recommendations aren’t able to resolve your issue, you can fill in any further details about the problem. Also, as well as this, you can attach any photos you are able to take before then submitting it. Then, you will receive a confirmation message that the issue has been submitted. In addition, you will also receive an email with all the details of your reported issue for personal reference. Our maintenance team will then be alerted and be able to take appropriate action.
        </p>

      
      </div>
    </section>
  );
};

export default About;