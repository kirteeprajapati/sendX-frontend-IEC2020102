<template>
  <Disclosure>
    <nav class="bg-blue p-2 text-white ">
    <div class="flex justify-between items-center px-20">
      <div class="flex items-center sm:justify-start">
        <img src="@/assets/icons/sendX.svg" alt="Your Logo" class="h-8 mr-5">
        <button href="http://localhost:5173/" class="relative mr-3 hover:bg-hoverblue p-3 rounded"> Dashboard </button>
        <CompaignsDropdown v-if="shouldShowCompaignsDropDown"/>
        <AudienceDropDown v-if="shouldShowAudienceDropDown"/>
        <AutomationsDropDown v-if="shouldShowAutomationsDropDown"/>
      </div>
      
      <DisclosurePanel class="sm:hidden">
        <div class="space-y-1 px-2 pb-3 pt-2">
          <DisclosureButton v-for="item in navigation"
          :key="item.name" as="a"
          :href="item.href"
          :class="[item.current ? 'bg-hoverblue text-white' : 'text-white hover:bg-hoverblue hover:text-white', 'block rounded-md px-3 py-2 text-base font-medium']">{{ item.name }}</DisclosureButton>
        </div>
      </DisclosurePanel>

      <div class="flex items-center">

        <div class="flex items-center border-r border-gray-500 p-4">
          <img src="@/assets/icons/plus.svg" alt="Plus Icon" class="h-5 ml-1" />
        </div>
        
        
        <div class="flex items-center space-x-4 border-r pr-4">
          <img src="@/assets/icons/search.svg" alt="Search Icon" class="w-5 ml-5" />
          <img src="@/assets/icons/notification.svg" alt="Notification Icon" class="w-5 ml-1" />
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
import CompaignsDropdown from '../components/CompaignsDropdown.vue';
import AudienceDropDown from '../components/AudienceDropDown.vue';
import AutomationsDropDown from '../components/AutomationsDropDown.vue';
import { Disclosure, DisclosurePanel, DisclosureButton } from '@headlessui/vue';

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
    Disclosure,
    DisclosurePanel,
    DisclosureButton,
  },
};
const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Compaings', href: '#', current: false },
  { name: 'Audience', href: '#', current: false },
  { name: 'Automations', href: '#', current: false },
]
</script>
<style>
</style>
