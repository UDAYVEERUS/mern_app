import { createToast } from "../toast";
import { CHANGE_VARIABLE } from "../type";
import { base_url } from "../variable";

export const getItems = (data) => {
    return (dispatch) => {
        getItemsHelper({ data, dispatch })
    }
}
const getItemsHelper = async ({ data, dispatch }) => {
    const token = await localStorage.getItem("token")
    const headers = {
        "Content-Type": "application/json",
        "Authorization": `${token}`
    }
    const config = {
        headers,
        method: "GET"
    }
    const url = base_url + "/items"
    try {
        const response = await fetch(url, config)
        const response_json = await response.json()
        if (response_json) {
            console.log(response_json)
            dispatch({
                type: CHANGE_VARIABLE,
                payload: {
                    key: "items_array",
                    value: response_json.data
                }
            })
            createToast(response_json.message, "success")
        }
        else{
            createToast(response_json.message, "error")
        }
    } catch (err) {
        console.log(err)
    }
}