<!-- FlowNavigation.vue -->
<template>
  <nav class="bg-gray-100 py-2 text-black padding-x ">
  <ul class="flex space-x-2 justify-end flex-wrap">
    <li v-for="step in steps" :key="step" class="flex items-center mb-2">
      <router-link :to="`/${step.toLowerCase()}`">{{ step }}</router-link>
      <img v-if="step !== 'Success'" :src="right" alt="Right Arrow Icon" class="h-4 ml-1" />
    </li>
  </ul>
</nav>

</template>
<script>
import * as Icons from '@/assets/icons';
const { right, down } = Icons;

export default {
  data() {
    return {
      steps: ["Type", "Design", "Content", "Targeting", "Behavior", "Success"],
      right: right,
      down: down,
    };
  },
};
</script>
