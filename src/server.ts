import express from "express";

import { categoriesRotues } from "./routes/categories.routes";

const app = express();
app.use(express.json());

app.use("/categories", categoriesRotues);

app.listen(3333, () => console.log("Server is Running"));
