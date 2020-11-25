import React from "react";
import { Route } from "react-router-dom";

import DraftWriting from "./DraftWriting";
import TempStore from "./TempStore";
import Approval from "./Approval";

const DraftType = ({ match, history }) => {
  return (
    <Route
      render={() => {
        switch (match.params.draftType) {
          case "draftWriting":
            return <DraftWriting />;
          case "tempStore":
            return <TempStore />;
          case "approval":
            return <Approval />;
          default:
            history.push("/main");
        }
      }}
    />
  );
};

export default DraftType;
