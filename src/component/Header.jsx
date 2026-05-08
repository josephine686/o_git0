import argentBankLogo from "../assets/argentBankLogo.webp"
import { NavLink, useNavigate } from "react-router-dom"
import { logout } from "./slice/FormLoginSlice"
import { useDispatch, useSelector } from "react-redux"

const Header = () => {

    const token = useSelector(state => state.loginReducer.token)
    const uName = useSelector(state => state.editAccountReducer.userName)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const reset = (e) => {
        e.preventDefault()
        dispatch(logout())
        console.log("token:", localStorage.getItem("token"))
        navigate("/")
    }

    return (
        <nav className="main-nav">
            <a className="main-nav-logo" href="/">
                <img
                    className="main-nav-logo-image"
                    src={argentBankLogo}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </a>
            {!token ? (
                <div>
                    <NavLink className="main-nav-item" to="/login">
                        <i className="fa fa-user-circle"></i>
                        Sign In
                    </NavLink>
                </div>) :
                (<div className="header-log">
                    
                    {uName && <p>{`${uName}`}</p>}
                    <NavLink onClick={(e) => {

                        reset(e)
                    }}
                        className="main-nav-item">
                        <i className="fa fa-user-circle"></i>
                        Sign Out
                    </NavLink>
                </div>)}
        </nav>
    )
}

export default Header