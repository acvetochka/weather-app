<template>
<div class="custom-layout">
    <slot></slot>
</div>
</template>

    
<script>
import {
    defineComponent
} from "vue"

export default defineComponent({
    name: "CustomLayout",
    setup() {

        return {

        }
    }
})
</script>

    
<style scoped>
.custom-layout {
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
}
    </style>
