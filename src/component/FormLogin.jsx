import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "./slice/FormLoginSlice"

const FormLogin = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorLogin, setErrorLogin] = useState(null)
    const [remember, setRemember] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const token = useSelector(state=> state.loginReducer.token)


    const handleSubmit = async (e) => {
        e.preventDefault()

        console.log("submit");

        try {
            const request = await axios.post("http://localhost:3001/api/v1/user/login", {
                email,
                password
            })
            console.log("api OK");

            const response = request.data.body.token

            console.log(response);

            dispatch(login({response, remember}))

        } catch (error) {
            setErrorLogin(true)
        }

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                {errorLogin && <p>Connexion impossible</p>}
                <div className="input-wrapper">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" onChange={(e) => {
                        setEmail(e.target.value)
                        console.log("username: ", e.target.value);
                    }} />
                </div>

                <div className="input-wrapper">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={(e) => {
                        setPassword(e.target.value)
                        console.log("passwd : ", e.target.value);
                    }} />
                </div>

                <div className="input-remember">
                    <input type="checkbox" id="remember-me" onChange={(e) => {
                        setRemember(e.target.checked)
                        console.log("stock token : ",e.target.checked);
                    }} />
                    <label htmlFor="remember-me">Remember me</label>
                </div>

                <button className="sign-in-button" type="submit">Sign In</button>

            </form>
        </>
    )
}



export default FormLogin