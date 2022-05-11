// exercises.ts

// ./exercises.ts

export function greeter(name: string) {
  return `Olá ${name}!`;
}

export function personAge(name: string, age: number) {
  return `${name} tem ${age} anos!`;
}

export function add(x: number, y: number): number {
  return x + y;
}

export function sumArray(numbers: number[]): number {
  return numbers.reduce(add, 0);
}

export function triangle(base: number, height: number): number {
  return (base * height) / 2;
}

export function square(side: number): number {
  return side ** 2;
}

export function rectangle(base: number, height: number): number {
  return base * height;
}

export function losangle(greatDiag: number, smallDiag: number): number {
  return (greatDiag * smallDiag) / 2;
}

export function trapezy(B:number, d:number, h:number): number {
  return ((B + d) * h) / 2;
}

export function circle(r:number) {
  return 3.14 * r ** 2;
}









