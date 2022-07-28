import React from "react";
import VideoHome from "../images/videoHome.mp4";
import Goals from "../Goals";
import Top5 from "../Top5";
import About from "../About";
import Achievements from "../Achievements";
import Fullpage, {
  FullPageSections,
  FullpageSection,
} from "@ap.cx/react-fullpage";

export default function Home() {
  return (
    <div>
      <div className="homePage">
        <Fullpage>
          <FullPageSections>
            <FullpageSection>
              <div className="containerVideo">
                <video
                  className="videoHome"
                  preload="auto"
                  autoplay="auto"
                  playsinline
                  loop
                  muted
                >
                  <source src={VideoHome} type="video/mp4" />
                </video>
                <div className="overlay">
                  <h1>
                    نحن عازمون بطموحنا الكبير، وخبراتنا الواسعة، وإبداعنا
                    اللامحدود على أن نصنع الفرق. مرحباً بكم في السعودية الخضراء
                  </h1>
                </div>
              </div>
            </FullpageSection>
          </FullPageSections>
        </Fullpage>
      </div>
      <div className="homeAnOtherBackGround">
        <About />

        <Goals id="goals" />

        <Achievements />
        <Top5 />
      </div>
    </div>
  );
}
