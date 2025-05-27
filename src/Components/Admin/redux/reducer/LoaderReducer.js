
const initialState={
    load:false,
    
   
};

export default function LoaderReducer(state=initialState,action){
    switch(action.type){
        case "SHOW":
            return{load:true};
        case "HIDE":
            return{load:false};
        default:
           return state;
    }
}