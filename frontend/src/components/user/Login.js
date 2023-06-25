import React, { useState } from 'react'
import { connect } from 'react-redux'
import { userLogin } from '../../actions'
import { useNavigate } from 'react-router-dom'


const Login = ({ userLogin }) => {
    const navigate = useNavigate()
    const [state, setState] = useState({
        email: "",
        password: ""
    })
    const updateState = (event) => {
        const variable = event.target.name
        const value = event.target.value
        setState({ ...state, [variable]: value })
    }
    
    const userLoginFunc = (event) => {
        event.preventDefault()
        userLogin(state)
        setTimeout(()=>{
            navigate("/additem", {replace:true})
        },2000)
       
    }
    
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "full", height: "100vh" }}>
            <form className="mx-auto container flex justify-center bg-white">
                <div className="w-96 p-5 border border-gray-400 shadow-lg mt-5">
                    <div className="mb-4">
                        <label htmlFor="email" className=" text-start block text-gray-700 font-bold mb-2">Email</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required type="text" onChange={(e) => { updateState(e) }} value={state.email} name="email" placeholder="Email" />

                        <div className="mb-4">
                            <label htmlFor="password" className=" text-start block text-gray-700 font-bold mb-2">Password</label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required type="text" onChange={(e) => { updateState(e) }} value={state.password} name="password" placeholder="password" />
                        </div>
                    </div>
                    <div>
                        <button type="submit" style={{ background: "blue", text: "center", width:"60px", color: "white", padding: "6px", display: "flex", justifyContent: "center", alignItems: "center", margin: "auto" }} onClick={userLoginFunc}>Login</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
const mapStateToProps = (state) => {
    const { } = state.variables
    return {}
}
const mapActionToProps = {
    userLogin
}

export default connect(mapStateToProps, mapActionToProps)(Login)