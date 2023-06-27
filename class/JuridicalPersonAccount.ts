import { Account } from "./Account"

export class JuridicalPerson extends Account {

  constructor(name: string, accountNumber: number, status:boolean, balance:number){
    super(name, accountNumber, status, balance);
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error('Conta inválida')
  }

  getLoan = (value : number): void => {
    if(this.validateStatus()){
      this.balance += value;
      console.log(`Emprestimo de $ ${value} autorizado`);
    }
  }
}
