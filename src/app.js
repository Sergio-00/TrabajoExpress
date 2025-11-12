import express from "express";
import users from "./routes/users.js";
import tasks from "./routes/tasks.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/users", users);
app.use("/tasks", tasks);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
