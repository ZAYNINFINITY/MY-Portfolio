import { socialImgs } from "../constants";

const Footer = () => {
  const getSocialUrl = (name) => {
    switch (name) {
      case "instagram":
        return "https://instagram.com";
      case "facebook":
        return "https://facebook.com";
      case "twitter":
        return "https://twitter.com";
      case "linkedin":
        return "https://www.linkedin.com/in/zain-ul-abideen-429735231/";
      default:
        return "#";
    }
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-8">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col justify-center">
            <p className="text-slate-400 text-sm">Terms & Conditions</p>
          </div>

          <div className="flex gap-4">
            {socialImgs.map((socialImg, index) => (
              <a
                key={index}
                href={getSocialUrl(socialImg.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center transition-opacity hover:opacity-80"
              >
                <img
                  src={socialImg.imgPath}
                  alt={socialImg.name}
                  className="w-5 h-5"
                />
              </a>
            ))}
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-slate-400 text-sm text-center md:text-end">
              © {new Date().getFullYear()} Zain Ul Abideen. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
