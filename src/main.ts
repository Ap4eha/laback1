//3
/*const num: number = 52;
const bool: boolean = true;
let str: string = "гыгыгы";
let varia: null = null;
let undefinedValue: undefined;
console.log(str);
//2
const multiplyNumbers = (num1: number, num2: number): number => num1 - num2;
console.log(multiplyNumbers(30, 20));
//4
interface Entity {
    id: number;
}
interface ToJsonStringify extends
    Entity {
    e1?: number;
    e2: number;
}
const data: ToJsonStringify = {
    id: 5,
    e2: 999,
}
const jsonString: string = JSON.stringify(data);
console.log(jsonString);*/
function minPos(arr: number[]): number | null {
    let max: number | null = null;
    arr.forEach(element => {
        if (element < 0){
            if (max == null || element > max){
                max = element;
            }
        }
    });
    return max;
}   
const arr = [3, -1, 0, 7, 10, -5];
console.log("Максимальное отрицательное значение:", minPos(arr));
///////
function createNumMatrix(matrix: boolean[][]): number[][] {
    const result: number[][] = [];
    for (let i = 0; i < matrix.length; i++) {
      const row: number[] = [];
      for (let j = 0; j < matrix[i].length; j++) {
        row.push(matrix[i][j] ? 1 : 0);
      }
      result.push(row);
    }
    return result;
  }
  const boolMatrix: boolean[][] = [
    [true, false, true],
    [false, true, false],
    [true, true, false],
  ];
  
  const numMatrix: number[][] = createNumMatrix(boolMatrix);
  
  console.log(numMatrix);
  ////
  function multip(kortej: [number, string, string] ): string{
    let a=kortej[1];
    let b=kortej[2];
    return a+b;
}
  let kortej: [number, string, string] = [15,"dadada", "nenene"]
console.log("№2 - " + multip(kortej) +"\n");
////
enum Aminokisl{
    Glicin = "Глицин",
    Glutamin = "Глутамин",
    Lizin = "Лицин",
    Treonin = "Треонин",
}

let v: Aminokisl = Aminokisl.Treonin;
console.log("№ 3 - " + v +"\n")
//////
class Pet { 
    name: string = 'Some pet' 
    age: number = -1 
    speak() { 
        return "No speak. I am fish!"; 
    } 
} 
class Dog extends Pet { 
    name = "AngryHunter"; 
    age = 8; 
    speak() { 
    return "Yaw-Gaw!"; 
    } 
} 
class Cat extends Pet { 
    name = 'Barsik'; 
    age = 2; 
    speak() { 
    return "Miyau!";
    }
} 

function printPetInfo<T extends Pet>(pet: T): void {
    console.log("Имя : " + pet.name);
    console.log("Возраст : " + pet.age);
    console.log("Спик : " + pet.speak() +"\n");
}
const cat1 = new Cat();
const dog1 = new Dog();

printPetInfo(cat1);
printPetInfo(dog1);
/////
type AminokislInfo = {
    type: Aminokisl;
    name: string;
    dosage: number;
};

const aminokisl: AminokislInfo = {
    type: Aminokisl.Glicin,
    name: "Няма",
    dosage: 10000,
};
console.log("Аминокислота Info JSON:", JSON.stringify(aminokisl, null, 2));