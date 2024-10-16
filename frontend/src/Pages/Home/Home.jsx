import "./Home.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import PropTypes from "prop-types";
import Content from "../../Components/Content/Content";

const Home = ({ sidebar }) => {
  return (
    <>
      <Sidebar sidebar={sidebar} />
      <div className={`container ${sidebar ? "" : "large-container"}`}>
        <Content />
      </div>
    </>
  );
};

export default Home;

Home.propTypes = {
  sidebar: PropTypes.object,
};
