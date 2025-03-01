import { configureStore } from "@reduxjs/toolkit"
import todoReducer from "../Features/Todo/TodoSlice" //we can name anything of the default export

export const store = configureStore({
    reducer: todoReducer
})