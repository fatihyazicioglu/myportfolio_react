import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";

function Topbar({menuOpen, setMenuOpen}) {
  return (
    <div className={"topbar " + (menuOpen && "active")}  id="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            F.Y.
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+49 163 517 42 84</span>
          </div>

          <div className="itemContainer">
            <Mail className="icon" />
            <span>fy134388@gmail.com</span>
          </div>
        </div>
        <h1>Hello</h1>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
