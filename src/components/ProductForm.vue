<template>
    <form @submit.prevent="handleSubmit">
        <p>Create Product</p>
        <div class="inputs-container">
            <div class="title-block">
                <label for="title">Title:</label>
                <input id="title" type="text" v-model="title">
            </div>
            <div class="price-block">
                <label for="price">Price:</label>
                <input id="price" type="text" v-model="price">
            </div>

        </div>
        <button type="submit">Add Product</button>

    </form>

</template>

<script>
import {defineComponent, ref} from "vue"

export default defineComponent ({
    emits: ['product-added'],
    setup(_,{emit}){

        const title = ref('')
        const price = ref('')


        const handleSubmit = () => {
            emit('product-added', {title: title.value, price: Number(price.value), id: "@"})
            title.value = ""
            price.value = ""
        }

        return {
            title, 
            price, 
            handleSubmit

        }
    }
})
</script>


<style scoped>


</style>