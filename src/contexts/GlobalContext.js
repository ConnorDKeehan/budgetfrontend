import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [apiKey, setApiKey] = useState("!J52Cl%39rPn23PE");
    const [hasApiKeyBeenEntered, setHasApiKeyBeenEntered] = useState(false);

    return (
        <GlobalContext.Provider value={{ apiKey, setApiKey, hasApiKeyBeenEntered, setHasApiKeyBeenEntered }}>
            {children}
        </GlobalContext.Provider>
    );
};