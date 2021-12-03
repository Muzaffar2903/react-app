import React from "react";
import "./appHeader.css";

export default function AppHeader({ countDoneTodos, countTodos }) {
  return (
    <div className="app-header">
      <h1>Todo List</h1>
      <h5 className="text-muted">
        {countTodos} more to do, {countDoneTodos} done
      </h5>
    </div>
  );
}
