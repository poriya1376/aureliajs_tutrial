import React from 'react'
const CTX=React.createContext();

function reducer(state,action){
    const {from ,msg,topic}=action.payload
    switch(action.type){
        case 'RECEIVE_MESSAGE':
            return{
                ...state,
                [topic]:[
                    ...state[topic],
            
                    from,
                    msg

                ]
                    
            }
            default:
                return state
    }

}

export default function Sotre(props){

        const reducerHook=React.useReducer(reducer,initState);
        return(
            <CTX.Provider value={}>
                {props.children}
            </CTX.Provider>
        )




}