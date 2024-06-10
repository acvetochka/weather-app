<template>
<div>
    <div v-if="loading">
        <p><Loader/></p>
    </div>
    <div v-else>
        <h1>{{ product?.title }}</h1>
        <p>{{ product?.description }}</p>
        <img class="product-image" :src="product?.image" :alt="`image-${id}`">
    </div>
</div>
</template>

<script>
import {
    defineComponent,
    ref,
    onMounted
} from "vue"
import axios from "axios"
import Loader from "@/components/Loader.vue"

export default defineComponent({
    name: "Product",
    props: {
        id: {
            type: String,
            required: true

        }
    },
    components: {Loader},
    setup(props) {

        const product = ref(null)
        const loading = ref(true)

        onMounted(async () => {
            const response = await axios.get(`https://fakestoreapi.com/products/${props.id}`)
            product.value = response.data
            loading.value = false
        })

        return {
            product,
            loading
        }
    }
})
</script>

<style scoped>

.product-image {
    width: 400px;
}
</style>
