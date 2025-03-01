import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../Features/Todo/TodoSlice";

const Todos = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  return (
    <div className="w-full max-w-xl bg-gray-800 p-6 rounded-2xl shadow-lg">
      {/* Title */}
      <h2 className="text-2xl font-semibold text-white text-center mb-4">
        Your Todos
      </h2>

      {todos.length === 0 ? (
        <p className="text-gray-400 text-center">No tasks yet. Add some!</p>
      ) : (
        <ul className="space-y-3">
          {todos.map(todo => (
            <li
              key={todo.id}
              className="flex justify-between items-center bg-zinc-700 px-5 py-3 rounded-lg shadow-md hover:scale-105 transition-transform"
            >
              {/* Todo Text */}
              <span className="text-white text-lg">{todo.text}</span>

              {/* Delete Button */}
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="p-2 rounded-full bg-red-500 hover:bg-red-600 transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="white"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Todos;
