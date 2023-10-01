const initialState = {
    admin: null,
    token: localStorage.getItem('usertoken') || "",
    isLogged: false
}

export const loginReducer = (state = initialState, action) => {
    switch(action.type){
        case "LOGIN_USER":
            localStorage.setItem('usertoken', action.payload.token)
            return ({
                admin: action.payload.user,
                token: action.payload.token,
                isLogged: true
            })
        default:
            return state
    }
}