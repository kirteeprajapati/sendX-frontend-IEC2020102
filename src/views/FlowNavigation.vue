<!-- FlowNavigation.vue -->
<template>
  <nav class="bg-gray-300 p-4 text-black">
    <ul class="flex flex-wrap justify-between">
      <li v-for="step in steps" 
          :key="step" 
          class="mx-1 flex items-center mb-2 sm:mb-0 md:mx-2 md:mb-0 lg:mx-3 lg:mb-0 xl:mx-4 xl:mb-0">
        <router-link :to="`/${step.toLowerCase()}`">{{ step }}</router-link>
        <img v-if="step !== 'Success'" 
        :src="right" 
        alt="Right Arrow Icon" 
        class="h-4 w-4 ml-1 " />
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
