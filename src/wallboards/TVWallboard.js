import React from "react";
import BuildStatus from "../BuildStatus";
import SlackComponent from "../SlackComponent";
import Github from "../githubCaller";
import { RightBox, LeftBox, ContentHorz } from "./WallboardStyles";

class DefaultWallboard extends React.Component {
  render() {
    return (
      <div>
        <ContentHorz>
          <LeftBox>
            {/* Left box content */}
            <BuildStatus />
          </LeftBox>
          <RightBox>
            {/* Right box content */}
            <SlackComponent />
            <Github />
          </RightBox>
        </ContentHorz>
      </div>
    );
  }
}

export default DefaultWallboard;
