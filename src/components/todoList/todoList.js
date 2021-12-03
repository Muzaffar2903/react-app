import React from "react";
import "./todoList.css";
import TodoListItem from "../todoListItem/todoListItem";
import { ListGroup } from "react-bootstrap";

export default function TodoList({
  searchData,
  onToggleDone,
  onToggleImportant,
  onDelete,
}) {
  console.log(searchData);
  return (
    <ListGroup as="ul">
      {searchData.map((item, index) => (
        <ListGroup.Item key={index} className="todo-list" as="li">
          <TodoListItem
            {...item}
            onToggleDone={onToggleDone}
            onToggleImportant={onToggleImportant}
            onDelete={onDelete}
          />
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
