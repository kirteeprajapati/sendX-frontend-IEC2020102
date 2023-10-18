<template>
  <Disclosure>
      <nav class="bg-blue-700 p-4 text-white">
    <div class="flex justify-between items-center">
      <div class="flex flex-1 items-center sm:items-streach sm:justify-start">
        <div class="mr-6">
          <img src="@/assets/icons/sendX.svg" alt="Your Logo" class="h-8 w-8">
        </div>
        <button class="relative mr-3">
          Dashboard
        </button>
        <button class="mr-3 flex items-center">
          Campaigns <img src="@/assets/icons/down.svg" class="w-5" alt="Down Icon" />
        </button>
        <button class="mr-3 flex items-center">
          Audience <img src="@/assets/icons/down.svg" class="w-5" alt="Down Icon" />
        </button>
        <button class="mr-3 flex items-center">
          Automations <img src="@/assets/icons/down.svg" class="w-5" alt="Down Icon" />
        </button>
      </div>
      <div class="flex items-center">
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
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'

export default {
  data() {
    return {};
  },
};
</script>
<style>
</style>
