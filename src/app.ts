import "reflect-metadata";
import "express-async-errors";
import express from "express";
import { errorHandler } from "./errror";
import { userRoute } from "./routers/users.routers";

const app = express();
app.use(express.json());

app.use("/users", userRoute);

app.use(errorHandler);

export default app;
