export interface User extends Document {
  username: string;
  password: string;
  name: string;
  email: string;
}
