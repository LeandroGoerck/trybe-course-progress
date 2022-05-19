interface Contract {
  subject: string;
  clauses: string[];
  signatories: Person[];
  describe(): void;
}

class Person {
  private _name;
  constructor(name: string) {
    this._name = name;
  }
  get name() { return this._name; }
}

class NaturalPerson extends Person {
  private _cnpj;
  constructor(name: string, cnpj: string) {
    super(name);
    this._cnpj = cnpj;
  } 
}

class LegalPerson extends Person {
  private _cnpj;
  constructor( name: string, cnpj: string) {
    super(name);
    this._cnpj = cnpj;
  }
}

class SalesContract implements Contract {
  private _signatories: Person[];
  private _clauses: string[];

  constructor() {
    this._signatories = [];
    this._clauses = [];
  }

  get signatories() { return [...this._signatories]; };
  get clauses() { return [...this._clauses]; };
  get subject() { return "Sales"; };

  sign(signatory: Person) {
    this._signatories.push(signatory);
  }

  addClause(clause: string) {
    if (this._signatories.length > 0) return;
    this._clauses.push(clause);
  }

  describe() {
    console.log('--------------------');
    console.log(`Contrato: ${this.subject}`);
    this.clauses.forEach((clause) => { console.log(`Cláusula: ${clause}`) });
    this.signatories.forEach((signatory) => { console.log(`Assinado por: ${signatory.name}`) })    ;
    console.log('--------------------');
  }
}

const s1 = new SalesContract();
const pp1 = new NaturalPerson('Tony', '1235464535');
const pp2 = new NaturalPerson('Lilly', '684643543847');
const lp = new LegalPerson('International Sales SA', '684653543123125');

s1.describe();
s1.addClause('Foo');
s1.addClause('Bar');
s1.describe();

s1.sign(pp1);
s1.sign(pp2);

s1.describe();
s1.addClause('Baz');
s1.sign(lp);
s1.describe();

console.log(s1);

