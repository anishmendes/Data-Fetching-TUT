const reducer = (state, action) => {
 
    switch (action.type) {
        case "GET_STORIES":
            return {
                ...state,
                hits: action.payload.hits,
                nbpages: action.paylaod.nbPages,

            }
    }



  return state;
}

export default reducer;