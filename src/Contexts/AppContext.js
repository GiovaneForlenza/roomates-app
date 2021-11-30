import React, { useState, createContext } from "react";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const [herokuURL, setHerokuURL] = useState(
    "https://roomates-app.herokuapp.com/"
  );

  return (
    <AppContext.Provider values={{ herokuURL }}>
      {props.children}
    </AppContext.Provider>
  );
};
