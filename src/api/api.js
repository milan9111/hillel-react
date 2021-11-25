import * as axios from "axios";

const instance = axios.create({
  baseURL: "https://fakestoreapi.com/",
});

export const productsAPI = {
  getProducts() {
    return instance.get(`products`)
    .then((response) => {
      return response.data;
    });
  },
  getOneProduct(id) {
    return instance.get(`products/${id}`)
    .then((response) => {
      return response.data;
    });
  },
};

