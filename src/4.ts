class Key {
  private signature: number;

  constructor() {
    this.signature = Math.random();
  }

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}

  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected door: boolean = false;
  protected key: Key;
  protected tenants: Person[] = [];

  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
      console.log("Welcome home!");
    }
  }

  openDoor(key: Key): void {}
}

class MyHouse extends House {
  constructor(key: Key) {
    super();
    this.key = key;
  }

  openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log("Door is open");
    }
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
