import crypto from "crypto";

export const hashage = async (password, salt) => {
  let hash = crypto.createHmac("sha512", salt);
  hash.update(password);
  //console.log("hash", hash.digest("hex"));
  return hash.digest("hex");
};

export const generateSalt = () => {
  return crypto.randomBytes(16).toString("hex");
};

export const compareHash = async (password, hash) => {
  const passwordHash = await hasher(password, process.env.SALT);
  console.log("comparaison entre pass:", passwordHash, "et hash:", hash);
  return passwordHash === hash ? true : false;
};
