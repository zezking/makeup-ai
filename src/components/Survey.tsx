import "survey-core/defaultV2.min.css";
import { surveyConfig } from "@/surveyConfig";
import { Container, Text, Button, Spacer } from "@nextui-org/react";
import { useState } from "react";

const Survey = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const limit = surveyConfig.pages.length - 1;
  const elements = surveyConfig.pages[currentPage];
  const options = elements.choices.map((choice, index) => {
    if (elements.type === "radiogroup") {
      return (
        <>
          <Button
            color={"primary"}
            css={{ width: "332px", height: "48px" }}
            auto
            rounded
            ghost
            key={index}
          >
            {choice}
          </Button>
          <Spacer y={0.5} />
        </>
      );
    }
  });
  const title = elements.title;

  const handleNext = () => {
    if (currentPage === limit) {
      return;
    }
    setCurrentPage((prevPage) => {
      return prevPage + 1;
    });
  };

  const handleBack = () => {
    if (currentPage === 0) {
      return;
    }
    setCurrentPage((prevPage) => {
      return prevPage - 1;
    });
  };

  const controls = (
    <>
      <Button
        auto
        bordered
        rounded
        size="lg"
        css={{ width: "158px", height: "64px" }}
        onClick={handleBack}
      >
        Back
      </Button>
      <Spacer x={1} />
      <Button
        auto
        rounded
        size="lg"
        css={{ width: "158px", height: "64px" }}
        onClick={handleNext}
      >
        {currentPage === limit ? "Complete" : "Next"}
      </Button>
    </>
  );

  return (
    <>
      <Container display="flex" direction="column" alignItems="center">
        <Spacer y={1} />
        <Text h2 size={20}>
          {title}
        </Text>
        <Spacer y={1} />
        <div className="options">{options}</div>
      </Container>
      <Spacer y={1} />
      <Container display="flex" direction="row" justify="center">
        {controls}
      </Container>
    </>
  );
};
export default Survey;
