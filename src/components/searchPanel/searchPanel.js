import React from "react";
import "./searchPanel.css";
import { Form } from "react-bootstrap";

export default function SearchPanel({ searchFilter, search }) {
  return (
    <div className="search-panel">
      <Form.Control
        placeholder="type to search"
        value={search}
        onChange={searchFilter}
      />
    </div>
  );
}
