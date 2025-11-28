export function getAllNotes(req, res) {
    res.status(200).send("Your server is running")
}

export function createNote(req, res) {
  res.status(200).send("you created a note successfully!");
}

export function updateNote(req, res) {
 res.status(201).json({message:"Post has been updated successfully!"});
}

export function deleteNote(req, res) {
 res.status(200).json({message:"Post has been Deleted!"});
}