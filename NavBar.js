import {Link} from "react-router-dom";

const NavBar= () => {
  return (
    <nav className="navbar">
      <div className="navStyle">
        <h3>Culture Fair</h3>
        <div className="navLinks">
          <Link to="/">Home</Link>
          <Link to="/ex"> Exibition Hall</Link>
          <Link to="/tr"> Trivia</Link>
        </div>
      </div>
    </nav>
  );
}
 
export default NavBar