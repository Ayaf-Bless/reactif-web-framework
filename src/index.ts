import { User } from "./models/User";

const user = new User({ id: 1 });
user.set({ name: "monica" });
user.save();

const user2 = new User({ name: "ross" });
user2.save();

user.fetch();
