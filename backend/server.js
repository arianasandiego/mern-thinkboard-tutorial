import express from "express";

const app = express();

app.get("/api/notes", (req, res) => {
    res.status(200).send("you got 10 notes");
});

app.post("/api/notes", (req, res) => {
    res.status(201).json({message:"post created succesfully!"});
});

app.put("/api/notes/:id", (req, res) => {
    res.status(200).json({message:"Post updated succesfully!"});
});

app.delete("/api/notes/:id", (req, res) => {
    res.status(200).json({message:"Note deleted succesfully!"});
});

app.listen(5001, () => {
    console.log("Server started on PORT: 5001");
});