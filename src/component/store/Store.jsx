import {configureStore} from "@reduxjs/toolkit"
import loginReducer from "../slice/FormLoginSlice"
import editAccountReducer from "../slice/EditAccountSlice"


export const store = configureStore({

    reducer:{ loginReducer,
              editAccountReducer,}
}) 

export default store