import React from "react";
import { Route } from "react-router-dom";
import CircuitForm from "./CircuitForm";

const CircuitType = ({ match, history }) => {
  return (
    <Route
      render={() => {
        switch (match.params.circuitType) {
          case "writing":
            return <CircuitForm />;
          default:
            history.push("/main");
        }
      }}
    />
  );
};

export default CircuitType;
