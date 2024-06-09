import {createRouter, createWebHistory} from "vue-router";

import Main from "../views/Main.vue"
import ProductList from "../views/ProductList.vue"
import Product from "../views/Product.vue"
import Contacts from "../views/Contacts.vue"

const routes = [
    {
        path: "/",
        name: Main,
        component: Main
    },
    {
        path: "/products",
        name: ProductList,
        component: ProductList
    },
    {
        path: "/products/:id",
        name: Product,
        component: Product,
        props: true
    },
    {
        path: "/contacts",
        name: Contacts,
        component: Contacts
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router