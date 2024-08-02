//context creation ..
// provider (delivery)
// consumer (user who gets it ) remove and then insted use context hook 
// useContext hook 

import React , { useContext } from "react";

//step 3 lies here use context to consume 


//step 1
const AppContext = React.createContext();

//step 2
const AppProvider = ({ children }) => {

    return (
        <AppContext.Provider value={"anish mainali"}>
            {children}
        </AppContext.Provider>
    )
}

//custom hook creation 
 const useGlobalContext = () => {
    return useContext(AppContext);
 }

export { AppContext, AppProvider, useGlobalContext };
