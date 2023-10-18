<!-- Design.vue -->
<template>
  <div>
    <h2>Design Screen</h2>
    <!-- Form for design options -->
    <form class="grid grid-cols-3 gap-2 w-full max-w-screen-sm">
      <div>
        <input class = "hidden" id="radio_1" type="radio" name="radio" checked>
        <label class="flex flex-col p-4 border-2 border-gray-400 cursor-pointer" for="radio_1">
          <span class="text-xs font-semibold uppercase">Small</span>
          <span class="text-xl font-bold mt-2">$10/mo</span>
          <ul class="text-sm mt-2">
            <li>Thing 1</li>
            <li>Thing 2</li>
          </ul>
        </label>
      </div>
      <div>
        <input class = "hidden" id="radio_2" type="radio" name="radio">
        <label class="flex flex-col p-4 border-2 border-gray-400 cursor-pointer" for="radio_2">
          <span class="text-xs font-semibold uppercase">Medium</span>
          <span class="text-xl font-bold mt-2">$40/mo</span>
          <ul class="text-sm mt-2">
            <li>Thing 1</li>
            <li>Thing 2</li>
          </ul>
        </label>
      </div>
      <div>
        <input class = "hidden" id="radio_3" type="radio" name="radio">
        <label class="flex flex-col p-4 border-2 border-gray-400 cursor-pointer" for="radio_3">
          <span class="text-xs font-semibold uppercase">Big</span>
          <span class="text-xl font-bold mt-2">$100/mo</span>
          <ul class="text-sm mt-2">
            <li>Thing 1</li>
            <li>Thing 2</li>
          </ul>
        </label>
      </div>
    </form>
  </div>
</template>
