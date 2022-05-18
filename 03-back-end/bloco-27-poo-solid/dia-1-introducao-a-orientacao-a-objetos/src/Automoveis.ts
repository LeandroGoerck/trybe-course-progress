class Automovel {
  modelo: string = '';
  readonly marca: string = '';
  portas: number = 0;
  acessorios: string[] = [];
  private _price: number = 0;
  private _velocidade: number = 0;
  categoria: 'hatch' | 'sedan' = 'sedan';
  private _ligado: boolean = false;


  constructor(marca: string) {
    this.marca = marca;
  }

  set price(price: number) {
    this._price = price;
  }

  get price(): number {
    return this._price;
  }

  public ligaDesliga(): boolean {
    return this._ligado = !this._ligado;
  }

  public acelera() {
    if(this._ligado === false) throw 'O carro está desligado';
    this._velocidade += 20;
  }

  public frear() {
    if(this._velocidade < 20) throw 'O carro está parado';
    this._velocidade -= 20;
  }
}

const veiculo = new Automovel('Fiat');
const veiculo2 = new Automovel('VW');

veiculo.ligaDesliga();
veiculo.acelera();
veiculo.acelera();

console.log(veiculo);
console.log(typeof veiculo);
