function formatValue(
  value: string | number | boolean
): string | number | boolean {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else {
    return !value;
  }
}

function getLength(value: string | unknown[]): number {
  if (typeof value === "string" || Array.isArray(value)) {
    return value.length;
  }
  throw new Error("Invalid type");
}

class Person {
  constructor(public name: string, public age: number) {}

  getDetails(): string {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

type Item = {
  title: string;
  rating: number;
};

function filterByRating(items: readonly Item[]): Item[] {
  return items.filter((item) => item.rating >= 4);
}

type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

function filterActiveUsers(users: readonly User[]): User[] {
  return users.filter((user) => user.isActive);
}

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(book: Book): void {
  console.log(
    `Title: ${book.title}, Author: ${book.author}, Published: ${
      book.publishedYear
    }, Available: ${book.isAvailable ? "Yes" : "No"}`
  );
}

function getUniqueValues<T extends string | number>(arr1: T[], arr2: T[]): T[] {
  const result: T[] = [];
  const seen: {
    [key: string]: boolean;
  } = {};

  for (let i = 0; i < arr1.length; i++) {
    const key = String(arr1[i]);
    if (!seen[key]) {
      seen[key] = true;
      result[result.length] = arr1[i];
    }
  }
  for (let i = 0; i < arr2.length; i++) {
    const key = String(arr2[i]);
    if (!seen[key]) {
      seen[key] = true;
      result[result.length] = arr2[i];
    }
  }

  return result;
}

type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

function calculateTotalPrice(products: Product[]) {
  if (products.length === 0) return 0;
  return products
    .map((product) => {
      const baseTotal = product.price * product.quantity;
      const discountAmount = product.discount
        ? (baseTotal * product.discount) / 100
        : 0;
      return baseTotal - discountAmount;
    })
    .reduce((sum, value) => sum + value, 0);
}
