import React, { useState, createContext } from "react";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const [herokuURL, setHerokuURL] = useState(
    "https://cors-anywhere.herokuapp.com/https://roomates-app.herokuapp.com"
  );

  return (
    <AppContext.Provider value={{ herokuURL }}>
      {props.children}
    </AppContext.Provider>
  );
};
