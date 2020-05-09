import React, {useReducer} from 'react'
import { DialogContext } from './dialogContext'
import { dialogReducer } from './dialogReducer'

export const DialogState = ({ children }) => {
    const initialState = {
        dialogs: []
    }
    const [state, dispatch] = useReducer(dialogReducer, initialState)

    return (
    <DialogContext.Provider 
        value={{
            dialogs: state.dialogs
        }}
    >   
        {children}
    </DialogContext.Provider>
    )
}