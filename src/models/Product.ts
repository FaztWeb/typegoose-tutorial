import {
  getModelForClass,
  modelOptions,
  prop,
  Ref,
  ReturnModelType,
} from "@typegoose/typegoose";
import { User } from "./User";

@modelOptions({
  schemaOptions: {
    _id: false,
  },
})
class Comment {
  @prop()
  text: string;
}

class Product {
  @prop({ required: true })
  name: string;

  @prop({ default: 0 })
  price: number;

  @prop({ lowercase: true })
  url: string;

  @prop({ type: () => [String] })
  tags: string[];

  @prop({ ref: () => User })
  owner: Ref<User>;

  @prop({ type: () => Comment })
  comments: Comment[];

  public static async findByName(
    this: ReturnModelType<typeof Product>,
    name: string
  ) {
    return this.find({ name });
  }

}

const productModel = getModelForClass(Product);
export default productModel;
