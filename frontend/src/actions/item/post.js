import { createToast } from "../toast";
import { CHANGE_VARIABLE } from "../type";
import { base_url } from "../variable";

export const addItem = (data) => {
    return (dispatch) => {
        addItemHelper({ data, dispatch })
    }
}
const addItemHelper = async ({ data, dispatch }) => {
    const token = await localStorage.getItem("token")
    const headers = {
        "Content-Type": "application/json",
        "Authorization": `${token}`
    }
    const body = JSON.stringify({
        name: data.name,
        description: data.description,
        message: data.message
    })
    const config = {
        headers,
        body,
        method: "POST"
    }
    const url = base_url + "/items"
    try {
        const response = await fetch(url, config)
        const response_json = await response.json()
        if (response_json) {
            console.log(response_json)
           createToast(response_json.message,"success")
        }
        else{
        createToast(response_json.message, "error")
        }
    } catch (err) {
        console.log(err)
    }
}