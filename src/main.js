var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
function minPos(arr) {
    var max = null;
    arr.forEach(function (element) {
        if (element < 0) {
            if (max == null || element > max) {
                max = element;
            }
        }
    });
    return max;
}
var arr = [3, -1, 0, 7, 10, -5];
console.log("Максимальное отрицательное значение:", minPos(arr));
///////
function createNumMatrix(matrix) {
    var result = [];
    for (var i = 0; i < matrix.length; i++) {
        var row = [];
        for (var j = 0; j < matrix[i].length; j++) {
            row.push(matrix[i][j] ? 1 : 0);
        }
        result.push(row);
    }
    return result;
}
var boolMatrix = [
    [true, false, true],
    [false, true, false],
    [true, true, false],
];
var numMatrix = createNumMatrix(boolMatrix);
console.log(numMatrix);
////
function multip(kortej) {
    var a = kortej[1];
    var b = kortej[2];
    return a + b;
}
var kortej = [15, "dadada", "nenene"];
console.log("№2 - " + multip(kortej) + "\n");
////
var Aminokisl;
(function (Aminokisl) {
    Aminokisl["Glicin"] = "\u0413\u043B\u0438\u0446\u0438\u043D";
    Aminokisl["Glutamin"] = "\u0413\u043B\u0443\u0442\u0430\u043C\u0438\u043D";
    Aminokisl["Lizin"] = "\u041B\u0438\u0446\u0438\u043D";
    Aminokisl["Treonin"] = "\u0422\u0440\u0435\u043E\u043D\u0438\u043D";
})(Aminokisl || (Aminokisl = {}));
var v = Aminokisl.Treonin;
console.log("№ 3 - " + v + "\n");
//////
var Pet = /** @class */ (function () {
    function Pet() {
        this.name = 'Some pet';
        this.age = -1;
    }
    Pet.prototype.speak = function () {
        return "No speak. I am fish!";
    };
    return Pet;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "AngryHunter";
        _this.age = 8;
        return _this;
    }
    Dog.prototype.speak = function () {
        return "Yaw-Gaw!";
    };
    return Dog;
}(Pet));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'Barsik';
        _this.age = 2;
        return _this;
    }
    Cat.prototype.speak = function () {
        return "Miyau!";
    };
    return Cat;
}(Pet));
function printPetInfo(pet) {
    console.log("Имя : " + pet.name);
    console.log("Возраст : " + pet.age);
    console.log("Спик : " + pet.speak() + "\n");
}
var cat1 = new Cat();
var dog1 = new Dog();
printPetInfo(cat1);
printPetInfo(dog1);
var aminokisl = {
    type: Aminokisl.Glicin,
    name: "Няма",
    dosage: 10000,
};
console.log("Аминокислота Info JSON:", JSON.stringify(aminokisl, null, 2));
