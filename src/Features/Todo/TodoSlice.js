import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [
        // {
        //     id: 1,
        //     text: "hello world"
        // }
    ]
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addtodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((elem) => elem.id != action.payload)
        }
    }
})

export const { addtodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;