import * as React from "react";

import { Badge, BadgeContainer } from "@progress/kendo-react-indicators";
import { SvgIcon } from "@progress/kendo-react-common";
import { bellIcon} from "@progress/kendo-svg-icons";

const Test = () => {
  return (
    <div className="example">
      <div className="example-wrap" style={{ textAlign: "center" }}>

        <div className="row">
          <div className="col-4">
            <BadgeContainer>
              <SvgIcon icon={bellIcon} />
              <Badge themeColor="info">99+</Badge>
            </BadgeContainer>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Test;
