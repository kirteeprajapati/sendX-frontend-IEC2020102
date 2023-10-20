<template>
  <div>
    <input class="opacity-0 absolute" :id="inputId" type="radio" :name="inputName" :checked="isChecked">
    <label :for="inputId" class="flex flex-col cursor-pointer relative border-2 hover:border-gray-300 rounded-md ">
      <img src="@/assets/icons/threedot.svg" alt="threedot" class="w-10 p-2">
      <img :src="imageSrc" alt="Image here" class="w-full p-0">
      
    </label>
    <h1 class="text-[1.4vw] md:text-[1.4vw] sm:text-[2vw]">{{ title }}</h1>
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
