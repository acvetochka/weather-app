<template>

    <div>
        <h1>Contact Us</h1>
        <p>if you have any quastions, contact us</p>
        <div v-if="loading">
            <p>Loading...</p>
        </div>
        <div if-else>
            <p><strong>Email:</strong>{{ contactInfo?.email }}</p>
            <p><strong>Phone:</strong>{{ contactInfo?.phone }}</p>
            <p><strong>City:</strong>{{ contactInfo?.city }}</p>
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

export default defineComponent({
    name: "Contacts",
    setup() {
        const loading = ref(true)
        const contactInfo = ref({})

        onMounted(async ()=> {
            try {
                const response = await axios.get("https://jsonplaceholder.typicode.com/users/1")
                contactInfo.value = response.data
                loading.value = false
            } catch(error) {
                console.error(error)
                loading.value = false
            }
        })


        return {
            loading,
            contactInfo

        }
    }
})
</script>

<style scoped>

</style>
