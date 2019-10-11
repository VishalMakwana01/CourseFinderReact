
export const login = body => async dispatch => {
    console.log(" login action call");
    dispatch({
        type: "LOADING"
    });
    console.log("body" + JSON.stringify(body));
    fetch("/login/", {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(res => res.json())
        .then(response => {
            dispatch({
                type: "LOGIN_RESP",
                payload: response
            })
        })
        .catch(e => {
            dispatch({
                type: "SERVER_ERROR"
            });
        });
};