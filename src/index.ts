import { User } from "./models/User";

const user = new User({ age: 20, name: "alex" });
user.set({ age: 16 });

user.on("click", () => {
  console.log("Event");
});

user.trigger("cli");
