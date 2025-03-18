import React, { useState } from "react";
import "@progress/kendo-theme-default/dist/all.css";
import { Card, CardBody, CardTitle } from "@progress/kendo-react-layout";
import { Button } from "@progress/kendo-react-buttons";
import { Slide } from "@progress/kendo-react-animation";

const Test = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="card-container">
      <Card
        className="k-card"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardBody>
          <CardTitle>Card Title</CardTitle>
          <p>Hover to reveal the button.</p>
        </CardBody>

        {/* Kendo Fade Animation */}
        <Slide
          in={isHovered}
          transitionEnterDuration={300}
          transitionExitDuration={200}
          direction="up"
        >
          {isHovered && <Button className="hidden-button">Click Me</Button>}
        </Slide>
      </Card>
    </div>
  );
};

export default Test;
