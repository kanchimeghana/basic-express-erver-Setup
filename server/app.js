import express from "express";

const app = express();

const PORT = process.env.PORT || 5001;

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ ok: true, message: "Server is healthy " });
});

app.get("/global", (req, res) => {
  res.status(200).send("Hello global server.");
});

app.post("/register", (req, res) => {
  const userData = req.body; // { name, email, password, ... }
  console.log(" user registered successfully:", userData);
    res.json(userData);
});

app.post("/student/:rollno", (req, res) => {
    const rollno = req.params.rollno;
const studentData = req.body;
res.json({ rollno:"send rollno:" ,studentData})
});

app.put("/update/:id", (req, res) => {
    const id = req.params.id;
    const updateData = req.body
    res.json({ msg: "user updated successfully:",updateData})
});

app.delete("/delete/:id", (req, res) => {
    const id = req.params.id;
    res.json({ msg: "user deleted successfully:", id})
})

app.listen(PORT, () => {
    console.log(` Server running on http://localhost:${PORT}`);
}); 