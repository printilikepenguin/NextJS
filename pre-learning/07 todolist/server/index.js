const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.get("/", async (req, res) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  res.json({ randomNumber: Math.floor(Math.random() * (100 - 1 + 1)) + 1 });
});

let todos = [
  { id: 1, text: "Buy groceries", isCompleted: false },
  { id: 2, text: "Read a book", isCompleted: false },
  { id: 3, text: "Workout", isCompleted: true },
];

// TODO 리스트 조회
app.get("/todos", (req, res) => {
  res.json(todos);
});

// POST new todo
app.post("/todos", (req, res) => {
  const { text } = req.body;
  const newTodo = { id: todos.length + 1, text, completed: false };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// TODO 상태 토글
app.patch("/todos/:id/toggle", (req, res) => {
  const todoId = parseInt(req.params.id);
  const todo = todos.find((t) => t.id === todoId);

  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }

  todo.completed = !todo.completed;
  res.json(todo);
});

// TODO 삭제
app.delete("/todos/:id", (req, res) => {
  const todoId = parseInt(req.params.id);
  const todoIndex = todos.findIndex((t) => t.id === todoId);

  if (todoIndex === -1) {
    return res.status(404).json({ message: "Todo not found" });
  }

  todos.splice(todoIndex, 1);
  res.status(204).send(); // 204 No Content
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
