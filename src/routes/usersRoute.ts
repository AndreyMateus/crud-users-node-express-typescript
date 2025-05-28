import { Router } from "express";
import { UsersController } from "../controllers/UsersController";
import { validatedUserSchema } from "../middlewares/validateUserSchema";

export const routesUsers = Router();

const usersController = new UsersController();

routesUsers.get("/", usersController.index);

routesUsers.get("/:id", usersController.show);

routesUsers.put("/:id", validatedUserSchema, usersController.update);

routesUsers.post("/", validatedUserSchema, usersController.create);

routesUsers.delete("/:id", usersController.remove);