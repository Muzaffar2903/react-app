import React from "react";
import { useState } from "react";
import "./todoAddForm.css";
import { Form, Button } from "react-bootstrap";

export default function TodoAddForm({ addTodo }) {
  const [todo, setTodo] = useState("");

  function onSubmit(event) {
    event.preventDefault();
    if (todo) {
      addTodo(todo);
      setTodo("");
    }
  }

  return (
    <Form className="d-flex" onSubmit={onSubmit}>
      <Form.Control
        value={todo}
        onChange={(event) => setTodo(event.target.value)}
        placeholder="What needs to be done"
      />
      <Button className="btn-sm" type="submit" variant="outline-secondary">
        Add item
      </Button>
    </Form>
  );
}
