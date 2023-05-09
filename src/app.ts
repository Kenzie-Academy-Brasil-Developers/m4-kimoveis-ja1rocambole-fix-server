import "reflect-metadata";
import "express-async-errors";
import express from "express";
import { errorHandler } from "./errror";
import { userRouter } from "./routers/users.routers";
import { loginRouter } from "./routers/login.routers";

const app = express();
app.use(express.json());

app.use("/users", userRouter);

app.use("/login", loginRouter);

app.use(errorHandler);

export default app;
