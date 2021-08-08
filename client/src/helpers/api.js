import axios from "axios";

const getProducts = () =>
  new Promise((resolve, reject) => {
    axios.get("/api/get-products").then((response) => resolve(response.data));
  });

export { getProducts };
