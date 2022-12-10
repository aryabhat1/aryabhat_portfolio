import React from "react"
import { configureStore } from "@reduxjs/toolkit"
import { loginReducer, updateReducer, userReducer } from "./reducers/user"

const store = configureStore({
    reducer: {
        user: userReducer,
        login: loginReducer,
        update: updateReducer,
    },
})

// const Store = () => {
//     return <div>Store</div>
// }

export default store
