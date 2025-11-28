import express from "express"

const app = express();

app.get("/api/notes", (req, res) => {
 res.status(200).send("your notes are working hell yeah");
});

app.listen(5001, () => {
    console.log("Server started on PORT: 5001");
});