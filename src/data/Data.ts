const fs = require("node:fs");
import { User } from "../models/User";

export class Data {
    static #PATHDB = `${__dirname}/data.json`;

    static readData() {
        const data = fs.readFileSync(this.#PATHDB);
        return JSON.parse(data);
    }

    static saveData(data: User | User[]) {
        return fs.writeFileSync(Data.#PATHDB, JSON.stringify(data, null, 2));
    }

}