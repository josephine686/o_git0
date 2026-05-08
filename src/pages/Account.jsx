import Header from "../component/Header"
import Footer from "../component/Footer"
import BankSold from "../component/BankSold"
import EditAccount from "../component/EditAccount"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"


const Account = () => {

    const token = useSelector(state => state.loginReducer.token)
    const navigate = useNavigate()

    useEffect(() => {
        if (!token) {
            navigate("/login")
        }
    }, [token])

    return (
        <>
            <Header />

            <main className="main bg-dark">

                <EditAccount />

                <h2 className="sr-only">Accounts</h2>

                <BankSold />

            </main>

            <Footer />
        </>
    )


}

export default Account