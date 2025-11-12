import express from "express";
import users from "./routes/users.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/users", users);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
