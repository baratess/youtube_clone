import "./Navbar.css";
import { CiMenuBurger } from "react-icons/ci";
import { IoIosSearch, IoIosNotifications } from "react-icons/io";
import { RiVideoUploadFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { ImYoutube2 } from "react-icons/im";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = ({ setSidebar }) => {
  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <CiMenuBurger
          className="menu-icon img"
          onClick={() => setSidebar((prev) => (prev === false ? true : false))}
        />
        <Link to={"/"}>
          <ImYoutube2 className="logo" />
        </Link>
      </div>
      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input type="text" placeholder="Search"></input>
          <IoIosSearch className="img" />
        </div>
      </div>
      <div className="nav-right flex-div">
        <RiVideoUploadFill className="img" />
        <IoIosNotifications className="img" />
        <CgProfile className="user-icon img" />
      </div>
    </nav>
  );
};

export default Navbar;

Navbar.propTypes = {
  setSidebar: PropTypes.object,
};
