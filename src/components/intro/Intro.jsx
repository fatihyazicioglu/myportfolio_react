import "./intro.scss";
import { ExpandMore } from "@material-ui/icons";

function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="/man.jpg" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I"m</h2>
          <h1>Fatih Yazicioglu</h1>
          <h3>
            Frontend Developer <span></span>
          </h3>
          <ExpandMore className="downIcon" />
        </div>

        {/* <a href="#portfolio">
        <img src="/downarrow.webp" alt="" /></a> */}
      </div>
    </div>
  );
}

export default Intro;
