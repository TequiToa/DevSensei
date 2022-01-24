import axios from "axios";

const serverUrl = process.env.SERVER_ADRESS || "localhost:5000";

const registerUrl = serverUrl + "/register";

export const register = async (userData) => {
  try {
    const res = await axios.post(
      registerUrl,
      { userData: userData },
      { "Content-Type": "application/json" }
    );

    console.log("✅ Creation d'un nouvel user ! ");
    return res.data.status;
  } catch (error) {
    console.error("❌ Probleme lors de creation du compte: ", error.status);
  }
};
