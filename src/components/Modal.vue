<!-- Modal.vue -->
<template>
  <div class="modal-overlay">
    <div class="modal">
      <!-- Modal content goes here -->
      <slot></slot>

      <button @click="closeModal">Close</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closeModal() {
      this.$emit('close'); // Emit an event to close the modal
    },
  },
};
</script>

<style scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    background: white;
    padding: 20px;
    border-radius: 4px;
  }
</style>
