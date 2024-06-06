<template>
    
<div class="main-block">
    <button @click="showModal">Show Modal Window</button>
    <br/>
    <label for="modalTitle">Title</label>
    <input type="text" id="modalTitle" v-model="modalTitle">
    <br/>
    <label for="modalMessage">Message</label>
    <input type="text" id="modalMessage" v-model="modalMessage">
    <br/>
    <Modal v-if="isModalOpen" :modal-title="modalTitle" :modal-message="modalMessage" @close="closeModal"/>
</div>

</template>

<script>
import {
    defineComponent,
    ref
} from "vue";
import Modal from "./Modal"

export default defineComponent({

    components: {Modal},
    setup() {

        const isModalOpen = ref(false);
        const modalTitle = ref('');
        const modalMessage = ref('');

        function showModal() {
            isModalOpen.value = true;
            if(!modalTitle.value) {
                modalTitle.value = "Default Title";
            }

            if(!modalMessage.value) {
                modalMessage.value = "Default Message"
            }
            
            
        }

        
        function closeModal() {
            isModalOpen.value = false;
            modalTitle.value = "";
            modalMessage.value = ""
        }

        return {
            isModalOpen,
            modalTitle,
            modalMessage,
            showModal,
            closeModal

        }
    }
})
</script>

<style>

</style>