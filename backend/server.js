const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const productShema = mongoose.Schema({
  title: String,
  desc: String,
  img: String,
  price: Number,
  count: Number,
  totalPrice: Number,
});

const Products = mongoose.model("Examen", productShema);

app.get("/api/examen", async (req, res) => {
  const resp = await Products.find();
  res.send(resp);
});

app.get("/api/examen/:id", async (req, res) => {
  const { id } = req.params;
  const resp = await Products.findById(id);
  res.send(resp);
});

app.delete("/api/examen/:id", async (req, res) => {
  const { id } = req.params;
  const resp = await Products.findByIdAndDelete(id);
  res.send("Item deleted");
});

app.put("/api/examen/:id", async (req, res) => {
  const { id } = req.params;
  const resp = await Products.findByIdAndUpdate(id,(req.body));
  res.send("Item updated");
});

app.post("/api/examen", async (req, res) => {
  const newProduct = new Products(req.body)
  await newProduct.save()
  res.send("Item created")
});


app.listen(process.env.PORT, (resp) => {
  console.log("Port connected 8080");
});

mongoose
  .connect(process.env.CONNECTION__STRING)
  .then((resp) => console.log("DB CONNECTED"))
  .catch((err) => console.log("DB dont connected"));
