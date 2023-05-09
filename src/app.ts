import "reflect-metadata";
import "express-async-errors";
import express from "express";
import { errorHandler } from "./errror";
import { userRouter } from "./routers/users.routers";
import { loginRouter } from "./routers/login.routers";
import { categoryRouter } from "./routers/category.router";

const app = express();
app.use(express.json());

app.use("/users", userRouter);

app.use("/login", loginRouter);

app.use("/categories", categoryRouter);

app.use(errorHandler);

export default app;
