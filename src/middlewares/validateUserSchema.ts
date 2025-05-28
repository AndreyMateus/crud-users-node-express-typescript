import { Request, Response, NextFunction } from "express";
import { z } from "zod";

export function validatedUserSchema(req: Request, res: Response, next: NextFunction) {
    const { body } = req;

    const bodySchema = z.object({
        name: z.string(),
        cpf: z.string(),
        cellphone: z.string(),
        address: z.object({
            city: z.string(),
            streetName: z.string(),
            district: z.string(),
            numberHouse: z.number()
        }),
    });

    const { name, cpf, cellphone, address } = bodySchema.parse(body);

    req.body = {
        name,
        cpf,
        cellphone,
        address
    };

    next();
}