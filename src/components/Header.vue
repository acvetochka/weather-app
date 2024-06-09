<template>
<header>
    <nav class="nav-header">
        <ul>
            <li v-for="page in pages" :key="page.path">
                <router-link :to="page.path">{{ page.title }}</router-link>
            </li>
        </ul>
        <!-- <ul>
                <li>
                    <router-link to="/">Home</router-link>
                    <router-link to="/products">Products</router-link>
                    <router-link to="/contacts">Contacts</router-link>
                </li>
            </ul> -->
    </nav>
</header>
</template>

<script>
import {
    defineComponent
} from "vue"

export default defineComponent({
    name: "Header",
    setup() {

        const pages = [{
                title: "Home",
                path: "/"
            },
            {
                title: "Products",
                path: "/products"
            },
            {
                title: "Contacts",
                path: "/contacts"
            }
        ]

        return {
            pages
        }
    }
})
</script>

<style scoped>

.nav-header {
    padding: 20px 20px 0 20px;
    max-width: 1200px;
    margin: 0 auto;
    background-color: #fff;
}

.nav-header ul {
    display: grid;
    grid-template-columns: repeat(3,auto);
    gap: 20px;
    justify-content: start;
    justify-items: center;
    align-content: center;
}
</style>
