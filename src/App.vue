<!-- App.vue -->
<template>
  <div>
    <GlobalNavigation />
    <div>
      <div class="flex justify-end"> 
        <FlowNavigation />
      </div>
      <router-view class="p-20"/>
    </div>
  </div>
</template>

<script>
import GlobalNavigation from "@/views/GlobalNavigation.vue";
import FlowNavigation from "@/views/FlowNavigation.vue";

export default {
  components: {
    GlobalNavigation,
    FlowNavigation,
  },
};
</script>
