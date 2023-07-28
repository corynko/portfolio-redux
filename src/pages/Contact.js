import React from "react";
import H1ContactDrawMotion from "../components/contactComponents/h1ContactFadeFromLine";
import ImgContactMotion from "../components/contactComponents/imgContactMotion";
import PContactMotion from "../components/contactComponents/pContactMotion";

export default function Contact() {
  return (
    <div>
      <ImgContactMotion />
      <div className="pageDiv">
        <div className="textWrapper">
          <H1ContactDrawMotion />
          <PContactMotion />
        </div>
      </div>
    </div>
  );
}
