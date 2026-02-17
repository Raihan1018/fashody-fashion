import React from "react";

const PrivacyPolicy = () => {
  const sections = [
    {
      id: "commitment",
      title: "1. Our Commitment",
      content: `At Fashody Fashion, we are 100% committed to protecting the privacy and security of our style community. For all our services, the data controller—the entity responsible for your privacy—is Fashody Fashion Ltd. If you have any questions, drop us a line at hello@fashody.com.`,
    },
    {
      id: "legal",
      title: "2. Our Legal Grounding",
      content: `Whenever we handle your personal information, we rely on Consent (your permission), Performance of a Contract (delivering your orders), Legitimate Interests (running our business safely), and Legal Obligation (following the law).`,
    },
    {
      id: "collection",
      title: "3. What Information We Collect",
      list: [
        "Identity & Contact: Name, shipping address, and email.",
        "Style Profile: Feedback, size preferences, and interaction with our collections.",
        "Digital Footprint: IP address, browser type, and navigation patterns.",
        "Engagement: Email open rates and link clicks.",
      ],
    },
    {
      id: "usage",
      title: "4. How We Use Your Information",
      content: `We use your data to keep you styled with personalized offers, stay connected via order updates, and 'improve the fit' by analyzing trends so we stock the pieces you actually want.`,
    },
    {
      id: "sharing",
      title: "5. Sharing Your Data",
      content: `We do not sell your data. We only share it with essential partners: logistics for delivery, tech for website maintenance, and marketing platforms to show you relevant style content.`,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-sm rounded-3xl overflow-hidden border border-slate-200">
        {/* Header Section */}
        <title>Privacy Policy</title>
        <div className="bg-[#1B3252] p-8 md:p-12 text-center text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            Privacy <span className="text-blue-400">Policy</span>
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Your style is personal—and so is your data. Here is how we keep the
            Fashody Fashion community safe and secure.
          </p>
        </div>

        {/* Content Section */}
        <div className="p-8 md:p-12 space-y-12">
          {sections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-20">
              <h2 className="text-xl font-bold text-slate-900 mb-4 border-b pb-2 border-slate-100 uppercase tracking-wide">
                {section.title}
              </h2>
              {section.content && (
                <p className="text-slate-600 leading-relaxed italic md:not-italic">
                  {section.content}
                </p>
              )}
              {section.list && (
                <ul className="mt-4 space-y-3">
                  {section.list.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-slate-600"
                    >
                      <span className="h-2 w-2 rounded-full bg-blue-500 mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        {/* Footer Meta */}
        <div className="bg-slate-50 px-8 py-4 text-center border-t border-slate-100">
          <p className="text-xs text-slate-400 font-medium">
            Last Updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
