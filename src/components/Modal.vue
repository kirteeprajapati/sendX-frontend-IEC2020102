<!-- Modal.vue -->
<template>
  <div class="modal-overlay">
    <div class="modal ">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    navigateToDesign() {
      this.$router.push( "/design" ); // Navigate to the "Design" page
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
    margin: 0px;
    padding: 0px;
    border-radius: 4px;
  }
</style>
