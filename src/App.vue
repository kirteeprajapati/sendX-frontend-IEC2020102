<!-- App.vue -->
<template>
  <div>
  
    <div class="top-0 sticky">
      
    <GlobalNavigation />
    <FlowNavigation />
    </div>
    <router-view />
    
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
