import { createToast } from "../toast";
import { CHANGE_VARIABLE } from "../type";
import { base_url } from "../variable";

export const userLogin = (data) => {
    return (dispatch) => {
        userLoginHelper({ data, dispatch })
    }
}
const userLoginHelper = async ({ data, dispatch }) => {

    const headers = {
        "Content-Type": "application/json"
    }
    console.log("login page")
    const body = JSON.stringify({
        email: data.email,
        password: data.password
    })

    const config = {
        headers,
        body,
        method: 'POST'
    }
    const url = base_url + "/user/login"
    try {
        const response = await fetch(url, config)
        const response_json = await response.json()
        console.log(response_json, "here31")
        if (response_json) {
            localStorage.setItem("token", response_json.token)

          createToast(response_json.message, "success")
        }
        else {
            createToast(response_json.message, "error")
            dispatch({

                type: CHANGE_VARIABLE,
                payload: {

                    key: "notification_flag",
                    value: true

                }

            })
            dispatch({

                type: CHANGE_VARIABLE,
                payload: {

                    key: "notification",
                    value: response_json.message

                }

            })
            dispatch({

                type: CHANGE_VARIABLE,
                payload: {

                    key: "notification_flag",
                    value: false

                }

            })

        }

    } catch (Error) {
        console.log(Error)
    }
}