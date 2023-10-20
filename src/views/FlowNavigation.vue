<!-- FlowNavigation.vue -->
<template>
  <nav class="bg-gray-100 p-4 text-black mx-7 sm:mx-4 md:mx-2 lg:mx-7 xl:mx-10">
  <ul class="flex justify-between flex-wrap sm:flex-no-wrap">
    <li v-for="step in steps" :key="step" class="mx-1 flex items-center mb-2">
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
