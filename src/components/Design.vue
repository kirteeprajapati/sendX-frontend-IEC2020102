<template>
  <div class="flex flex-col p-10">
    
    <form class="flex justify-end">
      <div class="flex leading-6 text-slate-900 placeholder-slate-400 rounded-md ring-1 ring-slate-200 shadow-sm">
        <img src="@/assets/icons/graySearch.svg" class="mx-2 w-5 flex items-center justify-center">
        <input class="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-3 pr-3 ring-1 ring-slate-200 shadow-sm" type="text" aria-label="Search Templates" placeholder="Search Templates...">
        
      </div>
    </form>

    <h2>Design Screen</h2>

    <!-- Use v-for to iterate over an array of design card data -->
    <div class ="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 gap-4">
        <div v-for="(card, index) in designCardsData1" :key="index">
        <design-card
          :inputId=card.inputId
          :inputName=card.inputName
          :isChecked=card.isChecked
          :imageSrc=card.imageSrc
          :title= card.title
        />
      </div>
      <div v-for="(card, index) in designCardsData2" :key="index">
        <design-card
          :inputId=card.inputId
          :inputName=card.inputName
          :isChecked=card.isChecked
          :imageSrc=card.imageSrc
          :title= card.title
        />
      </div>
      <div v-for="(card, index) in designCardsData3" :key="index">
        <design-card
          :inputId=card.inputId
          :inputName=card.inputName
          :isChecked=card.isChecked
          :imageSrc=card.imageSrc
          :title= card.title
        />
      </div>
      <div  v-for="(card, index) in designCardsData4" :key="index">
        <design-card
          :inputId=card.inputId
          :inputName=card.inputName
          :isChecked=card.isChecked
          :imageSrc=card.imageSrc
          :title= card.title
        />
      </div>
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
      designCardsData1: [
        {
          inputId: "radio_1",
          inputName: "radio",
          isChecked: false,
          imageSrc: Icons.SOCIAL,
          title:  "Intro Bar",
        },
      ],
      designCardsData2: [
        {
          inputId: "radio_2",
          inputName: "radio",
          isChecked: false,
          imageSrc: Icons.GIFS,
          title:  "Modal Background Classic",
        },
      ],
      designCardsData3: [
        {
          inputId: "radio_3",
          inputName: "radio",
          isChecked: false,
          imageSrc: Icons.STICKERS,
          title:  "Modal Left Image Mordern",
        },
      ],
      designCardsData4: [
        {
          inputId: "radio_3",
          inputName: "radio",
          isChecked: false,
          imageSrc: Icons.TITLE,
          title:  "Page Takeover Mordern Retro",
        },
      ],
      designCardsData5: [
        {
          inputId: "radio_1",
          inputName: "radio",
          isChecked: false,
          imageSrc: Icons.SOCIAL,
          title:  "Modal",
        },
      ],
      designCardsData6: [
        {
          inputId: "radio_2",
          inputName: "radio",
          isChecked: false,
          imageSrc: Icons.GIFS,
          title:  "Letter",
        },
      ],
      designCardsData7: [
        {
          inputId: "radio_3",
          inputName: "radio",
          isChecked: false,
          imageSrc: Icons.STICKERS,
          title:  "Modal Background Mordern",
        },
      ],
      designCardsData8: [
        {
          inputId: "radio_3",
          inputName: "radio",
          isChecked: false,
          imageSrc: Icons.TITLE,
          title:  "Slider Mordern",
        },
      ],
    };
  },
};
</script>

