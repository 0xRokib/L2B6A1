## ## প্রশ্ন ১: TypeScript-এ _interface_ আর _type_ এদের মধ্যে পার্থক্য কী?

TypeScript-এ `interface` আর `type` দুটোই দিয়ে টাইপ বানানো যায়।
কাজ কাছাকাছি হলেও কিছু পার্থক্য আছে।

### প্রধান পার্থক্যগুলো:

- **interface আবার লিখে বাড়ানো যায়**

  - মানে, একই নামে দুই জায়গায় `interface` লিখলে TypeScript সেগুলো জোড়া লাগায়।
  - `type`এর ক্ষেত্রে এটা করলে এরর দেবে।

  ```ts
  interface Person {
    name: string;
  }

  interface Person {
    age: number;
  }
  // এখন Person = { name: string; age: number }
  ```

- **type আবার ডিক্লেয়ার করা যায় না**

  ```ts
  type User = { name: string };
  type User = { age: number }; //  Error
  ```

- **অবজেক্ট/ক্লাসে interface বেশি ব্যবহার করা হয়**

  ```ts
  interface Car {
    brand: string;
    model: string;
  }
  ```

- **type দিয়ে আরও বেশি ধরণের টাইপ বানানো যায়**

  - union
  - tuple
  - primitive

  ```ts
  type ID = string | number;
  type Point = [number, number];
  ```

- **extends vs intersection**

  - interface বাড়ানো হয় `extends` দিয়ে
  - type বাড়ানো হয় `&` দিয়ে

  ```ts
  interface A {
    x: number;
  }
  interface B extends A {
    y: number;
  }

  type A2 = { x: number };
  type B2 = A2 & { y: number };
  ```

---

## ## প্রশ্ন ২: TypeScript-এ `keyof` এর কাজ কী?

`keyof` এমন একটা কিওয়ার্ড, যা কোনো টাইপের **সব property নামগুলো** নিয়ে একটা union টাইপ তৈরি করে।

### উদাহরণ:

```ts
type User = {
  id: number;
  name: string;
  age: number;
};

type UserKeys = keyof User;
// রেজাল্ট: "id" | "name" | "age"
```

### উদাহরণ 2:

```ts
function getValue(obj: User, key: keyof User) {
  return obj[key];
}

const u: User = { id: 1, name: "Rakib", age: 25 };

console.log(getValue(u, "name")); // ঠিক আছে
console.log(getValue(u, "email")); // ভুল, কারণ email নামে কিছু নেই
```
