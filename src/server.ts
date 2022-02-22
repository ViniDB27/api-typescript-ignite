import express from "express";

import { categoriesRotues } from "./routes/categories.routes";
import { spacificationRoutes } from "./routes/spacification.routes";

const app = express();
app.use(express.json());

app.use("/categories", categoriesRotues);
app.use("/spacifications", spacificationRoutes);

app.listen(3333, () => console.log("Server is Running"));
