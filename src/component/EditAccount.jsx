import { useState, useEffect } from "react"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { userName, firstName, lastName } from "./slice/EditAccountSlice"
import { useNavigate } from "react-router-dom"


const EditAccount = () => {

    const [menu, setMenu] = useState(false)
    const [error, setError] = useState(false)
    const dispatch = useDispatch()
    const [tempUserName, setTempUserName] = useState("")
    const token = useSelector(state => state.loginReducer.token)
    const fName = useSelector(state => state.editAccountReducer.firstName)
    const lName = useSelector(state => state.editAccountReducer.lastName)
    const uName = useSelector(state => state.editAccountReducer.userName)

    const userData = async () => {
        try {
            const request = await axios.get("http://localhost:3001/api/v1/user/profile",
                { headers: { Authorization: `Bearer ${token}` } }
            )

            console.log("UserName: ", request.data.body.userName)
            console.log("Name: ", request.data.body.firstName, request.data.body.lastName)

            dispatch(firstName(request.data.body.firstName))
            dispatch(lastName(request.data.body.lastName))
            dispatch(userName(request.data.body.userName))


        } catch (error) {
            console.error(error)
        }
    }

    const editPost = async (e) => {
        e.preventDefault()

        try {
            const request = await axios.put("http://localhost:3001/api/v1/user/profile",
                { userName: tempUserName },
                { headers: { Authorization: `Bearer ${token}` } }
            )
            const reponse = request.data

            console.log(reponse.status)
            console.log(request.data.message)

            dispatch(userName(tempUserName))
            setError(false)

            alert("Votre username a bien été mis a jour")

        } catch {
            setError(true)
        }
    }

    useEffect(() => {
        userData()
    }, [token])

    return (
        <>
            <div className="header">
                <h1>Welcome back<br />{`${fName} ${lName}`}</h1>
                {menu ? (
                    <>
                        <div className="input-wrapperSettingUserName">
                            <p>Settings : </p>

                            <label htmlFor="userName">UserName :</label>
                            <input className="inputSettingUserName" type="text" name="userName" id="userName" placeholder={`${uName}`} onChange={(e) => {
                                setTempUserName(e.target.value)
                                console.log("userName: ", e.target.value)
                            }} />

                            <label htmlFor="firstName">First name :</label>
                            <input className="inputSettingUserName" type="text" name="firstName" id="firstName" placeholder={`${fName}`}disabled/>

                            <label htmlFor="lastName">Last name :</label>
                            <input className="inputSettingUserName" type="text" name="lastName" id="lastName" placeholder={`${lName}`} disabled/>

                        </div>
                        <button className="edit-button-red" onClick={() => { setMenu(false) }}>Cancel</button>
                        <button className="edit-button" onClick={async (e) => {
                            await editPost(e)
                            setMenu(false)
                        }}>Confirm</button>
                    </>
                ) : (
                    <button className="edit-button" onClick={() => { setMenu(true) }}>Edit Name</button>
                )}
                {error && <p>Error</p>}
            </div>
        </>
    )
}

export default EditAccount