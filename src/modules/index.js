import { combineReducers } from "redux";
import draftModules from "./draftModules";
import tempModules from "./tempModules";
import approvalModules from "./approvalModules";
import receptModules from "./receptModules";
import pileModules from "./pileModules";
import circuitModules from "./circuitModules";
import getMailModules from "./getMailModules";
import sendMailModules from "./sendMailModules";
import importantMailModules from "./importantMailModules";
import tempMailModules from "./tempMailModules";
import trashMailModules from "./trashMailModules";
import noticeModules from "./noticeModules";

const rootReducers = combineReducers({
  draftModules,
  tempModules,
  approvalModules,
  receptModules,
  pileModules,
  circuitModules,
  getMailModules,
  sendMailModules,
  importantMailModules,
  tempMailModules,
  trashMailModules,
  noticeModules,
});

export default rootReducers;
