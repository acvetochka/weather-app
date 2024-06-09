<template>
<Header />

<CustomLayout>
    <router-view />
</CustomLayout>
<!-- <img alt="Vue logo" src="./assets/logo.png"> -->
<!-- <Cards msg="Welcome to Your Vue.js App" name="" />
<Counter />
<ParentComponent /> -->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import {
    defineComponent
} from 'vue';
import Header from "@/components/Header.vue";
import CustomLayout from "@/components/MainLayout.vue"
// import Cards from "@/components/Cards.vue";
// import Counter from "@/components/Counter.vue";
// import ParentComponent from "@/components/ParentComponent.vue";
export default defineComponent({
    name: 'App',
    components: {
        CustomLayout,
        Header,
        // Cards,
        // Counter,
        // ParentComponent
    },

    setup() {

        return {

        }
    }
})
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

ul {
  list-style: none;
  padding: 0;
}

a {
  color: black;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
