<template>
  <div class="w-30 max-w-xs md:w-36 md:max-w-md lg:w-60 lg:max-w-xl xl:w-60 xl:max-w-80 cursor-pointer">
    <input class="opacity-0 absolute" :id="inputId" type="radio" :name="inputName" :checked="isChecked">
        <label :for="inputId" class="p-1 flex flex-col cursor-pointer ring-1 ring-graylight shadow-md hover:border-graydark rounded-md">
          <div class="p-1">
            <img src="@/assets/icons/threedot.svg" alt="threedot" class="p-1">
          </div >
            <img :src="imageSrc" alt="Image here" class="w-full h-full">
          
        </label>
      <div class="py-4 cursor-pointer">
          <h1 class="">{{ title }}</h1>
      </div>
  </div>
   
</template>

<script>
export default {
  props: {
    inputId: String,
    inputName: String,
    isChecked: Boolean,
    imageSrc: String,
    title: String,
  },
};
</script>
