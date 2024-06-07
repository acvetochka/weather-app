<template>
    
<div class="child-component">
    <h2>
        <slot name="title"></slot>
    </h2>
    <div>
        <slot></slot>
    </div>

</div>

</template>

<script>
import {
    defineComponent
} from "vue";

export default defineComponent({
    name: "ChildComponent",

    setup() {

        return {

        }
    }
})
</script>

<style>

</style>