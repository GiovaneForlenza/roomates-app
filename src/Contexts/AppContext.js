import React, { useState, createContext } from "react";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const [herokuURL, setHerokuURL] = useState(
    // "https://roomates-app.herokuapp.com"
    "http://localhost:3001"
  );

  return (
    <AppContext.Provider value={{ herokuURL }}>
      {props.children}
    </AppContext.Provider>
  );
};
