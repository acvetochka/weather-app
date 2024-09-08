<template>
    <Weather/>

</template>

    
<script>
import {
    defineComponent
} from 'vue';
import Weather from "@/components/Weather";
import { useWeatherStore } from '@/store';

export default defineComponent({
    name: 'Main',
    components: {Weather},
    
    setup() {
        const store = useWeatherStore();
        console.log(store.locations);

        return {

        }
    }
})
</script>

    
<style scoped>

</style>
