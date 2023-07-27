import React from "react";
import H1HomeDrawMotion from "../components/h1HomeFadeFromLine";
import ImgHomeMotion from "../components/imgHomeMotion";
import PHomeMotion from "../components/pHomeMotion";

export default function Home() {
  return (
    <div>
      <div className="pageDiv">
        <H1HomeDrawMotion />
        <ImgHomeMotion />
        <PHomeMotion />
      </div>
    </div>
  );
}
