import { User } from "./models/User";

const user = new User({ age: 20, name: "alex" });
user.set({ age: 16 });
console.log(user.get("age"));
