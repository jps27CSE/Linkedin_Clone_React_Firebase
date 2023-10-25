import "./index.scss";
import LinkedinLogo from "../../../assets/linkedinLogo.png";
import {
  AiOutlineHome,
  AiOutlineUserSwitch,
  AiOutlineSearch,
  AiOutlineMessage,
  AiOutlineBell,
} from "react-icons/ai";
import user from "../../../assets/user.png";
import { BsBriefcase } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
const index = () => {
  let navigate = useNavigate();
  const goToRoute = (route) => {
    navigate(route);
  };
  return (
    <div className="topbar-main">
      <img className="linkedin-logo" src={LinkedinLogo} alt="" />
      <div className="react-icons">
        <AiOutlineSearch size={30} className="react-icon" />
        <AiOutlineHome
          onClick={() => goToRoute("/home")}
          size={30}
          className="react-icon"
        />
        <AiOutlineUserSwitch
          onClick={() => goToRoute("/profile")}
          size={30}
          className="react-icon"
        />
        <BsBriefcase size={30} className="react-icon" />
        <AiOutlineMessage size={30} className="react-icon" />
        <AiOutlineBell size={30} className="react-icon" />
      </div>
      <img src={user} alt="user" className="user-logo" />
    </div>
  );
};

export default index;
