import { Eventing } from "./Eventing";
import { Sync } from "./Sync";
import { Attribute } from "./Attribute";

export interface UserProps {
  name?: string;
  age?: number;
  id?: number;
}
const rootUrl = "http://localhost/users";

export class User {
  public events: Eventing = new Eventing();

  public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);

  public attribute: Attribute<UserProps>;

  constructor(attrs: UserProps) {
    this.attribute = new Attribute<UserProps>(attrs);
  }
}
