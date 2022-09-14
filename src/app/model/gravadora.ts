import { Transaction } from './transaction';

export class Gravadora {
  id!: string;
  name?: string;
  cpf?: string;

  transactions: Transaction[];
  constructor() {
    this.id = String(Math.round(Math.random() * 1000));
    this.name = String();
    this.cpf = String();

  }

  public static clone(gravadora: Gravadora) {
    let g: Gravadora = new Gravadora();
    g.name = gravadora.name;
    g.cpf = gravadora.cpf;
    g.transactions = gravadora.transactions;
    return g;
  }

  /**
   * Transforma um objeto pego da API para a versão salva no WebStorage
   * @param gravadora
   * @returns
   */
  public static toWS(gravadora: Gravadora) {
    let g: Gravadora  = new Gravadora();
    g.name = gravadora.name;
    g.cpf = gravadora.cpf;
    g.transactions = [];
    return g;
  }
}
