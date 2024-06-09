<template>
<div>
    <h1>Products</h1>

    <div v-if="loading">
        <p>Loading products...</p>
    </div>
    <div v-else>
        <ul class="products-list">
            <template v-for="product in products" :key="product.id">
                <router-link :to="`/products/${product.id}`">
                    <li>
                        {{ product.title }}
                    </li>
                </router-link>

            </template>
        </ul>
    </div>

</div>
</template>

<script>
import {
    defineComponent,
    ref,
    onMounted
} from "vue";
import axios from "axios";

export default defineComponent({
    name: "ProductList",
    setup() {

        const products = ref({})
        const loading = ref(true)

        onMounted(async () => {
            const response = await axios.get("https://fakestoreapi.com/products")
            products.value = response.data;
            loading.value = false;
        })

        return {
            products,
            loading
        }
    }
})
</script>

<style scoped>
.products-list {
    display: grid;
    grid-template-columns: repeat(3, auto);
    gap: 20px;
}

.products-list li {
    display: grid;
    justify-items: center;
    align-items: center;
    justify-content: center;
    text-align: center;

    height: 100px;
    cursor: pointer;
    border: 1px solid #000;
    border-radius: 5px;
    padding: 20px;

}

.products-list li:hover {
    border: 1px solid #fff;
    background-color: #acabfe;
    color: #fff;
}

a:hover {
    text-decoration: none;
}
</style>
