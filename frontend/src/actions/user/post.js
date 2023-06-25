import { createToast } from "../toast";
import { CHANGE_VARIABLE } from "../type";
import { base_url } from "../variable";

export const userRegistration = (data) => {
    return (dispatch) => {
        userRegistrationHelper({ data, dispatch })
    }
}
const userRegistrationHelper = async ({ data, dispatch }) => {
    const headers = {
        "Content-Type": "application/json"
    }
    const body = JSON.stringify({
        name: data.name,
        email: data.email,
        password: data.password
    })
    const config = {
        headers,
        body,
        method: "POST"
    }
    const url = base_url + "/user/registration"
    try {
        const response = await fetch(url, config)
        console.log(response, "here", 29)
        const response_json = await response.json()
        console.log(response_json, "here", 30)
        if (response_json.status === 201) {
            createToast(response_json.message,"success")
            console.log(response_json.data)
        }
        else{
            createToast(response_json.message , "error")
        }
    } catch (err) {
        console.log(err)
    }
}