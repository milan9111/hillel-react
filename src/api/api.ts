import axios from "axios";
import { ProductsType } from "../helpers/interfaces";

const instance = axios.create({
  baseURL: "https://fakestoreapi.com/",
});

export const productsAPI = {
  getProducts() {
    return instance.get<Array<ProductsType>>(`products`)
    .then((response) => {
      return response.data;
    });
  },
  getOneProduct(id:string | null) {
    return instance.get<ProductsType>(`products/${id}`)
    .then((response) => {
      return response.data;
    });
  },
};

