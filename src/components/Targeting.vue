<template>
  <div class="flex justify-center items-center relative top-20">
    <button class="bg-green p-2 rounded-md" @click="navigateToBehavior">Move To behavior Screen</button>

  </div>
  
</template>

<script>

export default {
  data() {
    return {
      isModalVisible: false,
    };
  },
  methods: {
    navigateToBehavior() {
      this.$router.push( "/behavior" ); // Navigate to the "Design" page
    },
  },
};
</script>
