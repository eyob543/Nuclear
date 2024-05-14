import { PiInstagramLogoFill } from "react-icons/pi";
import { FaFacebook } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaTelegram } from "react-icons/fa6";
const Icon = () => {
  return (
    <div style={{ display: "flex", gap: 10 }}>
      <PiInstagramLogoFill size={36} style={{ display: "inline-block" }} />
      <FaFacebook size={36} style={{ display: "inline-block" }} />
      <IoLogoLinkedin size={36} style={{ display: "inline-block" }} />
      <FaTelegram size={36} style={{ display: "inline-block" }} />
    </div>
  );
};

export default Icon;
