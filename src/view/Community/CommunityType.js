import React from "react";
import { Route } from "react-router-dom";
import Notice from "./Notice";

const CommunityType = ({ match, history }) => {
  return (
    <Route
      render={() => {
        switch (match.params.communityType) {
          case "notice":
            return <Notice />;

          default:
            history.push("/main");
        }
      }}
    />
  );
};

export default CommunityType;
