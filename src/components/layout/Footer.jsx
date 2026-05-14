import "react";
import { footerLinks } from "../../data/siteData";

const Footer = () => {
  // If data hasn't loaded, return a simple brand bar
  if (!footerLinks)
    return (
      <footer className="bg-[#1A1A1B] p-10 text-white text-center font-serif tracking-[0.4em]">
        MELANIX
      </footer>
    );

  return (
    <footer className="bg-[#1A1A1B] text-white pt-20 pb-10 px-6 md:px-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Bottom Bar: TEXT-BASED Socials for high-end look and ZERO ERRORS */}
        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex gap-8 text-[10px] font-bold tracking-[0.5em] text-gray-500">
            <a href="#" className="hover:text-[#C5A059] transition-colors">
              INSTAGRAM
            </a>
            <a href="#" className="hover:text-[#C5A059] transition-colors">
              TWITTER
            </a>
            <a href="#" className="hover:text-[#C5A059] transition-colors">
              FACEBOOK
            </a>
            <a href="#" className="hover:text-[#C5A059] transition-colors">
              LINKEDIN
            </a>
          </div>
          <p className="text-[10px] text-gray-600 tracking-[0.3em] uppercase">
            © {new Date().getFullYear()} MELANIX COSMETICS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
