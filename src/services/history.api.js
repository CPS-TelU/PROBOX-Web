import axios from "axios";

export const getHistoryApi = (callback) => {
  axios
    .get("https://probox-cps.vercel.app/api/probox/history")
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
