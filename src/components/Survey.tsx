import "survey-core/defaultV2.min.css";
import { surveyConfig } from "@/surveyConfig";
import {
  Link,
  Container,
  Navbar,
  Text,
  Button,
  Spacer,
} from "@nextui-org/react";

const Survey = () => {
  const elements = surveyConfig.pages[0];
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

  const controls = (
    <>
      <Button
        auto
        bordered
        rounded
        size="lg"
        css={{ width: "158px", height: "64px" }}
      >
        Back
      </Button>
      <Spacer x={1} />
      <Button auto rounded size="lg" css={{ width: "158px", height: "64px" }}>
        Next
      </Button>
    </>
  );

  return (
    <>
      <Container display="flex" direction="column" alignItems="center">
        <Spacer y={2} />
        <Text h2 size={20}>
          {title}
        </Text>
        <Spacer y={2} />
        <div className="options">{options}</div>
      </Container>
      <Container display="flex" direction="row" justify="center">
        {controls}
      </Container>
    </>
  );
};
export default Survey;
