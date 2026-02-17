import React from "react";

const CookiePolicy = () => {
  const cookieTypes = [
    {
      title: "Essential Cookies",
      description:
        "These are necessary for the website to function. They allow you to add items to your cart, log in securely, and stay on the page without losing your progress.",
      status: "Always Active",
      icon: "🔒",
    },
    {
      title: "Performance & Analytics",
      description:
        "We use these to see how our style community moves through the site. It helps us fix bugs and understand which collections are trending.",
      status: "Optional",
      icon: "📈",
    },
    {
      title: "Personalization Cookies",
      description:
        "These remember your preferences, like your language or your size filters, so you don't have to set them every time you visit.",
      status: "Optional",
      icon: "✨",
    },
    {
      title: "Marketing & Social",
      description:
        "Used to deliver Fashody Fashion ads that are actually relevant to you on other platforms like Instagram or Google.",
      status: "Optional",
      icon: "📱",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-sm rounded-3xl overflow-hidden border border-slate-200">
        {/* Header Section */}
        <title>Cookie Policy</title>
        <div className="bg-[#1B3252] p-8 md:p-12 text-center text-white">
          <div className="inline-block px-4 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-widest mb-4">
            Cookie Policy
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            How We Use <span className="text-blue-400">Cookies</span>
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto">
            At Fashody Fashion, we use cookies to provide a seamless shopping
            experience and to understand what you love most.
          </p>
        </div>

        {/* Introduction */}
        <div className="p-8 md:p-12 pb-0">
          <p className="text-slate-600 leading-relaxed">
            By using the Fashody website, you agree to our use of cookies. A
            "cookie" is a small text file that we store on your browser or hard
            drive. It’s how we recognize you when you come back to browse our
            latest arrivals.
          </p>
        </div>

        {/* Cookie Categories Grid */}
        <div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {cookieTypes.map((type, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{type.icon}</span>
                <h3 className="font-bold text-slate-900">{type.title}</h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                {type.description}
              </p>
              <span
                className={`text-[10px] font-bold uppercase tracking-tighter px-2 py-1 rounded ${
                  type.status === "Always Active"
                    ? "bg-green-100 text-green-700"
                    : "bg-slate-200 text-slate-600"
                }`}
              >
                {type.status}
              </span>
            </div>
          ))}
        </div>

        {/* Control Section */}
        <div className="p-8 md:p-12 pt-0 border-t border-slate-50 mt-8">
          <h2 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-wide">
            Taking Control
          </h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            You can choose to block cookies by activating the setting on your
            browser that allows you to refuse the setting of all or some
            cookies. However, if you block all cookies (including essential
            ones), you might not be able to access parts of our shop or complete
            a purchase.
          </p>

          <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
            <h4 className="text-blue-900 font-bold mb-2">
              Want to change your settings?
            </h4>
            <p className="text-blue-800 text-sm mb-0">
              You can clear your cookie cache at any time in your browser
              settings. To learn more about cookies, visit{" "}
              <a
                href="https://www.allaboutcookies.org"
                className="underline font-semibold"
              >
                allaboutcookies.org
              </a>
              .
            </p>
          </div>
        </div>

        {/* Footer Meta */}
        <div className="bg-slate-50 px-8 py-4 text-center border-t border-slate-100">
          <p className="text-xs text-slate-400 font-medium">
            Fashody Fashion Cookie Policy — Updated February 2026
          </p>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
