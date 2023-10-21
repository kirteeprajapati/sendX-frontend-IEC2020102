<!-- Type.vue -->
<template>
  <div class="border-2 border-red space-y-5 py-10 padding-x justify-center bg-white1 h-screen overflow-hidden scrollbar-hide">
      <div class="top-10 pb-4">
        <h2 class = "font-bold text-graydark">Select form type</h2>
        <h4 class="text-gray">What kind of form would you like to create?</h4>
      </div>
      <form class="grid md:grid-cols-3 gap-2 w-full grid-cols-1 justify-center">
        <label class="flex flex-col p-4 bg-white space-y-2 border-2 border-graylight cursor-pointer shadow-md rounded-md" for="radio_1">
          <div class="flex justify-end" >
            <input id="radio_1" type="radio" name="radio">
          </div>
          <img src="@/assets/images/EmbededForm.png" alt="Form type image" class="">
            <div class="text-center space-y-2">
              
            <p class="text-xl font-semibold">Embeded Page</p>
            <p class="text-xs font-bold text-gray">Create a landing page with a form.</p>
       
            </div>
        </label>
        <label class="flex flex-col p-4 bg-white space-y-2  border-2 border-graylight cursor-pointer shadow-md rounded-md" for="radio_2">
          <div class="flex justify-end" >
            <input id="radio_2" type="radio" name="radio">
          </div>
            <img src="@/assets/images/LandingPage.png" alt="Form type image">
            <div class="text-center space-y-2">
              <p class="text-xl font-semibold">Landing Page</p>
              <p class="text-xs font-bold text-gray">Create a form to embed on your website.</p>      
            </div>  
          </label>

        <label class="flex flex-col p-4 bg-white space-y-2 border-2 border-graylight cursor-pointer shadow-md rounded-md" for="radio_3">
          
          <div class="flex justify-end" >
            <input id="radio_3" type="radio" name="radio">
          </div>
            <img src="@/assets/images/PopupForm.png" alt="Form type image">
            <div class="text-center space-y-2">
              <p class="text-xl font-semibold">Popup Form</p>
              <p class="text-xs font-bold text-gray">Add a form that pops us as a box.</p>
            </div>
        </label>
        
      </form>
      <div class="">
        <button class="p-2 border-2 border-graylight rounded-md bg-white hover:bg-graylight active:bg-red shadow-md">Continue</button>
      </div>
     </div>
</template>
<script>
export default{
  methods: {
    toggle() {
      
    }
  }
}
</script>