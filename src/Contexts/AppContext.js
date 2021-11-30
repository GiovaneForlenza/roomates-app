import React, { useState, createContext } from "react";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const HEROKU_URL = "https://roomates-app.herokuapp.com/";

  return (
    <AppContext.Provider values={{ HEROKU_URL }}>
      {props.children}
    </AppContext.Provider>
  );
};
