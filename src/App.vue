<!-- App.vue -->
<template>
  <div>
    <GlobalNavigation />
    <div>
      <div> 
        <FlowNavigation />
      </div>
      <router-view/>
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
