import { useState } from "react";
import "./App.css";
import AddTodo from "./Components/AddTodo";
import Todos from "./Components/Todos";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex justify-center items-center py-10 px-5">
      <div className="w-full max-w-2xl bg-gray-800 shadow-xl rounded-2xl p-6 flex flex-col items-center space-y-6">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
          Todo List
        </h1>

        {/* Centered AddTodo */}
        <div className="w-full flex justify-center">
          <AddTodo />
        </div>

        {/* Todo Items List - Prevent Shrinking & Align Well */}
        <div className="w-full flex flex-col items-center space-y-4">
          <Todos />
        </div>
      </div>
    </div>
  );
}

export default App;
