import React from "react";
import "./filterPanel.css";
import { ButtonGroup, Button } from "react-bootstrap";

export default function FilterPanel({ handleFilter }) {
  return (
    <ButtonGroup className="d-inline-block filter-panel pl-4">
      <Button variant="info" onClick={() => handleFilter("all")}>
        All
      </Button>
      <Button variant="outline-success" onClick={() => handleFilter("active")}>
        Active
      </Button>
      <Button variant="outline-success" onClick={() => handleFilter("done")}>
        Done
      </Button>
    </ButtonGroup>
  );
}
