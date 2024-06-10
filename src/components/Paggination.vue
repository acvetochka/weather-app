<template>
    
    <div class="paggination">
        <button :disabled="currentPage === 1" @click="handleChangePage(currentPage -1)" >Previous</button>
        <button v-if="showFirstEllipsis" @click="handleChangePage(1)">1</button>
        <span v-if="showFirstEllipsis">...</span>
        <button v-for="pageNumber in visiblePageNumbers" :key="pageNumber" @click="handleChangePage(pageNumber)" :class="{active: currentPage === pageNumber}">{{ pageNumber }}</button>
        <span v-if="showLastEllipsis">...</span>
        <button v-if="showLastEllipsis" @click="handleChangePage(pageCount)">{{ pageCount }}</button>
        <button :disabled="currentPage === pageCount" @click="handleChangePage(currentPage + 1)">Next</button>
      
    </div>
    <!-- <Loader v-else/> -->

</template>

<script>
import {
    defineComponent,
    computed,
    watch

} from "vue";
// import Loader from "@/components/Loader.vue"


export default defineComponent({
    props: {
        pageCount: {
            type: Number,
            required: true
        },
        currentPage: {
            type: Number,
            required: true
        },
        onChangePage: {
            type: Function,
            required: true
        },

    },

    setup(props) {

        const visiblePageNumbers = computed(()=> {
            const result = [];
            let startPage = Math.max(props.currentPage - 5, 1);
            let endPage = Math.min(startPage + 9, props.pageCount);
            if(endPage - startPage < 9) {
                startPage = Math.max(endPage - 9, 1);
            }
            for (let i = startPage; i <= endPage; i++) {
                result.push(i);

            }
            return result;
        })

        const showFirstEllipsis = computed(()=> {
            return visiblePageNumbers.value[0]> 1;
        })

        const showLastEllipsis = computed(()=> {
            return visiblePageNumbers.value[visiblePageNumbers.value.length - 1] <props.pageCount
        })

        const handleChangePage = (pageNumber) => {
            if(pageNumber < 1 || pageNumber > props.pageCount) {
                return;
            }
            props.onChangePage(pageNumber)
        }

        watch(()=> props.currentPage, ()=> {
            if(visiblePageNumbers.value.indexOf(props.currentPage)=== -1) {
                handleChangePage(props.currentPage)
            }
        })



        return {
            visiblePageNumbers,
            showFirstEllipsis,
            showLastEllipsis,
            handleChangePage

        }
    }
})
</script>

<style scoped>
.active {
    background-color: lightgray;
    border-width: 1px;
    border-radius: 2px;
    padding: 2px 8px;
}

.paggination {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: flex-end;
    gap: 5px;
}

.paggination button {
    cursor: pointer;
}

.paggination button:disabled {
    background-color: lightgray;
    cursor: auto;
}

</style>