import H1ProjectDrawMotion from "../components/projectComponents/h1ProjectFadeFromLine";
import ImgProjectMotion from "../components/projectComponents/imgProjectMotion";
import PProjectMotion from "../components/projectComponents/pProjectMotion";

export default function Projects() {
  return (
    <div>
      <ImgProjectMotion />
      <div className="pageDiv">
        <div className="textWrapper">
          <H1ProjectDrawMotion />
          <PProjectMotion />
        </div>
      </div>
    </div>
  );
}
