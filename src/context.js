//context creation ..
// provider (delivery)
// consumer (user who gets it ) remove and then insted use context hook 
// useContext hook 

import React , { useContext, useReducer, useEffect } from "react";

import reducer from './reducer';


//step 3 lies here use context to consume 

let API = "https://hn.algolia.com/api/v1/search?";

const initialState = {
     isLoading : true,
    query: "HTML",
    nbPages: 0,
    page: 0,
    hits: [],
}


//step 1
const AppContext = React.createContext();

//step 2
const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

   


    const fetchApiData = async (url) => {


        dispatch({ type: "SET_LOADING"});
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            dispatch({ 
                type:"GET_STORIES",
                payload: {
                    hits: data.hits,
                    nbPgaes: data.nbPages,
                }

            });
            // isLoading = false;
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        fetchApiData(`${API}query=${state.query}&page=${state.page} `);
    }, );

    return (
        <AppContext.Provider value={{...state}}>
            {children}
        </AppContext.Provider>
    )
}

//custom hook creation 
 const useGlobalContext = () => {
    return useContext(AppContext);
 }

export { AppContext, AppProvider, useGlobalContext };
