interface User{
  id:number,
  email:string,
  username:string
}

interface Product{
  id:number,
  title:string,
}


async function fetchFromApi<T>( resource:string) : Promise<T> {
  const response = await fetch(`https://fakestoreapi.com/${resource}`);
  return response.json();
}

let allProducts = await fetchFromApi<Product[]>("products");
for(let x of allProducts){
  console.log(x.title)
}
//let allUsers = await fetchFromApi<User[]>("user");





// async function fetchUsers()  {
//   const response = await fetch(`https://fakestoreapi.com/users`);
//   return response.json();
// }

// async function fetchProducts()  {
//   const response = await fetch(`https://fakestoreapi.com/products`);
//   return response.json();
// }




//console.log(await fetchUsers())


// // List<int>, List<float>
// // Two scenarios - function generics
// //                 data generics 

// function firstInOrder<T>(t1:T,t2:T,t3:T) : T{
//   if(t1 < t2 && t1 < t3){
//       return t1
//   }
//   if(t2 < t1 && t2 < t3){
//       return t2
//   }
//   return t3
// }

// const first = firstInOrder<string>('Foppa','Anna','Stefana')
// console.log(first) // 'Anna'

// const first2 = firstInOrder<number>(1999,2002,1972)
// console.log(first2) // 'Anna'



// class Burger<T>{
//   constructor(public size:T, public name:string){}
// }


// let big = new Burger(150,"Super")
// let small = new Burger(90,"Bla")
// let special = new Burger("XL","fdsfdfdsfdsfds")
// let special2 = new Burger("SM","fdsadsdsfdfdsfdsfds")



// class PagingData<T>{
//   page_number:number
//   page_size:number
//   total_record_count:number
//   records:T[]   
// }

// const p = new PagingData<Product>();
// const p2 = new PagingData<User>();








// class Movie{

//   private _title: string;
//   year: number;
//   length:number;

//   get title(): string {
//     return this._title;
//   }
//   set title(value: string) {
//     this._title = value;
//   }



//   constructor( title:string, year:number){
//     this._title = title;
//     this.year = year;
//   }

//   print(): void{
//     console.log(`${this.title} was released in ${this.year}`);
//   }
// }

// let m: Movie = new Movie('aaa',12)
// m.title = "dsadsa"

// m.print()

// //let m:Movie = new Movie('The Godfather', 1972);




// interface Duck{
//   walk: () => void;
//   quack: () => void;
//   id: number;
//   name: string;
// };


// class DuckClass implements Duck{ 
//  constructor(public id: number, public name: string){  
//    this.id = id;
//    this.name = name;
//  }
//  walk()  {
//    console.log('Duck is walking');
//  }
//  quack(){
//    console.log('Duck is quacking');
//  }
// };

// let d1 = new DuckClass(12,"Kalle")
// let d2 = new DuckClass(13,"Knatte")
// let d3 = new DuckClass(14,"Tjatte")


// // interface Duck{
// //   walk: () => void;
// //   quack: () => void;
// //   name:string
// // };
// // function actOnDuck(duck:Duck){
// //   duck.walk();
// //   duck.quack(); 
// // };
// // let duck : Duck = {
// //   name:"Kalle",
// //   walk: () => {
// //     console.log('Duck is walking');
// //   },
// //   quack: () =>{
// //     console.log('Duck is quacking');
// //   }
// // };
// // let fnATTE : Duck = {
// //   name:"Fnatte",
// //   walk: () => {
// //     console.log('Duck is walking');
// //   },
// //   quack: () =>{
// //     console.log('Duck is quacking');
// //   }
// // };


// // actOnDuck(duck);







// function showPlayers(team:string, ...players:string[]): void{
//   console.log(team)

//   for (let n in players){
//     console.log(n)
//   }
// }

// showPlayers("Sweden","Foppa","Mats", "dsdsadsa")


// function calculate(score:number, name:string='Stefan'): string{
// 	return `bla bla {name}` 
// }



// let aaa = calculate(12,'Foppa')
// let bb = calculate(1)






// let names3:string[] = ['Stefan', 'John', 'Jane'];

// let names: string[] = ['Stefan', 'John', 'Jane'];
// let names2: Array<string> = ['Stefan', 'John', 'Jane'];

// //names.push(12)

// function getSomeValue() : number{
//   return 123;
// }


// let name = 'Stefan';

// console.log(name);

// let address: string = '123 Main St';


// console.log(address);

// let z:number = getSomeValue();


// // UNIONS 
// let age : number|string ;
// age = 52;
// age = "Old";


// class Player{
//   jersey: number;
//   name: string;

//   constructor(jersey: number, name: string){
//       this.jersey = jersey;
//       this.name = name;
//   }
// }
// let allPlayers: Player[] = [];


// function findPlayer(jersey:number): Player | null {
//   for(let player of allPlayers) {
//     if (player.jersey === jersey){
//       return player;
//     }
//   }
//   return null;
// }

// let p = findPlayer(21)
// if (p !== null){
//   console.log(p)
// }else{
//   console.log('Finns ej')
// }




// // let player = findPlayerByJersey(21)
// // if player == null








