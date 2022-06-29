import { User } from "./models/User";

const user = new User({ age: 20, name: "alex" });
console.log(user.get("age"));
