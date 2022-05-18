class Tv {
  private brand: string;
  private size: number;
  private resolution: string;
  private connections: string[];
  private _connectedTo: string = ' ';

  constructor(brand: string, size: number, resolution: string, connections: string[], connectedTo: string) {
    this.brand = brand;
    this.size = size;
    this.resolution = resolution;
    this.connections = connections;
  }

  turnOn () {
    return console.log(`TV ${this.brand}, ${this.size}", resolution: ${this.resolution} \navailable connections: ${this.connections}`);
  }

  set connectedTo(connectedTo: string) {
    if (this.connections.find((c) => c === connectedTo)) {
      this._connectedTo = connectedTo;
    } else {
      console.log('Sorry, connection unavailable!')
    }
  }

  get connectedTo(): string {
    return this._connectedTo;
  }
}


const PhilipsTV = new Tv('philips', 42, 'fullHd', ['HDMI', 'STD'], 'HDMI');
// PhilipsTV.turnOn();

PhilipsTV.connectedTo = 'STD';

console.log(PhilipsTV.connectedTo);
