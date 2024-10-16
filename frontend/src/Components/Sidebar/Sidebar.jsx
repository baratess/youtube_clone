import "./Sidebar.css";
import {
  MdHomeFilled,
  MdOutlineSubscriptions,
  MdOutlineWatchLater,
} from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { PiClockCounterClockwise } from "react-icons/pi";
import { BsPersonBoundingBox } from "react-icons/bs";
import { CgPlayList } from "react-icons/cg";
import { GoVideo } from "react-icons/go";
import { AiOutlineLike } from "react-icons/ai";
import { IoIosTrendingUp, IoIosHelpCircleOutline } from "react-icons/io";
import { IoMusicalNoteOutline } from "react-icons/io5";
import { BsBroadcast } from "react-icons/bs";
import { IoGameControllerOutline } from "react-icons/io5";
import { TfiCup } from "react-icons/tfi";
import { FaYoutube } from "react-icons/fa6";
import { CiSettings, CiFlag1 } from "react-icons/ci";
import { MdOutlineFeedback } from "react-icons/md";
import PropTypes from "prop-types";

const Sidebar = ({ sidebar }) => {
  return (
    <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
      <div className="sortcut-links">
        <div className="side-link">
          <MdHomeFilled />
          <p> Home Page</p>
        </div>
        <div className="side-link">
          <SiYoutubeshorts />
          <p> Shorts</p>
        </div>
        <div className="side-link">
          <MdOutlineSubscriptions />
          <p> Subscriptions</p>
        </div>
        <hr />
        <h3>You </h3>
        <div className="side-link">
          <BsPersonBoundingBox />
          <p> Your Channel</p>
        </div>
        <div className="side-link">
          <PiClockCounterClockwise />
          <p> History</p>
        </div>
        <div className="side-link">
          <CgPlayList />
          <p> Playlists</p>
        </div>
        <div className="side-link">
          <GoVideo />
          <p> Your videos</p>
        </div>
        <div className="side-link">
          <MdOutlineWatchLater />
          <p> Watch later</p>
        </div>
        <div className="side-link">
          <AiOutlineLike />
          <p> Videos i liked</p>
        </div>
        <hr />
        <div className="subscribed-list">
          <h3>Subscriptions</h3>
        </div>
        <hr />
        <h3>Discover</h3>
        <div className="side-link">
          <IoIosTrendingUp />
          <p> Trends</p>
        </div>
        <div className="side-link">
          <IoMusicalNoteOutline />
          <p> Music</p>
        </div>
        <div className="side-link">
          <BsBroadcast />
          <p> Live</p>
        </div>
        <div className="side-link">
          <IoGameControllerOutline />
          <p> Game</p>
        </div>
        <div className="side-link">
          <TfiCup />
          <p> Sports</p>
        </div>
        <hr />
        <h3>More content from ...</h3>
        <div className="side-link">
          <FaYoutube />
          <p> Youtube Premium</p>
        </div>
        <div className="side-link">
          <FaYoutube />
          <p> Youtube Studio</p>
        </div>
        <div className="side-link">
          <FaYoutube />
          <p> Youtube Music</p>
        </div>
        <div className="side-link">
          <FaYoutube />
          <p> Youtube Kids</p>
        </div>
        <hr />
        <br />
        <div className="side-link">
          <CiSettings />
          <p> Settings</p>
        </div>
        <div className="side-link">
          <CiFlag1 />
          <p> Content report</p>
        </div>
        <div className="side-link">
          <IoIosHelpCircleOutline />
          <p> Help</p>
        </div>
        <div className="side-link">
          <MdOutlineFeedback />
          <p> Send feedback</p>
        </div>
        <hr />
        <br />
      </div>
    </div>
  );
};

export default Sidebar;

Sidebar.propTypes = {
  sidebar: PropTypes.object,
};
