const initState = {
    courses: []
}

const rootreducer = (state = initState, action) => {
    if (action.type == "LOGIN_RESP") {
        return {
            ...state,
            auth: action.payload
        }
    }
    return state;
}
export default rootreducer;