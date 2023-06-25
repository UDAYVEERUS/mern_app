import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { userRegistration } from '../../actions/user'
const Registration = ({ userRegistration }) => {
    const navigate = useNavigate()
    const [state, setState] = useState({
        name: "",
        email: "",
        password: ""
    })
    const updateState = (e) => {
        const variable = e.target.name
        const value = e.target.value
        setState({ ...state, [variable]: value })
    }
    const userRegisterFunction = (e) => {
        e.preventDefault()
        userRegistration(state)
        setTimeout(()=>{
            navigate("/login", {replace:true})
        },[2000])
        
    }
    return (
        <div className="mx-auto container flex justify-center shadow-xl items-center" style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "full", height: "100vh" }}>
            <form >
                <div className="w-96 p-5  shadow-lg">
                    <h1 className="text-2xl flex justify-center items-center">User Registration</h1><hr/>
                    <div className="mb-4">
                        <label htmlFor="name" className=" text-start block text-gray-700 font-bold mb-2"> Name </label>
                        <input type="text" name="name" placeholder="Enter your name" onChange={(e) => { updateState(e) }} value={state.name}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className=" text-start block text-gray-700 font-bold mb-2">Email</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required type="text" onChange={(e) => { updateState(e) }} value={state.email} name="email" placeholder="Email" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className=" text-start block text-gray-700 font-bold mb-2">Password</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required type="text" onChange={(e) => { updateState(e) }} value={state.password} name="password" placeholder="password" />
                    </div>
                    <div className="mt-2 flex justify-center items-center">
                        <button className="text-white bg-blue-800 w-24 shadow-lg h-10 hover:bg-blue-400" type="submit" onClick={(event) => { userRegisterFunction(event) }}>Register</button>
                    </div>
                    <div className="mt-4 flex justify-center items-center">
                        <Link to={"/login"} className="cursor-pointer text-blue-900">I have an already account ? Login in</Link>
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
    userRegistration
}
export default connect(mapStateToProps, mapActionToProps)(Registration)