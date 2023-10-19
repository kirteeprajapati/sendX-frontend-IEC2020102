<template>
  <div class="flex flex-col p-10">
    
    <form class="flex justify-end">
      <div class="flex  leading-6 text-slate-900 placeholder-slate-400 rounded-md ring-1 ring-slate-200 shadow-sm">
        <img src="@/assets/icons/graySearch.svg" class="mx-2 w-5 flex items-center justify-center">
        <input class="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-3 pr-3 ring-1 ring-slate-200 shadow-sm" type="text" aria-label="Search Templates" placeholder="Search Templates...">
        
      </div>
    </form>

    <h2>Design Screen</h2>

    <!-- Use v-for to iterate over an array of design card data -->
    <div class ="grid grid-cols-4 gap-4" v-for="(card, index) in designCardsData" :key="index">
      <design-card
        :inputId=card.inputId
        :inputName=card.inputName
        :isChecked=card.isChecked
        :imageSrc=card.imageSrc
        :title= card.title
      />
      <design-card
        :inputId= card.inputId
        :inputName= card.inputName
        :isChecked= card.isChecked
        :imageSrc= card.imageSrc
        :title= card.title
      />
      <design-card
        :inputId= card.inputId
        :inputName= card.inputName
        :isChecked= card.isChecked
        :imageSrc= card.imageSrc
        :title= card.title
      />
      
      <design-card
        :inputId=card.inputId
        :inputName=card.inputName
        :isChecked=card.isChecked
        :imageSrc=card.imageSrc
        :title= card.title
      />
      <design-card
        :inputId= card.inputId
        :inputName= card.inputName
        :isChecked= card.isChecked
        :imageSrc= card.imageSrc
        :title= card.title
      />
      
    </div>
  </div>
</template>

<script>
import DesignCard from "@/components/DesignCard.vue"; // Import your DesignCard component
import * as Icons from "@/assets/icons/index.js";

export default {
  components: {
    "design-card": DesignCard, // Register the DesignCard component
  },
  data() {
    return {
      designCardsData: [
        {
          inputId: "radio_1",
          inputName: "radio",
          isChecked: false,
          imageSrc: Icons.GIFS,
          title:  "Card 1",
        },
      ],
    };
  },
};
</script>

