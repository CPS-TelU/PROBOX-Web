import axios from "axios";

export const getDashbordApi = (callback) => {
  axios
    .get("https://probox-cps.vercel.app/api/probox")
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
