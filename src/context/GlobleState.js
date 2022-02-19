import React , {createContext,useReducer} from 'react'
import AppReducer from './AppReducer'

     const initalState={
        transactions:[

            { id: 1, text: 'Flower', amount: -20 },
             { id: 2, text: 'Salary', amount: 300 },
             { id: 3, text: 'Book', amount: -10 },
             { id: 4, text: 'Camera', amount: 150 }
    
         ]
     }
    
export const  GlobleContext = createContext(initalState)
export const GlobleProvider = ({children})=>{
    const [state,dispatch] = useReducer(AppReducer,initalState)
    return (
        <GlobleContext.Provider value={{transactions:state.transactions}} >
            {children}
        </GlobleContext.Provider>
      )
}
 

