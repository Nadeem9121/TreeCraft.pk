import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@email.com",
    password: bcrypt.hashSync("123456", 10),
    IsAdmin: true,
  },
  {
    name: "John Doe",
    email: "john@email.com",
    password: bcrypt.hashSync("123456", 10),
    IsAdmin: false,
  },
  {
    name: "Jane Doe",
    email: "jane@email.com",
    password: bcrypt.hashSync("123456", 10),
    IsAdmin: false,
  },
];

export default users;
