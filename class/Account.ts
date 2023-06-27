export abstract class Account {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  deposit = (value : number): void => {
    if(this.validateStatus()){
      this.balance += value;
    }
  }

  withdraw = (value : number): void => {
    if(this.balance >= value && this.validateStatus()){
        this.balance -= value;
    }else {
      console.log('Saldo insuficiente');
    }
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
