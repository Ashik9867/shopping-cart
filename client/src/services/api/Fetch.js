import axios from "axios";

export async function fetchApi() {
  return axios
    .get("/api/products")
    .then((response) => {
      const data = response.data;
      console.log(data);
      return data;
    })
    .catch((error) => console.log(error));
}