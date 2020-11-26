import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./auth/Login";
import FindId from "./auth/FindId";

import Main from "./Main";
import Recept from "./Recept";
import Pile from "./Pile";
import Circuit from "./Circuit";
import Calendar from "./Calendar";
import Setting from "./Setting";
import DraftType from "./Draft/DraftType";
import MailType from "./Mail/MailType";
import CommunityType from "./Community/CommunityType";
import DraftForm from "./Draft/DraftForm";
import CircuitType from "./Circuit/CircuitType";
import DraftResult from "./Draft/DraftResult";
import MailWriting from "./Mail/MailWriting";

const App = () => {
  return (
    <>
      <Switch>
        <Route path={["/", "/login"]} exact={true} component={Login} />
        <Route path="/find" component={FindId} />
        <Route path="/main" component={Main} />
        <Route path="/draft" exact={true} />
        <Route path="/draft/:draftType" exact={true} component={DraftType} />
        <Route
          path="/draft/draftWriting/writing"
          exact={true}
          component={DraftForm}
        />
        <Route path="/draft/draftWriting/writing/:id" component={DraftResult} />
        <Route path="/recept" component={Recept} />
        <Route path="/pile" component={Pile} />
        <Route path="/circuit" exact={true} component={Circuit} />
        <Route
          path="/circuit/:circuitType"
          exact={true}
          component={CircuitType}
        />
        <Route path="/mail" exact={true} />
        <Route path="/mail/:mailType" exact={true} component={MailType} />
        <Route
          path="/mail/getMail/mailWriting"
          exact={true}
          component={MailWriting}
        />
        <Route path="/community" exact={true} />
        <Route path="/community/:communityType" component={CommunityType} />
        <Route path="/calendar" component={Calendar} />
        <Route path="/setting" component={Setting} />
      </Switch>
    </>
  );
};

export default App;
