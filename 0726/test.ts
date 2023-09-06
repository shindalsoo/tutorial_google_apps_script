//Int
let age:number = 30;
console.log(age);

//True or False
let isAdult:boolean = true;

//Array
let a:number[] = [1, 2, 3];
let b:Array<number> = [1, 2, 3];
let c:string[] = ['one', 'two', 'three'];
let d:Array<string> = ['one', 'two', 'three'];
d.push('four');

//Tuple
let e:[string,number];
e = ['a', 1];
e = ['A', 2];
e[0].toLowerCase();

//Function(void)
function fun1():void{ //리턴=반환이 없으면 void
    console.log('hi');
}

//Function(never)
function fun2():never{ //아래 둘 중 하나인 함수
    // while(true){ //영원히 끝나지 않는 함수

    // }
    throw new Error(); //강제로 Error 발생
}

//Enum : 열거형(같은 부류의 데이터 형태)
enum Menu{
    Hamburger = 3,
    Cheezburger = 10,
    Chip = 13
}

console.log(Menu[10]);
console.log(Menu['Hamburger']);

// Null, Undefined
let f:null = null;
let g:undefined = undefined;


// let user:object;
// interface user = {
//     name : 'aaa',
//     age : 30
// }

// console.log(user.name);

//Literal Type
type Score = 'A' | 'B' | "C" | "D" | "F" // 리터널 타입

// Interface
interface User{
    name: string,
    readonly gender: string, // 초기값 우선?
    age?: number, // ? : Optional(옵션값)
    [grade:number]: Score
}

let user:User = {
    name: "Hosung",
    gender: "MAN",
    age: 19,
    1 : 'F', //K 값 허용 안 함 
    2 : 'A',
    3 : 'B'
}

console.log(user.name);
console.log(user.age);

// Interface Function
// 첫번째 함수형 인터페이스
interface Add{
    (num:number, num2:number):number; //인자값 1, 인자값 2 : 리턴값
}

const add:Add = function(x, y){
    return x+y;
}

console.log(add(10, 20));

// //두번째 함수형 인터페이스
interface IsAdult{
    (age:number):boolean; //인자값 1 : 반환값
}
const hosung:IsAdult = (age) => {
    return age >= 19;
}

console.log(hosung(19));

// 클래스형 인터페이스
interface Car {
    color : string;
    wheels : number;
    start(): void;
}

class Bmw implements Car {
    color;
    wheels;
    constructor(color:string, wheels:number){
        this.color = color;
        this.wheels = wheels;
    };
    start(){
        console.log('시동겁니다.');
    };
}

const bmwClass = new Bmw('green', 19);
console.log(bmwClass);

bmwClass.start();

// ?: optional(에러없이 실행)
function hello1(name?: string) {
    return `Hello ${name + ' world'}`;
}

function hello2(name='world'){
    return `Hello, ${name}`;
}

console.log(hello1());
console.log(hello1('rahosung'));
console.log(hello2());
console.log(hello2('rahosung'));

// 앞에 인자는 optional를 설정할 수 없음
function hello3(name: string, age?:number){
    if (age !== undefined){
        return 'hello';
    } else {
        return 'hi';
    }
}

console.log(hello3('sam', 18));

