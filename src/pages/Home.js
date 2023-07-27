import React from "react";
import H1HomeDrawMotion from "../components/homeComponents/h1HomeFadeFromLine";
import ImgHomeMotion from "../components/homeComponents/imgHomeMotion";
import PHomeMotion from "../components/homeComponents/pHomeMotion";

export default function Home() {
  return (
    <div>
      <ImgHomeMotion />
      <div className="pageDiv">
        <div className="textWrapper">
          <H1HomeDrawMotion />
          <PHomeMotion />
        </div>
      </div>
    </div>
  );
}
