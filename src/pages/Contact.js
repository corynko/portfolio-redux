import React from "react";
import H1ContactDrawMotion from "../components/contactComponents/h1ContactFadeFromLine";
import ImgContactMotion from "../components/contactComponents/imgContactMotion";
import PContactMotion from "../components/contactComponents/pContactMotion";
import FormContactMotion from "../components/contactComponents/formContactMotion";

export default function Contact() {
  return (
    <div>
      <ImgContactMotion />
      <div className="pageDiv">
        <div className="textWrapper">
          <H1ContactDrawMotion />
          <PContactMotion />
          <FormContactMotion />
        </div>
      </div>
    </div>
  );
}
