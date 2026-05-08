import Header from "../component/Header"
import Footer from "../component/Footer"
import FormLogin from "../component/FormLogin"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { useSelector } from "react-redux"


const Login = () => {

    const token = useSelector(state => state.loginReducer.token)
    const navigate = useNavigate()

    useEffect(() => {
        if (token) {
            navigate("/account")
        }
    })
    return (
        <>
            <Header />

            <main className="main bg-dark">
                <section className="sign-in-content">
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <h1 className="loginStatut">Sign In</h1>

                    <FormLogin />

                </section>
            </main>

            <Footer />
        </>
    )
}

export default Login