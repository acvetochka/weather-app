<template>
<div class="parent-component">
    <h2>Parent Component</h2>
    <ChildComponent>
        <template v-slot:title>Child Component Title</template>
        <p>Child Component Content Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nisi deserunt facere assumenda debitis sequi aut libero nulla quis in officiis corrupti, rerum, nam perferendis amet iure? Perferendis, cupiditate cum.</p>
    </ChildComponent>
</div>
</template>

<script>
import {
    defineComponent
} from "vue";
import ChildComponent from "./ChildComponent"

export default defineComponent({
    name: "ParentComponent",
    components: {
        ChildComponent
    },
    setup() {

        return {

        }
    }
})
</script>

<style>

</style>
