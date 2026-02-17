import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { Facebook } from "../../Icons/Facebook";
import { WhatsApp } from "../../Icons/WhatsApp";
import { LinkedIn } from "../../Icons/Linkedln";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-10 px-6 md:px-12">
      <div className="max-w-screen-xl mx-auto">
        {/* Main Grid: Aside + 3x2 Menu Area */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <aside className="lg:col-span-1 space-y-4">
            <Link to={"/"}>
              <img className="w-24 brightness-0 invert" src={logo} alt="Logo" />
            </Link>
            <p className="text-sm leading-relaxed">
              ACME Industries Ltd.
              <br />
              <span className="text-slate-500 italic">
                Providing reliable tech since 1992
              </span>
            </p>
          </aside>

          {/* Menu Items: The 3x2 Grid */}
          <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-y-10">
            {/* Column 1 */}
            <nav className="flex flex-col space-y-3">
              <h6 className="text-white font-bold uppercase tracking-wider text-xs mb-2">
                Products & Services
              </h6>
              <Link
                to="#"
                className="hover:text-green-400 transition-colors text-sm"
              >
                Jacket
              </Link>
              <Link
                to="#"
                className="hover:text-green-400 transition-colors text-sm"
              >
                T-Shirt
              </Link>
              <Link
                to="#"
                className="hover:text-green-400 transition-colors text-sm"
              >
                Polo Shirt
              </Link>
              <Link
                to="#"
                className="hover:text-green-400 transition-colors text-sm"
              >
                Pant
              </Link>
            </nav>

            {/* Column 2 */}
            <nav className="flex flex-col space-y-3">
              <h6 className="text-white font-bold uppercase tracking-wider text-xs mb-2">
                Company Info
              </h6>
              <Link
                to="our-groups"
                className="hover:text-green-400 transition-colors text-sm"
              >
                Our Group
              </Link>
              <Link
                to="our-promise"
                className="hover:text-green-400 transition-colors text-sm"
              >
                Our Promise
              </Link>
              <Link
                to="#"
                className="hover:text-green-400 transition-colors text-sm"
              >
                Meet Our Team
              </Link>
              <Link
                to="#"
                className="hover:text-green-400 transition-colors text-sm"
              >
                History
              </Link>
            </nav>

            {/* Column 3 */}
            <nav className="flex flex-col space-y-3">
              <h6 className="text-white font-bold uppercase tracking-wider text-xs mb-2">
                Support
              </h6>
              <Link
                to="contact"
                className="hover:text-green-400 transition-colors text-sm"
              >
                Contact Us
              </Link>
              <Link
                to="global-location"
                className="hover:text-green-400 transition-colors text-sm"
              >
                Global Locations
              </Link>
              <Link
                to="newsfeed"
                className="hover:text-green-400 transition-colors text-sm"
              >
                Newsfeed
              </Link>
            </nav>

            {/* Column 4 (Row 2, Col 1) */}
            <nav className="flex flex-col space-y-3">
              <h6 className="text-white font-bold uppercase tracking-wider text-xs mb-2">
                Product Types
              </h6>
              <Link
                to="#"
                className="hover:text-green-400 transition-colors text-sm"
              >
                Tees
              </Link>
              <Link
                to="#"
                className="hover:text-green-400 transition-colors text-sm"
              >
                Shirts
              </Link>
              <Link
                to="#"
                className="hover:text-green-400 transition-colors text-sm"
              >
                Reports
              </Link>
            </nav>

            {/* Column 5 (Row 2, Col 2) */}
            <nav className="flex flex-col space-y-3">
              <h6 className="text-white font-bold uppercase tracking-wider text-xs mb-2">
                Privacy & Cookies
              </h6>
              <Link
                to="privacy-policy"
                className="hover:text-green-400 transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                to="cookie-policy"
                className="hover:text-green-400 transition-colors text-sm"
              >
                Cookie Policy
              </Link>
            </nav>

            {/* Column 6 (Row 2, Col 3) */}
            <nav className="flex flex-col space-y-3">
              <h6 className="text-white font-bold uppercase tracking-wider text-xs mb-2">
                Connect
              </h6>
              <div className="flex gap-4">
                {/* Placeholder for Social Icons */}
                <div className="w-8 h-8 rounded-full  cursor-pointer hover:-translate-y-1 duration-200 ease-in-out">
                  <Link to={"https://www.facebook.com"} target="_blank">
                    <Facebook />
                  </Link>
                </div>
                <div className="w-8 h-8 rounded-full  cursor-pointer hover:-translate-y-1 duration-200 ease-in-out">
                  <Link to={"https://www.whatsapp.com"} target="_blank">
                    <WhatsApp />
                  </Link>
                </div>
                <div className="w-8 h-8 rounded-full  cursor-pointer hover:-translate-y-1 duration-200 ease-in-out">
                  <Link to={"https://www.linkedin.com"} target="_blank">
                    <LinkedIn />
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Fashody Fashion. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
