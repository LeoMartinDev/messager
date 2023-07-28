import React from "react";

import { Application } from "./lib";

export const AppContext = React.createContext<Application | null>(null);

export function useApplication() {
  const application = React.useContext(AppContext);

  if (application === null) {
    throw new Error("Application is null");
  }

  return application;
}
