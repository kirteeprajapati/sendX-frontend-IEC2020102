<template>
  <Disclosure>
    <nav class="bg-blue text-white padding-x flex justify-between py-2">
      <div class="flex items-center justify-start max-md:hidden">
        <img src="@/assets/icons/sendX.svg" alt="Your Logo" class="h-8 pr-2" />
        <button class="hover:bg-hoverblue p-3 transition duration-300 rounded">Dashboard</button>
        <CompaignsDropdown v-if="shouldShowCompaignsDropDown" />
        <AudienceDropDown v-if="shouldShowAudienceDropDown" />
        <AutomationsDropDown v-if="shouldShowAutomationsDropDown" />
      </div>
      <div class="flex items-center space-x-5">
        <div class="sm:hidden">
          <div @click="toggleMenu" class="w-8">
            <img
              src="@/assets/icons/menuwhite.svg"
              alt="menu icon"
              class="w-8 hidden max-md:block"
            />
          </div>

          <div class="absolute flex flex-col" v-if="isMenuOpen">
            <button class="bg-blue hover:bg-hoverblue p-3 transition duration-300 rounded">
              Dashboard
            </button>
            <CompaignsDropdown v-if="shouldShowCompaignsDropDown" />
            <AudienceDropDown v-if="shouldShowAudienceDropDown" />
            <AutomationsDropDown v-if="shouldShowAutomationsDropDown" />
          </div>
        </div>
        <img src="@/assets/icons/sendX.svg" alt="Your Logo" class="h-8 pr-2 hidden max-md:block" />
      </div>
      <div class="flex justify-end items-center">
        <div class="flex items-center p-4">
          <img src="@/assets/icons/plus.svg" alt="Plus Icon" class="h-5 ml-1" />
        </div>

        <div class="flex items-center h-full space-x-4 border-r border-l border-graymedium px-4">
          <img src="@/assets/icons/search.svg" alt="Search Icon" class="w-5" />
          <img src="@/assets/icons/notification.svg" alt="Notification Icon" class="w-5" />
          <img src="@/assets/icons/launchpad.svg" alt="Launchpad Icon" class="h-5 w-5" />
        </div>

        <div class="ml-6">
          <button class="relative w-7 h-7 rounded-full overflow-hidden bg-blue-700">
            <img
              src="@/assets/images/profile.jpeg"
              alt="Profile Icon"
              class="w-full h-full object-cover"
            />
          </button>
        </div>
      </div>
    </nav>
  </Disclosure>
</template>

<script>
import CompaignsDropdown from '../components/CompaignsDropdown.vue'
import AudienceDropDown from '../components/AudienceDropDown.vue'
import AutomationsDropDown from '../components/AutomationsDropDown.vue'
import { Disclosure, DisclosurePanel, DisclosureButton } from '@headlessui/vue'

export default {
  data() {
    return {
      shouldShowCompaignsDropDown: true,
      shouldShowAudienceDropDown: true,
      shouldShowAutomationsDropDown: true,
      isMenuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    }
  },
  components: {
    CompaignsDropdown,
    AudienceDropDown,
    AutomationsDropDown,
    Disclosure,
    DisclosurePanel,
    DisclosureButton
  }
}

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Compaings', href: '#', current: false },
  { name: 'Audience', href: '#', current: false },
  { name: 'Automations', href: '#', current: false }
]
</script>
