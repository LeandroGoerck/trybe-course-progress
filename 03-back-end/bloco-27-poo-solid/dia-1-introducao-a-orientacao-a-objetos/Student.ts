class Student {
  private _enrollment: string;
  private _name: string;
  private _examsGrades: number[] = [];
  private _worksGrades: number[] = [];

  constructor(enrollment: string, name: string, exames: number[], grades: number[]) {
    this._enrollment = enrollment;
    this._name = name;
    this.examsGrades = exames;
    this.worksGrades = grades;
  }

  public get enrollment(): string {
    return this._enrollment;
  }
  public set enrollment(value: string) {
    this._enrollment = value;
  }

  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  public get examsGrades(): number[] {
    return this._examsGrades;
  }
  public set examsGrades(value: number[]) {
    if (value.length !== 4) throw new Error('A pessoa precisa ter 4 notas de prova.');
    this._examsGrades = value;
  }

  public get worksGrades(): number[] {
    return this._worksGrades;
  }
  public set worksGrades(value: number[]) {
    if (value.length !== 2) throw new Error('A pessoa precisa ter 2 notas de trabalho.');
    this._worksGrades = value;
  }

  sumGrades(): number {
    return [...this.examsGrades, ...this.worksGrades]
    .reduce((previousGrade, grade) => {
        grade += previousGrade;
        return grade;
    }, 0)
  }

  sumAverageGrades(): number {
    const sumGrades = this.sumGrades(); 
    const quantityOfGrades = this.examsGrades.length + this.worksGrades.length;
    const calc = sumGrades/quantityOfGrades;
    return Math.round(calc);
  }
}

const student1 = new Student('12312', 'Leandro', [5, 6, 7, 8], [8, 9]);
const student2 = new Student('23434', 'Fran', [10, 9, 10, 8], [10, 9]);

console.log(student1);
console.log(student2);
console.log('Soma das notas do estudante 1: ', student1.sumGrades());
console.log('Soma das notas do estudante 2: ', student2.sumGrades());

console.log('A media das notas do estudante 1: ', student1.sumAverageGrades());
console.log('A media das notas do estudante 2: ', student2.sumAverageGrades());