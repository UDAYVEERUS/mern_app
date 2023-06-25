import React from 'react'
import { useState } from 'react'
import { Link } from "react-router-dom"
import { connect } from 'react-redux'
import { addItem } from '../../actions'

const AddItem = ({
    addItem
}) => {
    const [state, setState] = useState({
        name: "",
        description: "",
        message: "",
    })

    const updateState = (event) => {
        const variable = event.target.name
        const value = event.target.value
        setState({ ...state, [variable]: value })
    }
    const addItemFunc = (e) => {
        e.preventDefault()
        addItem(state)
    }
    return (
        <div>
            <div id="defaultModal" tabIndex="-1" aria-hidden="true" className="fixed top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
                <div className="relative w-full md:h-auto flex justify-center items-center h-[100vh] ">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-200 w-[500px] ">
                        <form className='p-5 border'>
                            <div className="relative z-0 w-full mb-6 group">
                                <input type="text" onChange={(e) => { updateState(e) }} value={state.name} name="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer " placeholder=" " required />
                                <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Item Name</label>
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <input type="text" onChange={(e) => { updateState(e) }} value={state.description} name="description" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer " placeholder=" " required />
                                <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Item Description</label>
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <input type="text" onChange={(e) => { updateState(e) }} value={state.message} name="message" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer " placeholder=" " required />
                                <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Importance About Item</label>
                            </div>
                            <div className='flex justify-between'>
                                <div>
                                    <button type="button" onClick={addItemFunc} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Item</button>
                                </div>
                                <div className='mt-2'>
                                    <Link className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' rel="stylesheet" to="/items">Show all Items</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )

}

const mapStateToProps = (state) => {
    const { } = state.variables
    return {}
}

const mapActionsToProps = {
    addItem
}
export default connect(mapStateToProps, mapActionsToProps)(AddItem)