import { Request, Response } from "express";
import { User } from "../models/User";
import { Data } from "../data/Data";

export class UsersController {

    index(req: Request, res: Response) {
        const datas: User[] = Data.readData();
        res.status(200).json(datas);
    }

    show(req: Request, res: Response) {
        const id = parseInt(req.params.id);

        const datas: User[] = Data.readData();

        const filteredPerson = datas.filter(user => user.id === id);

        res.status(200).json(filteredPerson);
    }

    update(req: Request, res: Response) {
        const { id } = req.params;

        const validatedBody: User = req.body;

        const datas: User[] = Data.readData();

        const newList: User[] = datas.filter(user => user.id !== +id);

        const updatedUser: User = new User(
            validatedBody.name,
            validatedBody.cpf,
            validatedBody.cellphone,
            validatedBody.address,
            +id
        );

        Data.saveData([...newList, updatedUser]);

        res.status(200).send(`Usuário ${updatedUser.name} Alterado!!`);
    }

    create(req: Request, res: Response) {
        const { name, cpf, cellphone, address } = req.body;

        const newUser: User = new User(name, cpf, cellphone, address);

        const oldDatas = Data.readData();

        Data.saveData([...oldDatas, newUser]);

        res.status(201).send(`Usuário(a) ${newUser.name} Cadastrado!`);
    }

    remove(req: Request, res: Response) {
        const { id } = req.params;

        const datas: User[] = Data.readData();

        const filteredPersons: User[] = datas.filter(user => user.id !== +id);

        Data.saveData(filteredPersons);

        res.status(200).send("Usuário Deletado!");
    }
}