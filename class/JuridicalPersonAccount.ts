import { Account } from "./Account"

export class JuridicalPerson extends Account {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (): void => {
    console.log('Voce pegou um empréstimo')
  }
}
