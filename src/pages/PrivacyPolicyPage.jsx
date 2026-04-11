import { useState } from "react";

const Section = ({ title, children }) => (
  <div className="px-2 py-6 bg-white">
    <div className="max-w-7xl mx-auto">
      <h3 className="text-2xl font-medium text-gray-900 mb-4">{title}</h3>
      {children}
    </div>
  </div>
);

const BulletList = ({ items }) => (
  <ul className="list-disc pl-5 space-y-2">
    {items.map((item, i) => (
      <li key={i} className="text-gray-700 leading-relaxed text-lg">
        {item}
      </li>
    ))}
  </ul>
);

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white font-sans">

      {/* Page Title */}
      <div className="bg-white py-10 px-2">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-medium text-gray-900">Privacy Policy</h1>
        </div>
      </div>

      {/* Our contact details */}
      <Section title="Our contact details">
        <ul className="list-disc pl-5 space-y-2">
          <li className="text-gray-700 text-lg leading-relaxed">
            Name: Berkley Estate &amp; Letting Agents Ltd
          </li>
          <li className="text-gray-700 text-lg leading-relaxed">
            Address: 75 Hinckley Road, Leicester, LE3 0TD
          </li>
          <li className="text-gray-700 text-lg leading-relaxed">
            Phone Number: 0116 254 4755
          </li>
          <li className="text-gray-700 text-lg leading-relaxed">
            E-mail:{" "}
            <a href="mailto:leicester@berkleyestates.co.uk" className="text-blue-600 hover:underline">
              leicester@berkleyestates.co.uk
            </a>
          </li>
          <li className="text-gray-700 text-lg leading-relaxed">
            Privacy Policy Updated: 03/08/2022
          </li>
        </ul>
      </Section>

      {/* Type of personal information */}
      <Section title="The type of personal information we collect">
        <p className="text-gray-700 text-lg mb-4">
          We currently collect and process the following information:
        </p>
        <ul className="list-disc pl-5 space-y-3">
          <li className="text-gray-700 text-lg leading-relaxed">
            <strong>Information you give us.</strong>{" "}
            This is information about you that you give us by filling in forms on our website (
            <strong>our site</strong>) or by corresponding with us by phone, e-mail or otherwise.
          </li>
          <li className="text-gray-700 text-lg leading-relaxed">
            <strong>Information we collect about you.</strong>{" "}
            With regard to each of your visits to our site we may automatically collect the following information:
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Technical information, including the Internet protocol (IP) address used to connect your computer to the Internet; and</li>
              <li>Information about your visit</li>
            </ul>
          </li>
        </ul>
      </Section>

      {/* How we get it & why */}
      <Section title="How we get the personal information and why we have it">
        <p className="text-gray-700 text-lg mb-4">
          Most of the personal information we process is provided to us directly by you for one of the following reasons:
        </p>
        <BulletList items={[
          "Arranging viewings, expressing interest in property, valuations (not limited to). Information required to ensure the safety of our staff at viewings, valuations. Contact information, telephone numbers and email addresses required.",
          "Ensuring compliance legislation to include Right To Rent Checks required under section 22 of the immigration act 2014 and The Money Laundering, Terrorist Financing and Transfer of Funds Regulations 2017.",
          "Enable tailored marketing and communication to you",
          "Improving our products and services, understanding your requirements to personalise the properties and services we show you.",
          "To process your transaction, either through our third party referencing company for the rental of properties, or for the purchase of a property through us. This will be personal information including financial.",
          "Preventing fraud",
          "Customer service — the information provided to us will allow us to assist you in your enquiry in a timely and relevant manner.",
        ]} />

        <p className="text-gray-700 text-lg mt-5 mb-4">
          We may share this information with any member of our group, which means our subsidiaries, our ultimate holding company and its subsidiaries, as defined in section 1159 of the UK Companies Act 2006.
        </p>

        <p className="text-gray-700 text-lg mb-4">
          We will disclose your personal information to third parties:
        </p>
        <BulletList items={[
          "In the event that we sell or buy any business or assets, in which case we will disclose your personal data to the prospective seller or buyer of such business or assets.",
          "If we or substantially all of our assets are acquired by a third party, in which case personal data held by it about its customers will be one of the transferred assets.",
          "If we are under a duty to disclose or share your personal data in order to comply with any legal obligation, or in order to enforce or apply our terms of use and other agreements; or to protect the rights, property, or safety of us, our customers, or others. This includes exchanging information with other companies and organisations for the purposes of fraud protection and credit risk reduction.",
        ]} />

        <p className="text-gray-700 text-lg mt-5 mb-4">
          Under the UK General Data Protection Regulation (UK GDPR), the lawful bases we rely on for processing this information are:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li className="text-gray-700 text-lg leading-relaxed">
            Your consent. You are able to remove your consent at any time. You can do this by contacting{" "}
            <a href="mailto:leicester@berkleyestates.co.uk" className="text-blue-600 hover:underline">
              leicester@berkleyestates.co.uk
            </a>
          </li>
          <li className="text-gray-700 text-lg leading-relaxed">We have a contractual obligation.</li>
          <li className="text-gray-700 text-lg leading-relaxed">We have a legal obligation.</li>
          <li className="text-gray-700 text-lg leading-relaxed">We have a vital interest.</li>
          <li className="text-gray-700 text-lg leading-relaxed">We need it to perform a public task.</li>
          <li className="text-gray-700 text-lg leading-relaxed">We have a legitimate interest.</li>
        </ul>
      </Section>

      {/* How we collect */}
      <Section title="How we collect information">
        <p className="text-gray-700 text-lg mb-4">We collect information in the following ways:</p>
        <BulletList items={[
          "In person via our branches",
          "By telephone",
          "By post",
          "By SMS",
          "By Email",
          "Social Media, including but not limited to, Facebook, Instagram, Tik Tok",
          "Website",
          "Property Portals",
          "Third Party Websites",
        ]} />
      </Section>

      {/* How we store */}
      <Section title="How we store your personal information">
        <p className="text-gray-700 text-lg mb-4">Your information is securely stored.</p>
        <p className="text-gray-700 text-lg mb-4 leading-relaxed">
          The data that we collect from you may be transferred to, and stored at, a destination outside the European Economic Area ("EEA"). It will also be processed by staff operating outside the EEA who work for us or for one of our suppliers. This includes staff engaged in, among other things, the fulfilment of your order, the processing of your payment details and the provision of support services. By submitting your personal data, you agree to this transfer, storing or processing. We will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this privacy policy.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          Unfortunately, the transmission of information via the internet is not completely secure. Although we will do our best to protect your personal data, we cannot guarantee the security of your data transmitted to our site; any transmission is at your own risk. Once we have received your information, we will use strict procedures and security features to try to prevent unauthorised access.
        </p>
      </Section>

      {/* Who do we share it with */}
      <Section title="Who do we share it with?">
        <div className="space-y-4">
          <div>
            <p className="font-bold text-gray-900 text-lg mb-1">Lettings:</p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Including but not limited to tenant referencing agents, landlords, maintenance contractors, gas and electrical contractors, utility providers, insurance providers and other estate agents.
            </p>
          </div>
          <div>
            <p className="font-bold text-gray-900 text-lg mb-1">Sales:</p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Including but not limited to Solicitors / Conveyancers, Surveyors, Financial / Mortgage advisors, estate agents within the chain, developers if new build purchase, contractors and property maintenance providers.
            </p>
          </div>
          <div>
            <p className="font-bold text-gray-900 text-lg mb-1">
              Company Software Providers, Website Hosts, Analytic Platform Including (but not limited to):
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Vebra Alto, AgentOS, FixFlo, BriefYourMarket, WebExpert, Google Analytics, Zero
            </p>
          </div>
        </div>
      </Section>

      {/* Data protection rights */}
      <Section title="Your data protection rights">
        <p className="text-gray-700 text-lg mb-4">Under data protection law, you have rights including:</p>
        <div className="space-y-3">
          {[
            { title: "Your right of access", desc: "You have the right to ask us for copies of your personal information." },
            { title: "Your right to rectification", desc: "You have the right to ask us to rectify personal information you think is inaccurate. You also have the right to ask us to complete information you think is incomplete." },
            { title: "Your right to erasure", desc: "You have the right to ask us to erase your personal information in certain circumstances." },
            { title: "Your right to restriction of processing", desc: "You have the right to ask us to restrict the processing of your personal information in certain circumstances." },
            { title: "Your right to object to processing", desc: "You have the right to object to the processing of your personal information in certain circumstances." },
            { title: "Your right to data portability", desc: "You have the right to ask that we transfer the personal information you gave us to another organisation, or to you, in certain circumstances." },
          ].map(({ title, desc }) => (
            <p key={title} className="text-gray-700 text-lg leading-relaxed">
              <strong>{title}</strong> – {desc}
            </p>
          ))}
        </div>
        <p className="text-gray-700 text-lg mt-4 leading-relaxed">
          You are not required to pay any charge for exercising your rights. If you make a request, we have one month to respond to you.
        </p>
        <p className="text-gray-700 text-lg mt-3 leading-relaxed">
          Please contact us at email:{" "}
          <a href="mailto:leicester@berkleyestates.co.uk" className="text-blue-600 hover:underline">
            leicester@berkleyestates.co.uk
          </a>{" "}
          or 75 Hinckley Road, Leicester, LE3 OTD if you wish to make a request.
        </p>
      </Section>

      {/* How to complain */}
      <Section title="How to complain">
        <p className="text-gray-700 text-lg mb-4 leading-relaxed">
          If you have any concerns about our use of your personal information, you can make a complaint to us at Berkley Estate &amp; Letting Agents Ltd, 75 Hinckley Road, Leicester, LE3 0TD.
        </p>
        <p className="text-gray-700 text-lg mb-5 leading-relaxed">
          You can also complain to the ICO if you are unhappy with how we have used your data.
        </p>
        <div className="text-gray-700 text-lg space-y-1 leading-relaxed">
          <p>The ICO's address:</p>
          <p>Information Commissioner's Office</p>
          <p>Wycliffe House</p>
          <p>Water Lane</p>
          <p>Wilmslow</p>
          <p>Cheshire</p>
          <p>SK9 5AF</p>
          <p className="mt-2">Helpline number: 0303 123 1111</p>
          <p>
            ICO website:{" "}
            <a href="https://www.ico.org.uk" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
              https://www.ico.org.uk
            </a>
          </p>
        </div>
      </Section>

      {/* ── COOKIE POLICY ── */}
      <div className="bg-white py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-medium text-gray-900">Cookie Policy</h2>
        </div>
      </div>

      {/* About this cookie policy */}
      <Section title="About this cookie policy">
        <div className="space-y-3 text-gray-700 text-lg leading-relaxed">
          <p>
            This Cookie Policy explains what cookies are and how we use them. You should read this policy to understand what cookies are, how we use them, the types of cookies we use i.e, the information we collect using cookies and how that information is used and how to control the cookie preferences. For further information on how we use, store and keep your personal data secure, see our Privacy Policy.
          </p>
          <p>You can at any time change or withdraw your consent from the Cookie Declaration on our website.</p>
          <p>Learn more about who we are, how you can contact us and how we process personal data in our Privacy Policy.</p>
          <p>
            Your consent applies to the following domains:{" "}
            <a href="https://berkleyestates.co.uk" className="text-blue-600 hover:underline">
              berkleyestates.co.uk
            </a>
          </p>
          <p>Your current state: Consent accepted. Manage your consent.</p>
        </div>
      </Section>

      {/* How do we use cookies */}
      <Section title="How do we use cookies?">
        <div className="space-y-3 text-gray-700 text-lg leading-relaxed">
          <p>
            As most of the online services, our website uses cookies first-party and third-party cookies for a number of purposes. The first-party cookies are mostly necessary for the website to function the right way, and they do not collect any of your personally identifiable data.
          </p>
          <p>
            The third-party cookies used on our websites are used mainly for understanding how the website performs, how you interact with our website, keeping our services secure, providing advertisements that are relevant to you, and all in all providing you with a better and improved user experience and help speed up your future interactions with our website.
          </p>
        </div>
      </Section>

      {/* What types of cookies */}
      <Section title="What types of cookies do we use?">
        <div className="space-y-3 text-gray-700 text-lg leading-relaxed">
          <p>
            <strong>Essential:</strong> Some cookies are essential for you to be able to experience the full functionality of our site. They allow us to maintain user sessions and prevent any security threats. They do not collect or store any personal information. For example, these cookies allow you to log-in to your account and add products to your basket and checkout securely.
          </p>
          <p>
            <strong>Statistics:</strong> These cookies store information like the number of visitors to the website, the number of unique visitors, which pages of the website have been visited, the source of the visit etc. These data help us understand and analyze how well the website performs and where it needs improvement.
          </p>
          <p>
            <strong>Marketing:</strong> Our website displays advertisements. These cookies are used to personalize the advertisements that we show to you so that they are meaningful to you. These cookies also help us keep track of the efficiency of these ad campaigns.
          </p>
          <p>
            The information stored in these cookies may also be used by the third-party ad providers to show you ads on other websites on the browser as well.
          </p>
          <p>
            <strong>Functional:</strong> These are the cookies that help certain non-essential functionalities on our website. These functionalities include embedding content like videos or sharing contents on the website on social media platforms.
          </p>
          <p>
            <strong>Preferences:</strong> These cookies help us store your settings and browsing preferences like language preferences so that you have a better and efficient experience on future visits to the website.
          </p>
        </div>
      </Section>

      {/* How to control cookie preferences */}
      <Section title="How can I control the cookie preferences?">
        <div className="space-y-3 text-gray-700 text-lg leading-relaxed">
          <p>
            Should you decide to change your preferences later through your browsing session, you can click on the "Privacy &amp; Cookie Policy" tab on your screen. This will display the consent notice again enabling you to change your preferences or withdraw your consent entirely.
          </p>
          <p>
            In addition to this, different browsers provide different methods to block and delete cookies used by websites. You can change the settings of your browser to block/delete the cookies. To find out more out more on how to manage and delete cookies, visit{" "}
            <a href="https://en.wikipedia.org/wiki/HTTP_cookie" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
              wikipedia.org
            </a>
            ,{" "}
            <a href="http://www.allaboutcookies.org/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
              www.allaboutcookies.org
            </a>
          </p>
        </div>
      </Section>

    </div>
  );
}