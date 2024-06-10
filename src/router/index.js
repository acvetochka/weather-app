import {createRouter, createWebHistory} from "vue-router";

import Main from "../views/Main.vue"
import ProductList from "../views/ProductList.vue"
import Product from "../views/Product.vue"
import Contacts from "../views/Contacts.vue"
import NewProducts from "../views/NewProducts.vue"
import Photos from "../views/Photos.vue"

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
        path: "/newProducts",
        name: NewProducts,
        component: NewProducts
    },
    {
        path: "/contacts",
        name: Contacts,
        component: Contacts
    },
    {
        path: "/photos",
        name: Photos,
        component: Photos
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router