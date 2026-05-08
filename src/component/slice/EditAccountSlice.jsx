import { createSlice } from "@reduxjs/toolkit";

const editAccountSlice = createSlice({
    name: "EDITACCOUNT",

    initialState: {
        userName: "",
        firstName: "",
        lastName: ""
    },

    reducers: {
        userName: (state, action) => {

            state.userName = action.payload
        },
        firstName: (state, action) => {

            state.firstName = action.payload
        },
        lastName: (state, action) => {

            state.lastName = action.payload
        }
    }

})

export const { userName, firstName, lastName } = editAccountSlice.actions
export default editAccountSlice.reducer