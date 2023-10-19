<!-- Type.vue -->
<template>
  <div>
    <h2>Type Screen</h2>
   
	<!-- Component Start -->
  <div class="pb-10">
    <h2>Select form type</h2>
    <h4>What kind of form would you like to create?</h4>
  </div>

  <div>
    <form class="grid grid-cols-3 gap-2 w-full max-w-screen-sm">
      <label class="flex flex-col p-4 border-2 border-gray-400 cursor-pointer" for="radio_1">
         <div class="flex justify-end" >
          <input id="radio_1" type="radio" name="radio" checked>
        </div>
        <img src="@/assets/images/EmbededForm.png" alt="Form type image">
          <span class="text-xl font-semibold">Embeded Page</span>
          <span class="text-xs font-bold mt-2">Create a landing page with a form.</span>
      </label>
      <label class="flex flex-col p-4 border-2 border-gray-400 cursor-pointer" for="radio_2">
         <div class="flex justify-end" >
          <input id="radio_2" type="radio" name="radio" checked>
        </div>
          <img src="@/assets/images/LandingPage.png" alt="Form type image">
          <span class="text-xl font-semibold">Landing Page</span>
          <span class="text-xs font-bold mt-2">Create a form to embed on your website.</span>
      </label>
       <label class="flex flex-col p-4 border-2 border-gray-400 cursor-pointer" for="radio_3">
        
        <div class="flex justify-end" >
          <input id="radio_3" type="radio" name="radio" checked>
        </div>
        
          <img src="@/assets/images/PopupForm.png" alt="Form type image">
          <span class="text-xl font-semibold">Popup Form</span>
          <span class="text-xs font-bold mt-2">Add a form that pops us as a box.</span>

      </label>
    </form>
    <!-- Component End  -->
    <div class = "relative">
      <button class="p-4 absolute right-0 top-10">Continue</button>
    </div>
</div>
  </div>
</template>
