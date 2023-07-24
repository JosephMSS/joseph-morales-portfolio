import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
export const SocialMedia = () => {
  const socialMediaList = [
    { icon: <FaFacebook /> },
    { icon: <BsInstagram /> },
    { icon: <BsTwitter /> },
  ];
  return (
    <div className="app__social">
      {socialMediaList.map((socialMedia, index) => {
        return <div key={index}>{socialMedia.icon}</div>;
      })}
    </div>
  );
};
