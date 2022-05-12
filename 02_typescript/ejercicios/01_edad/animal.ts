export abstract class Animal {

    // protected name: string
    // protected age: number
  
    // constructor(name: string, age: number) {
    //   this.name = name;
    //   this.age = age;
   // }
    //automaticamente
    constructor(
        protected name: string,
        protected age: number) { }

        public printAge(): void {
            console.log(`${this.name} is ${this.age} years old`);
        }

        public abstract turnYear(): void;
}