const Section = ({ title, children }) => (
  <div className="px-4 py-6 bg-white ">
    <div className="max-w-7xl mx-auto">
      <h3 className="text-[17px] font-medium text-gray-900 mb-4">{title}</h3>
      {children}
    </div>
  </div>
);

export default function ComplaintsProcedure() {
  return (
    <div className="min-h-screen bg-white font-primary pt-28 px-4 md:px-10 2xl:px-40 pb-12">

      {/* Page Title */}
      <div className="bg-white py-10 px-4 ms-0 2xl:ms-10">
        <div className="max-w-7xl mx-auto md:text-left text-center">
          <h1 className="2xl:text-[70px] md:text-[32px] text-[28px] font-medium text-black leading-[28px]">In-house Complaints Procedure</h1>
        </div>
      </div>

      {/* Intro */}
      <Section >
        <p className="text-black text-[16px] leading-relaxed mb-4">
          We are committed to providing a professional service to all our clients and customers. When something goes wrong, we need you to tell us about it. This will help us to improve our standards.
        </p>
        <p className="text-black text-[16px] leading-relaxed">
          If you have a complaint, please put it in writing to the branch you are in contact with, including as much detail as possible. We will then respond in line with the timeframes set out below (if you feel we have not sought to address your complaints within eight weeks, you may be able to refer your complaint to the Property Ombudsman to consider without our final viewpoint on the matter).
        </p>
      </Section>

      {/* What will happen next */}
      <Section title="What will happen next?">
        <ul className="list-disc pl-5 space-y-2 ps-0 2xl:ps-12">
          <li className="text-black text-[16px] leading-relaxed">
            We will send you a letter acknowledging receipt of your complaint within three working days of receiving it, enclosing a copy of this procedure.
          </li>
          <li className="text-black text-[16px] leading-relaxed">
            We will then investigate your complaint. This will normally be dealt with by the office manager who will review your file and speak to the member of staff who dealt with you. A formal written outcome of our investigation will be sent to you within 15 working days of sending the acknowledgement letter.
          </li>
          <li className="text-black text-[16px] leading-relaxed">
            If, at this stage, you are still not satisfied, you should contact us again and we will arrange for a separate review to take place by a senior member of staff.
          </li>
          <li className="text-black text-[16px] leading-relaxed">
            We will write to you within 15 working days of receiving your request for a review, confirming our final viewpoint on the matter.
          </li>
        </ul>
      </Section>

      {/* Property Ombudsman contact */}
      <Section >
        <div className="text-black text-[16px] space-y-1 leading-relaxed mb-5 text-center">
          <p>The Property Ombudsman</p>
          <p>Milford House</p>
          <p>43-55 Milford Street</p>
          <p>Salisbury</p>
          <p>Wiltshire</p>
          <p>SP1 2BP</p>
          <p className="mt-3">01722 333 306</p>
          <p>
            <a href="mailto:admin@tpos.co.uk" className="text-black hover:underline">
              admin@tpos.co.uk
            </a>
          </p>
          <p>
            <a href="http://www.tpos.co.uk/" className="text-black hover:underline" target="_blank" rel="noopener noreferrer">
              www.tpos.co.uk
            </a>
          </p>
        </div>
      </Section>

      {/* Please note */}
      <Section title="Please note the following"   class="border border-red-400">
        <p className="text-black text-[16px] leading-relaxed mb-4">
          You will need to submit your complaint to The Property Ombudsman within 12 months of receiving our final viewpoint letter, including any evidence to support your case.
        </p>
        <p className="text-black text-[16px] leading-relaxed">
          The Property Ombudsman requires that all complaints are addressed through this in-house complaints procedure, before being submitted for an independent review.
        </p>
      </Section>

    </div>
  );
}