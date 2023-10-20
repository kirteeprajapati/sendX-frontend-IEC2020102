<template>
  <Disclosure>
    <nav class="bg-blue-700 p-4 text-white">
    <div class="flex justify-between items-center">
      <div class="flex flex-wrap items-center sm:items-streach sm:justify-start space-x-3 pl-1 sm:pl-5 md:pl-10 lg:pl-8 xl:pl-10">
        <img src="@/assets/icons/sendX.svg" alt="Your Logo" class="h-8">
        <button class="relative mr-3"> Dashboard </button>
        <CompaignsDropdown v-if="shouldShowCompaignsDropDown"/>
        <AudienceDropDown v-if="shouldShowAudienceDropDown"/>
        <AutomationsDropDown v-if="shouldShowAutomationsDropDown"/>
      </div>

      <div class="flex items-center pr-10">

        <div class="flex items-center border-r pr-4">
          <img src="@/assets/icons/plus.svg" alt="Plus Icon" class="h-5 w-5 ml-1" />
        </div>
        
        
        <div class="flex items-center space-x-4 border-r pr-4">
          <img src="@/assets/icons/search.svg" alt="Search Icon" class="h-5 w-5 ml-5" />
          <img src="@/assets/icons/notification.svg" alt="Notification Icon" class="h-5 w-5 ml-1" />
          <img src="@/assets/icons/launchpad.svg" alt="Launchpad Icon" class="h-5 w-5 ml-1" />
        </div>
        <!-- Section 3: Profile Button -->
        <div class="ml-6">
          <button class="relative w-7 h-7 rounded-full overflow-hidden bg-blue-700">
            <img src="@/assets/images/profile.jpeg" alt="Profile Icon" class="w-full h-full object-cover">
          </button>
        </div>
      </div>
    </div>
  </nav>
  </Disclosure>
</template>

<script>
import CompaignsDropdown from '../components/compaignsdropdown.vue';
import AudienceDropDown from '../components/AudienceDropDown.vue';
import AutomationsDropDown from '../components/AutomationsDropDown.vue';

export default {
  data() {
    return {
      shouldShowCompaignsDropDown: true,
      shouldShowAudienceDropDown: true,
      shouldShowAutomationsDropDown: true,
    };
  },
    components: {
      CompaignsDropdown,
      AudienceDropDown,
      AutomationsDropDown,
  },
};
</script>
<style>
</style>
