import { createSlice } from "@reduxjs/toolkit"


const loginSlice = createSlice({
    name: "LOGIN",

    initialState: {
        token: localStorage.getItem("token") || sessionStorage.getItem("token") || null
    },

    reducers: {
        login: (state, action) => {
            const { response, remember } = action.payload

            if (remember) {
                window.localStorage.setItem("token", response)
                window.sessionStorage.removeItem("token")
            } else {
                window.sessionStorage.setItem("token", response)
                window.localStorage.removeItem("token")
            }

            state.token = response
        },

        logout: (state) => {
            state.token = null
            window.localStorage.removeItem("token")
            window.sessionStorage.removeItem("token")
        }
    }



})

export const { login, logout } = loginSlice.actions
export default loginSlice.reducer


