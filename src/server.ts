import expresss, { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";
import { routes } from "./routes";
import { AppError } from "./utils/AppError";

const app = expresss();
const PORT = 3000;

app.use(expresss.json());
app.use(routes);

app.use((error: any, request: Request, response: Response, _: NextFunction) => {

    if (error instanceof AppError) {
        response.status(error.statusCode).json({
            message: error.message
        });
        return;
    }

    if (error instanceof ZodError) {
        response.status(400).json({
            message: "Validantion errors",
            // o método format() converte a Resposta do erro lançado pelo ZOD para um OBJETO.
            issues: error.format()
        });
        return;
    }

    response.status(500).send("Erro no servidor!");
});

app.listen(PORT, () => {
    console.log(`Servidor on: http://localhost:${PORT}/users`);
});