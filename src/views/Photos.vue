<template>
    <div v-if="!loading">
        <Gallery :limit="perPage" :page="currentPage" />
        <Paggination :on-change-page="handleChangePage" :current-page="currentPage" :page-count="pageCount" />
    </div>
    <Loader v-else />
</template>

<script>



import Gallery from "@/components/Gallery"
import Paggination from "@/components/Paggination"
import {
    fetchAllPhotos
} from "@/api/fetchData"
import Loader from "@/components/Loader.vue"

import {
    defineComponent,
    onMounted,
    ref,
    computed
} from "vue"

export default defineComponent({
    name: "Photos",
    components: {
        Loader,
        Gallery,
        Paggination
    },
    setup() {

        const currentPage = ref(0)
        const perPage = ref(15)
        const photosCount = ref(0)

        const loading = ref(true)

        const handleChangePage = (page) => {
            currentPage.value = page;
        }

        const pageCount = computed(() => {
            return Math.ceil(photosCount.value / perPage.value)
        })

        onMounted(() => {
            fetchAllPhotos()
                .then((data) => {
                    photosCount.value = data.length;
                    loading.value = false
                })
                .catch((error)=> {
                    console.error(error)
                })
        })

        console.log(fetchAllPhotos().data);

        return {
            currentPage,
            perPage,
            photosCount,
            loading,
            handleChangePage,
            pageCount

        }
    }
})
</script>

<style scoped>

</style>
