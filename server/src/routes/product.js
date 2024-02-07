import express from "express";
import { getAllProducts } from "../database/queries.js";

const router = express.Router();

router.get("/products", async (req, res) => {
  res.send(await getAllProducts());
});

export default router;
