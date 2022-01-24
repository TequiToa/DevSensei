import userModel from "../models/userModel.js";
import { hashage } from "../Utils/hash.js";

export const test = async () => {
  const newUser = new userModel({
    username: "test",
    password: "test",
    mail: "test@test.com",
  });

  const creation = await newUser.save();
  console.log(creation);
};

//register -- create user
//?  Permet d'enregistrer un user dans la bdd.
export const registerUser = async (req, res) => {
  try {
    const { userData } = req.body;
    console.table(userData);

    //sécuriser les données

    //vérifié si user existe deja
    const isUsernamefind = await userModel.findOne({
      username: userData.username,
    });

    const isMailfind = await userModel.findOne({ mail: userData.mail });
    if (isUsernamefind !== null || isMailfind !== null)
      throw new Error("Identifiant ou Mail déja utilisé");
    //hashage du mdp
    const mdp = hashage(userData.password, process.env.SALT);
    //user
    const newUser = { ...userData, password: mdp };
    //Ajout a la bdd
    const creation = await newUser.save();

    res.status(201).json({
      status: "Success",
    });
  } catch (error) {
    console.log(error.message);

    res.status(500).json({
      status: "Error",
      error: error.message,
    });
  }
};

//login -- read user
//?  Permet d'authentifier un user apres vérification dans la bdd.
export const loginUser = async (req, res) => {
  try {
    const { userData } = req.body;

    res.status(201).json({
      status: "Success",
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      status: "Error",
      error: error.message,
    });
  }
};

//getAllUser-- read user
//?  Permet de récupérer un json avec tout les user dans la bdd.
export const getAllUser = async (req, res) => {
  try {
    const { username } = req.query;

    res.status(201).json({
      status: "Success",
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      status: "Error",
      error: error.message,
    });
  }
};

//patch -- update user
//?  Permet de modifier des propriétées d'un user dans la bdd.
export const patchUser = async (req, res) => {
  try {
    const { userData } = req.body;

    res.status(201).json({
      status: "Success",
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      status: "Error",
      error: error.message,
    });
  }
};

//delete --delete user
//?  Permet de supprimer un user dans la bdd.
export const deleteUser = async (req, res) => {
  try {
    const { username } = req.query;

    res.status(201).json({
      status: "Success",
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      status: "Error",
      error: error.message,
    });
  }
};
