import { Link } from "react-router-dom";
import { ModeToggle } from "../mode-toggle";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center max-w-7xl mx-auto ">
      <div>
        <h1 className="text-4xl font-bold">Redux</h1>
      </div>
      <div className="space-x-10">
        <Link to="/">Tasks</Link>
        <Link to="/user">Users</Link>
      </div>
      <div>
        <ModeToggle></ModeToggle>
      </div>
    </div>
  );
};

export default Navbar;
