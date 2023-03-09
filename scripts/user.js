const connectMongo = require("../lib/connectMongo");
const User = require("../lib/models/User");

//REQUIRE THE NEW FILE THAT YOU WANT TO IMPORT IN THE DB
const wl = require("../files/jsonWL1.json");

const getAllUsers = async () => {
  try {
    const user = await User.find();
    return user;
  } catch (err) {
    throw new Error(`No entry found with address: ${address}`);
  }
};

const getUser = async (address) => {
  try {
    const user = await User.findOne({
      address: address,
    });
    console.log("USER ", user);
    return user;
  } catch (err) {
    throw new Error(`No entry found with address: ${address}`);
  }
};

const createUser = async (address) => {
  let userToCreate = {
    address,
  };

  try {
    await connectMongo();
    const newUser = new User(userToCreate);
    let save = await newUser.save();
    console.log(save);
    return save;
  } catch (err) {
    throw new Error(`Error when trying to create user: ${err}`);
  }
};

const createUsers = async (userArray) => {
  for (const address of userArray) {
    try {
      await createUser(address);
    } catch (err) {
      console.error("REASON: ", err);
    }
  }
};

let manyUsers = [
  "0xEd42a25A7fDE348473e57DB6DB4B86893b7B845B",
  "0x5Cde4143037FC3Ee8a1F86944389711652d69b04",
];

let singleUser = "0xde10FeE962e8D7392F2Fb46bE9964dC50b5A559B";
(async () => {
  await connectMongo();
  //UNCOMMENT BELOW IF YOU WANT TO GET USERS
  let result = await getAllUsers();

  // UNCOMMENT BELOW IF YOU WANT TO GET USER BY ADDRESS
  //   let address = "0xEd42a25A7fDE348473e57DB6DB4B86893b7B845B";
  //   let result = await getUser(address);

  //   UNCOMMENT BELOW IF YOU WANT TO CREATE A NEW CONFIG
  // let result = await createUser(singleUser);

  //UNCOMMENT BELOW TO CREATE MULTIPLE USERS AT THE SAME TIME
  // let result = await createUsers(wl);

  console.log("RESULT FROM user.js", result);
})();
