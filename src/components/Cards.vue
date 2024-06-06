<template>
<div class="hello">
    <!-- <h1>{{ msg }}</h1> -->
    <input />
    <ul>
        <li v-for="contact in contacts" :key="contact.id">
            <a :href="contact.src" target="_blank" rel="noopener noreferrer nofollow">{{contact.name }}</a>
        </li>
    </ul>
    <div>
      <p>Original Price: {{ originalPrice }}</p>
      <input type="number" v-model="discount">
      <p>Discount: {{ discount}}</p>
      <p>Final Price: {{ finalPrice }}</p>
    </div>
    <input type="number" v-model="counter">
   

</div>
<Counter :counter="counter"/>
</template>

<script>
import {
    defineComponent,
    ref,
    computed
} from "vue";
import Counter from "./Card";

export default defineComponent({
    name: 'Cards',
    props: {
        msg: String
    },
    components: {Counter},
    setup() {

        const contacts = [{
                "id": 1,
                "name": "facebook",
                "src": "https://www.facebook.com"
            },
            {
                "id": 2,
                "name": "instagram",
                "src": "https://www.instagram.com/"
            },
            {
                "id": 3,
                "name": "youtube",
                "src": "https://www.youtube.com/"
            },
            {
                "id": 4,
                "name": "tiktok",
                "src": "https://tiktok.com/"
            }
        ]
        const name = "Alona"
        const originalPrice = ref(100)
        const discount = ref(null)
        const counter = ref(0)

        const finalPrice = computed(()=> {
          return originalPrice.value - discount.value
        })
        return {
            contacts,
            name,
            originalPrice,
            discount,finalPrice,
            counter
        }
    }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
