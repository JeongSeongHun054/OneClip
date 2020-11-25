import React from "react";
import { Route } from "react-router-dom";
import GetMail from "./GetMail";
import SendMail from "./SendMail";
import ImportantMail from "./ImportantMail";
import TrashMail from "./TrashMail";
import TempMail from "./TempMail";

const MailType = ({ match, history }) => {
  return (
    <Route
      render={() => {
        switch (match.params.mailType) {
          case "getMail":
            return <GetMail />;
          case "sendMail":
            return <SendMail />;
          case "importantMail":
            return <ImportantMail />;
          case "tempMail":
            return <TempMail />;
          case "trashMail":
            return <TrashMail />;
          default:
            history.push("/main");
        }
      }}
    />
  );
};

export default MailType;
