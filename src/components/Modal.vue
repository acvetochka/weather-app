<template>
<div class="modal">
    <div class="modal-content">
        <h3>{{ modalTitle }}</h3>
        <p>{{ modalMessage }}</p>
        <button @click="closeModal">Close</button>
    </div>
</div>
</template>

<script>
import {
    defineComponent,
} from "vue";

export default defineComponent({

    props: {
        modalTitle: String,
        modalMessage: String
    },
    emits: ["close"],
    setup(props, {emit}) {

        function closeModal() {
            emit('close')
        }

        return {
            closeModal

        }
    }
})
</script>

<style>
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,0.5);
}

.modal-content {
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
}
</style>
