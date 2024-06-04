<template>
<div class="hello">
    <!-- <h1>{{ msg }}</h1> -->
    <input />
    <ul>
        <li v-for="contact in contacts" :key="contact.id">
            <a :href="contact.src" target="_blank" rel="noopener noreferrer nofollow">{{contact.name }}</a>
        </li>
    </ul>

</div>
</template>

<script>
import {
    defineComponent
} from "vue";

export default defineComponent({
    name: 'Cards',
    props: {
        msg: String
    },
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
        return {
            contacts,
            name
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
