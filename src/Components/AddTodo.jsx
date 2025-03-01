import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addtodo } from "../Features/Todo/TodoSlice";

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = e => {
    e.preventDefault();
    if (!input.trim()) return;
    dispatch(addtodo(input.trim()));
    setInput("");
  };

  return (
    <form
      onSubmit={addTodoHandler}
      className="flex items-center justify-center w-full max-w-lg bg-gray-900 p-4 rounded-xl shadow-md space-x-3"
    >
      {/* Input Field */}
      <input
        type="text"
        className="flex-1 bg-gray-800 rounded-lg border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-2 px-4 transition-all duration-200 ease-in-out"
        placeholder="Enter a todo..."
        value={input}
        onChange={e => setInput(e.target.value)}
      />

      {/* Add Button */}
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 rounded-lg font-medium shadow-lg hover:bg-indigo-600 transition-all"
      >
        Add
      </button>
    </form>
  );
};

export default AddTodo;
