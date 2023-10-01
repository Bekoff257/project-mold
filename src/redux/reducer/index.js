import { combineReducers } from "redux";
import { langReducer } from "./langReducer";
import { cartReducer } from "./cartReducer";
import { loginReducer } from "./loginReducer";

const rootReducers = combineReducers({
    language: langReducer,
    carts: cartReducer,
    login: loginReducer
})

export { rootReducers }