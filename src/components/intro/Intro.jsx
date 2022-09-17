import "./intro.scss";
import { ExpandMore } from "@material-ui/icons";
import { init } from "ityped";
import { useEffect, useRef} from "react";

function Intro() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      strings: ["Developer", "Freelancer", "Designer"],
    });
  }, []);

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
            Backend-Frontend <span ref={textRef}></span>
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
