import { useEffect, useState } from "react";
import "./App.css";
import AppHeader from "./components/appHeader/appHeader";
import TodoList from "./components/todoList/todoList";
import FilterPanel from "./components/filterPanel/filterPanel";
import SearchPanel from "./components/searchPanel/searchPanel";
import TodoAddForm from "./components/toAddForm/todoAddForm";
import { Container, Row, Col } from "react-bootstrap";

let maxId = 100;

function createTodoItem(label) {
  return {
    label,
    important: false,
    done: false,
    id: maxId++,
  };
}

const initialTodos = [
  createTodoItem("Drink Coffee"),
  createTodoItem("Make Awesome App"),
  createTodoItem("Hava a lunch"),
];

function App() {
  const [todos, setTodos] = useState(initialTodos);
  const [filterTodo, setFilterTodo] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [search, setSearch] = useState("");

  function addTodo(label) {
    const newTodo = createTodoItem(label);
    setTodos([...todos, newTodo]);
  }

  function onToggleDone(todoId) {
    const toggleTodo = todos.find((item) => item.id === todoId);
    const indexTodo = todos.findIndex((item) => item.id === todoId);
    toggleTodo.done = !toggleTodo.done;
    setTodos([
      ...todos.slice(0, indexTodo),
      toggleTodo,
      ...todos.slice(indexTodo + 1, todos.length),
    ]);
  }

  function onToggleImportant(todoId) {
    const toggleTodo = todos.find((item) => item.id === todoId);
    const indexTodo = todos.findIndex((item) => item.id === todoId);
    toggleTodo.important = !toggleTodo.important;
    setTodos([
      ...todos.slice(0, indexTodo),
      toggleTodo,
      ...todos.slice(indexTodo + 1, todos.length),
    ]);
  }

  function onDelete(todoId) {
    const newTodo = todos.filter((item) => item.id !== todoId);
    setTodos([...newTodo]);
  }

  const countDoneTodos = todos.filter((item) => item.done === true).length;
  const countTodos = todos.length - countDoneTodos;
  function handleFilter(status) {
    console.log(status);
    if (status === "all") {
      setFilterTodo([...todos]);
    } else if (status === "active") {
      setFilterTodo([...todos.filter((item) => item.done === false)]);
    } else {
      setFilterTodo([...todos.filter((item) => item.done === true)]);
    }
  }

  useEffect(() => {
    setFilterTodo([...todos]);
  }, [todos]);

  function searchFilter(e) {
    setSearch(e.target.value);
  }
  useEffect(() => {
    if (filterTodo) {
      const cloneArr = [...filterTodo];
      const filterTable = cloneArr.filter((name) =>
        name.label.toLowerCase().includes(search.toLowerCase())
      );
      setSearchData(filterTable);
    }
  }, [filterTodo, search]);
  return (
    <div className="App">
      <Container>
        <Row className="my-5">
          <Col md={{ span: 4, offset: 4 }}>
            <AppHeader
              countDoneTodos={countDoneTodos}
              countTodos={countTodos}
            />
            <SearchPanel searchFilter={searchFilter} search={search} />
            <FilterPanel handleFilter={handleFilter} />
            <TodoList
              searchData={searchData}
              filterTodo={filterTodo}
              setFilterTodo={setFilterTodo}
              todos={todos}
              onToggleDone={onToggleDone}
              onToggleImportant={onToggleImportant}
              onDelete={onDelete}
            />
            <TodoAddForm addTodo={addTodo} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
