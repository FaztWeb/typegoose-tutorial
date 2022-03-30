import { connect } from "mongoose";
import User from "./models/User";
import Role from "./models/Role";
import Product from "./models/Product";

async function main() {
  const db = await connect("mongodb://localhost/typegoosedb");
  console.log("Connected to: ", db.connection.name);

  // creating a user
  // const user = await User.create({
  //   firstname: "John",
  //   lastname: "Doe",
  //   password: "123456",
  //   email: "john@gmail.com",
  // });
  // console.log(user);

  // find all users
  // const users = await User.find();
  // console.log(users)

  // find user by id
  // const user = await User.findById("6243c83c92f9347aa18db288");

  // update user by id
  // const user = await User.findByIdAndUpdate(
  //   "6243c83c92f9347aa18db288",
  //   {
  //     firstname: "Ryan",
  //   },
  //   { new: true }
  // );
  // console.log(user);

  // delete user by id
  // const user = await User.findByIdAndDelete("6243c83c92f9347aa18db288");
  // console.log(user)

  // roles
  // const result = await Role.insertMany([
  //   { name: "admin" },
  //   { name: "user" },
  //   { name: "guest" },
  // ]);
  // console.log(result);

  // create a user with role
  // const newUser = await User.create({
  //   firstname: "John",
  //   lastname: "Doe",
  //   password: "123456",
  //   email: "john@email.com",
  //   role: ["6243cc2ef04e53a3402567ae", "6243cc2ef04e53a3402567af"],
  // })

  // const userPopulated = await newUser.populate("role");

  // const newProduct = new Product({
  //   name: "mouse",
  //   price: 300,
  //   url: "mouse-gaming",
  //   tags: ["electronics", "computer"],
  //   owner: "6243cc1aeb3466f4226251a5"
  // });
  // const productSaved = await newProduct.save();
  // console.log(productSaved);

  // const product = await Product.findById("6243cea4e5e18ed01a35fe77").populate(
  //   "owner"
  // );

  // const product = await new Product({
  //   name: "mouse",
  //   price: 300,
  //   url: "mouse-gaming",
  //   tags: ["electronics", "computer"],
  //   owner: "6243cc1aeb3466f4226251a5",
  //   comments: [
  //     {
  //       text: "this is a comment",
  //     },
  //     {
  //       text: "awesome product",
  //     },
  //   ],
  // });
  // console.log(product);

  // static methods
  // const products = await Product.findByName("laptop")
  // console.log(products)

  // instance methods

  const user = new User({
    firstname: "John",
    lastname: "Doe",
    email: "someuser@gmail.com",
    password: "123456",
  });

  await user.encryptPassword(user.password);
  console.log(user)
  // await user.save()
  // console.log(userSaved);
}

main();
