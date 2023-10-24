<!-- FlowNavigation.vue -->
<template>
  <nav class="bg-white py-2 text-black padding-x ">
  <ul class="flex space-x-1 justify-end">
    <li v-for="step in steps" :key="step" class="flex text-xs md:text-base items-center mb-2 hover:text-blue active:text-blue">
      <router-link :to="`/${step.toLowerCase()}`">{{ step }}</router-link>
      <img v-if="step !== 'Success'" :src="right" alt="Right Arrow Icon" class="h-4 ml-1" />
    </li>
  </ul>
</nav>

</template>
<script>
import * as Icons from '@/assets/icons';
const { right, down } = Icons;
import Modal from '../components/Modal.vue'
export default {
  data() {
    return {
      steps: ["Type", "Design", "Content", "Targeting", "Behavior", "Success"],
      right: right,
      down: down,
    };
  },
   methods: {
    showModal() {
      this.isModalVisible = true;
    },
    
  },
};
</script>
