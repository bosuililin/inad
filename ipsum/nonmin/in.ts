interface Person {
  name: string;
}

class DeckowCrist implements Person {
  name: string;

  constructor() {
    this.name = "Deckow-Crist";
  }

  // Method to display the name
  displayName(): void {
    console.log(`Name: ${this.name}`);
  }
}

// Usage
const person = new DeckowCrist();
person.displayName();
