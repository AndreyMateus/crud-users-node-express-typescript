import { Router } from "express";
import { routesUsers } from "./usersRoute";

export const routes = Router();

routes.use("/users", routesUsers);