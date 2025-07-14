// const age: number = "20"
// console.log("Age is", age)


// function printPerson(name:string, age:number) {
//     console.log(`Name: ${name} age: ${age}`)
// }
// printPerson("Billy", 8)

// function isMinimumAge(age: number) : boolean {
//     return age >= 21
// }
// console.log("Is minimum age:", isMinimumAge(22))

// class Product{
//     id: number = 0;
//     published : boolean = true;
//     title !: string;
//     price ?: number;

//     constructor( id:number){
//         this.id = id;
//     }

//     printDetails (){
//         console.log( "id: " + this.id )
//         console.log( "published: " + this.published )
//         console.log( "title: " + this.title )
//         console.log( "price: " + this.price )
//     }
// }

// let p = new Product(100)
// p.title = "Baseball Gloves"
// p.price = 39.95
// p.printDetails()

class Product {
    constructor(public id: number,
    public title: string,
    public price: number,
    public published = true) {
    }
    printDetails() {
        console.log("ID:", this.id)
        console.log("Title:", this.title)
        console.log("Price:", this.price)
        console.log("Published:", this.published)
    }
}

let p = new Product(100, "Baseball Gloves", 39.95)
p.printDetails()

let database = new Map<number, Product>()

let p1 = new Product(100, "Baseball Gloves", 39.95)
let p2 = new Product(350, "Golf Club", 129.95)
database.set(p1.id, p1)
database.set(p2.id, p2)
database.forEach((p, key) => {
    console.log("Key is:", key)
    p.printDetails()
})

function getOrDefault<K, V>(
    key: K,
    map: Map<K, V>,
    defaultValue:V) : V {
        let data: V = map.get(key) ?? defaultValue
        return data
    }

let p3 = getOrDefault(11, database, new Product(0, "Unknown", 0.0))
p3.printDetails()

class Person{
    name:string;
    age ?: number;

    constructor( name: string, age = 0){
        this.name = name;
        this.age = age;
    }

    printDetails(){
        console.log("name: " + this.name);
        console.log("age: " + this.age);
    }
}

let abc1 = new Person( "Pratheep1", 33 );
abc1.printDetails();

let abc2 = new Person( "Pratheep2" );
abc2.printDetails();


const greet = (): void => console.log(`Hello Stranger!`)


const addNumbers = (a: number, b: number): number => {
    return a + b
}

greet();
console.log( "add: " +  addNumbers(5, 6) );

const greeting = () => "Hello, welcome to arrow function without return!";

console.log(  greeting() );

function returnLarger <T> (a: T, b: T): T {
    return a > b ? a : b;
}

console.log( returnLarger ('A', 'a') );
console.log( returnLarger (10, 5) );

