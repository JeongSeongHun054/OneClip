import { combineReducers } from "redux";
import draftModules from "./draftModules";
import tempModules from "./tempModules";
import approvalModules from "./approvalModules";
import receptModules from "./receptModules";
import pileModules from "./pileModules";
import circuitModules from "./circuitModules";

const rootReducers = combineReducers({
  draftModules,
  tempModules,
  approvalModules,
  receptModules,
  pileModules,
  circuitModules,
});

export default rootReducers;
