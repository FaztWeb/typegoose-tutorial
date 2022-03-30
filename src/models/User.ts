import {
  DocumentType,
  getModelForClass,
  prop,
  Ref,
} from "@typegoose/typegoose";
import bcrypt from "bcryptjs";
import { Role } from "./Role";

export class User {
  @prop({ required: true }) // mongoose
  firstname: string; // ts

  @prop({ required: true })
  lastname: string;

  @prop({ required: true })
  public password: string;

  @prop()
  email: string;

  @prop({ ref: () => Role })
  role: Ref<Role>[];

  public async encryptPassword(this: DocumentType<User>, password: string) {
    this.password = await bcrypt.hash(this.password, 10);
  }
}

const UserModel = getModelForClass(User);
export default UserModel;
