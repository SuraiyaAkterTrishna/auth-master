import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-primary text-primary-content">
        <Link className="btn btn-ghost normal-case text-xl text-white">Auth Master</Link>
        <Link className="btn btn-ghost normal-case text-xl text-white" to="/">Home</Link>
        <Link className="btn btn-ghost normal-case text-xl text-white" to="/login">Login</Link>
        <Link className="btn btn-ghost normal-case text-xl text-white" to="/register">Register</Link>
      </div>
    </div>
  );
};

export default Header;
