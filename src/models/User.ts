import { Eventing } from "./Eventing";
import { Sync } from "./Sync";
import { Attribute } from "./Attribute";
import { AxiosPromise, AxiosResponse } from "axios";

export interface UserProps {
  name?: string;
  age?: number;
  id?: number;
}
const rootUrl = "http://localhost:3000/users";

export class User {
  public events: Eventing = new Eventing();

  public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);

  public attribute: Attribute<UserProps>;

  constructor(attrs: UserProps) {
    this.attribute = new Attribute<UserProps>(attrs);
  }

  get on() {
    return this.events.on;
  }
  get get() {
    return this.attribute.get;
  }
  get trigger() {
    return this.events.trigger;
  }
  set(update: UserProps): void {
    this.attribute.set(update);
    this.events.trigger("change");
  }

  fetch(): void {
    const id = this.attribute.get("id");

    if (typeof id !== "number") {
      throw new Error("Can't fetch without an ID");
    }
    this.sync.fetch(id).then((res: AxiosResponse): void => {
      this.set(res.data);
    });
  }
}
