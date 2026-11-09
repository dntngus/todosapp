const express = require("express");
const path = require("path");
const todosRouter = require("./routes/todos");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => res.redirect("/todos"));

app.use("/todos", todosRouter);

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send("서버 오류가 발생했습니다: " + err.message);
});

app.listen(PORT, () => {
    console.log(`서버 실행 중: http://localhost:${PORT}/todos`);
});
