<template class=" bg-white1">
  <!-- Options and Buttons -->
  <div class="flex justify-center w-11/12">
    <div class="padding-x py-3">

      <!-- Options -->
      <div class="flex flex-col p-4 m-10">

        <mcq-card 
        :question="questionText1" 
        :description="description1"
        :questionId="questionId1" 
        :options="questionOptions1" class="border-b-2 border-graylight"/>
      </div>
      <div class="flex items-center justify-end space-x-4">
        <h4 class="underline underline-offset-2">Go back</h4>
        <button class="px-3 py-2 ring-1 ring-slate-100 shadow-md rounded-md bg-white hover:bg-grayhover">Continue</button>
      </div>
      <!-- Buttons -->

    </div>
  </div>
</template>

<script>
import MCQCard from "@/components/MCQCard.vue";

export default {
  components: {
    "mcq-card": MCQCard,
  }, data() {
    return {
      questionText1: "What happnends after displaying success screen ?",
      description1: "This is the screen visitors see after successfully submitting your form",
      questionId1: "Question1",
      questionOptions1: [
        {
          text: "Do nothing",
          id: "nothing",
          value: "Do nothing",
          hasQuantity: false,  
        },
        {
          text: "Close pop up after",
          id: "PopupClose",
          value: "Close pop up after",
          hasQuantity: true,
          quantityId: "quantity-onpage",
          quantityName: "quantity-onpage",
          min: 0,
          max: 60,
          step: 1,
          defaultValue: 0,
          quantityLabel: "page scroll",
        },
        {
          text: "Redirect to URL",
          id: "URL",
          value: "Redirect to URL",
          hasQuantity: false,
        },
      ],
      showAdvanced: false,
    };
  },
  methods: {
    toggleAdvanced() {
      this.showAdvanced = !this.showAdvanced;
    }
  }
};
</script>