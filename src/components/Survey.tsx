import "survey-core/defaultV2.min.css";
import { Model } from "survey-core";
import { surveyConfig } from "@/surveyConfig";
import { Survey } from "survey-react-ui";

const MakeUpSurvey = () => {
  const survey = new Model(surveyConfig);
  return <Survey model={survey} />;
};
export default MakeUpSurvey;
