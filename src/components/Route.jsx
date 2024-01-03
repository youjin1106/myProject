import { Link } from "react-router-dom";

const RouteTest = () => {
  return (
    <header>
      <div>
        <Link to={"/"}>To do list</Link>
        <Link to={"/about"}>About</Link>
      </div>
    </header>
  );
};

export default RouteTest;
