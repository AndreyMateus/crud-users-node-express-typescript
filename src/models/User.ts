import { IAddress } from "../interfaces/IAddress";

export class User {
    id: number;
    name: string;
    cpf: string;
    cellphone: string;
    address: IAddress;

    constructor(name: string, cpf: string, cellphone: string, address: IAddress, id: number | null = null) {
        // Gambiarra com milisegundos para gerar ID.
        if (id === null) {
            const randomId = Number(new Date());
            this.id = randomId;
        } else {
            this.id = id;
        }

        this.name = name;
        this.cpf = cpf;
        this.cellphone = cellphone;
        this.address = address;
    }

    describe() {
        return {
            name: this.name,
            cpf: this.cpf,
            cellphone: this.cellphone,
            address: this.address
        };
    };
}