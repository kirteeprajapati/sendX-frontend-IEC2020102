<!-- App.vue -->
<template>
  <div>
    <button @click="showModal">Open Modal</button>

    <modal v-if="isModalVisible" @close="closeModal">
      <!-- Content to display in the modal goes here -->
      <h2>Modal Content</h2>
      <p>This is the content of the modal.</p>
    </modal>
  </div>
</template>

<script>
import Modal from './Modal.vue';

export default {
  components: {
    Modal,
  },
  data() {
    return {
      isModalVisible: false,
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
  },
};
</script>
