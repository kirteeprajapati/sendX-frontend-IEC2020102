<template>
  <div class="h-screen">
    <nav class="bg-graynav text-white1 padding-x-nav flex justify-between p-2 space-x-2 items-center">
      <div class="flex space-x-2 items-center">
        <img src="@/assets/icons/back.svg" alt="back" class="w-4">
        <button class="hidden sm:block">Back</button>
      </div>

      <div class="sm:hidden justify-center flex items-center space-x-2 underline underline-offset-8">
        <div id="dateAndTime" class="text-base text-white1"  >New {{ dateAndTime }}</div> 
        <img src="@/assets/icons/edit.svg" alt="edit icon" class="h-4" @click="updateDateTime">
      </div>

      <button class="px-4 py-2 max-md:hidden bg-green rounded-md text-sm sm:px-6 sm:py-3 sm:text-base md:px-8 md:py-4 md:text-lg lg:text-xl  hover:bg-greenDark transition ring-1 hover:ring-white duration-300">
        Save & Continue
      </button>
      <button class="px-4 py-2 hidden max-md:block bg-green rounded-md text-sm sm:px-6 sm:py-3 sm:text-base md:px-8 md:py-4 md:text-lg lg:text-xl">
        <img src="@/assets/icons/save.svg">
      </button>
    </nav>
      <div>
        <div class="flex md:flex md:flex-grow flex-row-reverse space-x-1">
          <a href="" class="py-4 px-2 text-teal-500 border-b-4 border-teal-300 font-semibold">Home</a>
          <a href="" class="py-4 px-2 text-gray-500 font-semibold hover:text-teal-300 transition duration-300">Services</a>
          <a href="" class="py-4 px-2 text-gray-500 font-semibold hover:text-teal-300 transition duration-300">About</a>
          <a href="" class="py-4 px-2 text-gray-500 font-semibold hover:text-teal-300 transition duration-300">Contact Us</a>
        </div>
      </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable';

export default {
  data() {
    return {
      dateAndTime: 'Date and time',
    };
  },
  methods: {
    updateDateTime() {
      const now = new Date();

      const day = now.getDate();
      const month = now.toLocaleString('default', { month: 'short' });
      const year = now.getFullYear();
      const hours = now.getHours().toString().padStart(2, '0'); // Ensure 2-digit format
      const minutes = now.getMinutes().toString().padStart(2, '0'); // Ensure 2-digit format

      this.dateAndTime = `${day} ${month} ${year}, ${hours}:${minutes}`;
    },
  },
  mounted() {
    // Initial update of date and time
    this.updateDateTime();
  },
};
</script>


