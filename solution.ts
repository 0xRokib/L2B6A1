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
