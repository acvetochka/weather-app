import {defineStore} from "pinia";
import axios from "axios";

export const useProductStore = defineStore({
    id: 'product',
    state: () => ({
        products: [],
        loading: true,
    }),
    actions: {
        async fetchProducts(){
            const limit = 10;
            const response = await axios.get(`https://dummyjson.com/products?limit=${limit}`);
            this.products = response.data.products;
            this.loading = false;
        },
        addProduct(product) {
            this.products.push(product);
        },
        removeProduct(productId) {
            this.products = this.products.filter((product) => product.id !== productId)
        },
        sortProducts() {
            this.products = this.products.sort((a,b)=> a.price - b.price)
        }
    }
})
