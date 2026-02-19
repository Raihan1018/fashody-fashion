import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { Facebook } from "../../Icons/Facebook";
import { WhatsApp } from "../../Icons/WhatsApp";
import { LinkedIn } from "../../Icons/Linkedln";
import { CustomNavLink } from "../../CustomNavLink/CustomNavLink";

const Footer = () => {
  // 1. DYNAMIC LOGIC: Extract unique groups from the shop submenu
  const shopMenu = CustomNavLink.find((link) => link.name === "Shop");
  const productGroups = shopMenu
    ? [...new Set(shopMenu.submenu.map((item) => item.group))]
    : [];

  return (
    <footer className="bg-slate-900 text-slate-300 py-12 px-6 md:px-12 border-t border-slate-800">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <aside className="space-y-5">
            <Link to="/">
              <img
                className="w-24 brightness-0 invert"
                src={logo}
                alt="Fashody Logo"
              />
            </Link>
            <div>
              <p className="text-white font-semibold">Fashody Fashion Ltd.</p>
              <p className="text-sm text-slate-500 italic mt-1">
                Crafting quality apparel since 1992
              </p>
            </div>
            {/* Social Icons moved here for better desktop balance */}
            <div className="flex gap-4 pt-2">
              {[
                { icon: <Facebook />, url: "https://facebook.com" },
                {
                  icon: <WhatsApp />,
                  // Updated with the WhatsApp API link and your specific number
                  url: "https://wa.me/8801611642648",
                },
                { icon: <LinkedIn />, url: "https://linkedin.com" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:-translate-y-1 transition-transform duration-300 fill-slate-400 hover:fill-green-400"
                >
                  <div className="w-6 h-6">{social.icon}</div>
                </a>
              ))}
            </div>
          </aside>

          {/* Menu Items Grid */}
          <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
            {/* Column 1: DYNAMIC Product Types */}
            <nav className="flex flex-col space-y-3">
              <h6 className="text-white font-bold uppercase tracking-widest text-xs mb-2">
                Product Types
              </h6>
              {productGroups.map((group) => (
                <Link
                  key={group}
                  to="/products" // You can filter by group in your products page logic
                  className="hover:text-green-400 transition-colors text-sm"
                >
                  {group}
                </Link>
              ))}
            </nav>

            {/* Column 2: Company Info */}
            <nav className="flex flex-col space-y-3">
              <h6 className="text-white font-bold uppercase tracking-widest text-xs mb-2">
                Company Info
              </h6>
              {["Our Group", "Our Promise", "Global Location", "Newsfeed"].map(
                (item) => (
                  <Link
                    key={item}
                    to={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="hover:text-green-400 transition-colors text-sm"
                  >
                    {item}
                  </Link>
                ),
              )}
            </nav>

            {/* Column 3: Legal & Support */}
            <nav className="flex flex-col space-y-3">
              <h6 className="text-white font-bold uppercase tracking-widest text-xs mb-2">
                Support
              </h6>
              <Link
                to="/contact"
                className="hover:text-green-400 transition-colors text-sm"
              >
                Contact Us
              </Link>
              <Link
                to="/privacy-policy"
                className="hover:text-green-400 transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                to="/cookie-policy"
                className="hover:text-green-400 transition-colors text-sm"
              >
                Cookie Policy
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} FASHODY FASHION. ALL RIGHTS RESERVED.
          </p>
          <p className="flex gap-4">
            <span>Designed with Passion</span>
            <span className="text-slate-700">|</span>
            <span>Premium Apparel</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
