// Types
let a: string = "hello";
let isPublished = true;
let age: number = 20;
let numbers = [1, 2, "3"];
let user: [number, string] = [1, "Mosh"];

if (age < 20) {
  age += 10;
}
console.log(a);

const enum Size {
  Small,
  Medium,
  Large,
}
let mySize: Size = Size.Medium;
console.log(mySize);

// Functions
// ? means optional
function calculateTax(income: number, taxYear?: number): number {
  if ((taxYear || 2022) < 2022) {
    return income * 1.2;
  } else {
    return income * 1.3;
  }
}
calculateTax(10000);

function calculateTax2(income: number, taxYear: number = 2022): number {
  if (taxYear < 2022) {
    return income * 1.2;
  } else {
    return income * 1.3;
  }
}

calculateTax2(10000);

// Objets
let employee: {
  readonly id: number;
  name?: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  retire: (date: Date) => {
    console.log(date);
  },
};
employee.name = "Mosh";
// employee.id = 12; // Gives error

//Type Alias
type Employee = {
  readonly id: number;
  name?: string;
  retire: (date: Date) => void;
};

let newEmployee: Employee = {
  id: 1,
  retire: (date: Date) => {
    console.log(date);
  },
};
newEmployee.name = "Mosh";

//Union Types
function kgToLbs(weight: number | string): number {
  if (typeof weight === "number") {
    return weight * 2.2;
  } else {
    return parseInt(weight) * 2.2;
  }
}

console.log(kgToLbs(500));

//Intersecting types
type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};

//Literal Types
type Quantity = 50 | 100;
let quantity: Quantity = 100;

//Nullable Types
function greet(name: string | null | undefined) {
  if (name) {
    console.log(name.toUpperCase());
  } else {
    console.log("hello");
  }
}

greet(null);

//Optional Chaining
type Customer = {
  birthday: Date;
};

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(0);
// if (customer !== null && customer !== undefined) {
//   console.log(customer.birthday);
// }
console.log(customer?.birthday);
console.log(customer?.birthday.getFullYear());

//Optional element access
//customers?.[0]

//Optional call
let log: any = null;
log?.("a");
