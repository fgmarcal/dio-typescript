import { Account } from "./Account";

export class PlusAccount extends Account {
    constructor(name: string, accountNumber: number, status:boolean, balance:number){
        super(name, accountNumber, status, balance);
    }

    superDeposit = (value : number) =>{
        this.balance += (value + 10);
    }
}