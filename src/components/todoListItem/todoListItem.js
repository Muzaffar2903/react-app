import React from "react";
import "./todoListItem.css";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamation, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

export default function TodoListItem({
  label,
  onToggleDone,
  onToggleImportant,
  onDelete,
  id,
  done,
  important,
}) {
  return (
    <div className="todo-list-item">
      <span
        className="todo-list-item-label"
        style={{
          textDecoration: done ? "line-through" : "none",
          fontWeight: important ? "700" : "400",
        }}
        onClick={() => onToggleDone(id)}
      >
        {label}
      </span>
      <span>
        <Button variant="outline-danger" onClick={() => onDelete(id)} size="sm">
          <FontAwesomeIcon icon={faTrashAlt} />
        </Button>
        <Button
          variant="outline-success"
          onClick={() => onToggleImportant(id)}
          size="sm"
        >
          <FontAwesomeIcon icon={faExclamation} />
        </Button>
      </span>
    </div>
  );
}
