<template>
<div v-if="!loading" class="content">
    <h1 class="text">Gallery</h1>

    <div class="gallery">
        <div v-for="photo in photos" :key="photo.id" class="photo">
            <img :src="photo.thumbnailUrl" :alt="photo.title">
            <p>{{ photo.title }}</p>
        </div>
    </div>
</div>
<Loader v-else />
</template>

<script>
import {
    defineComponent,
    ref,
    watchEffect
} from "vue";
import Loader from "@/components/Loader.vue";
import {
    fetchPhotos
} from "@/api/fetchData";

export default defineComponent({
    components: {
        Loader
    },
    props: {
        page: {
            type: Number,
            required: true
        },
        limit: {
            type: Number,
            required: true
        }
    },
    setup(props) {
        const photos = ref([])
        const loading = ref(true)

        const loadPhotos = async () => {
            photos.value = await fetchPhotos(props.page, props.limit)
            loading.value = false;
        }

        watchEffect(() => {
            loadPhotos()
        })

        return {
            photos,
            loading,
        }
    }
})
</script>

<style scoped>
.gallery {
    padding: 0 20px 20px 20px;
    display: grid;
    grid-template-columns: repeat(5, 200px);
    align-items: start;
    justify-content: center;
    gap: 40px 20px;
}

.photo {
    display: grid;
    justify-items: center;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 205px;
    overflow-y: scroll;
}

.photo p {
    min-width: 140px;
}

.text {
    text-align: center;
}
</style>
