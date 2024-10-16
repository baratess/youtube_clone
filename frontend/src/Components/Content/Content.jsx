import "./Content.css";
import { Link } from "react-router-dom";

const Content = () => {
  return (
    <div className="feed">
      <Link to={"/video/2211"} className="card">
        <img />
        <h2>AAAAAAAAA</h2>
        <p>10k views ; 2 days ago</p>
      </Link>
      <Link className="card">
        <img />
        <h2>AAAAAAAAA</h2>
        <p>10k views ; 2 days ago</p>
      </Link>
      <Link className="card">
        <img />
        <h2>AAAAAAAAA</h2>
        <p>10k views ; 2 days ago</p>
      </Link>
      <Link className="card">
        <img />
        <h2>AAAAAAAAA</h2>
        <p>10k views ; 2 days ago</p>
      </Link>
      <Link className="card">
        <img />
        <h2>AAAAAAAAA</h2>
        <p>10k views ; 2 days ago</p>
      </Link>
      <Link className="card">
        <img />
        <h2>AAAAAAAAA</h2>
        <p>10k views ; 2 days ago</p>
      </Link>
      <Link className="card">
        <img />
        <h2>AAAAAAAAA</h2>
        <p>10k views ; 2 days ago</p>
      </Link>
      <Link className="card">
        <img />
        <h2>AAAAAAAAA</h2>
        <p>10k views ; 2 days ago</p>
      </Link>
    </div>
  );
};

export default Content;
