<template>
  <div>
    <h2>Behavior Screen</h2>
  <div>
    <mcq-card
      :question="questionText1"
      :questionId="questionId1"
      :options="questionOptions1"
    />
  </div>
  
    <button class="cursor-pointer" @click="toggleAdvanced" >Advance</button>

      <mcq-card
       v-if="showAdvanced"
      :question="questionText2"
      :description="description2"
      :questionId="questionId2"
      :options="questionOptions2"
       />

      <mcq-card
       v-if="showAdvanced"
      :question="questionText3"
      :description="description3"
      :questionId="questionId3"
      :options="questionOptions3"
       />

    <h4>Go back</h4>
    <button>Continue</button>
  </div>
</template>

<script>
import MCQCard from "@/components/MCQCard.vue";

export default {
  components: {
    "mcq-card": MCQCard,
  }, data() {
    return {
      questionText1: "Show the popup when visitor:",
      questionId1: "Question1",
      questionOptions1: [
        {
          text: "Enters website",
          id: "enters",
          value: "Enters Website",
          hasQuantity: false,  // No quantity input for this option
        },
        {
          text: "Exists website",
          id: "exits",
          value: "Exits Website",
          hasQuantity: false,
        },
        {
          text: "On page scroll:",
          id: "onpage",
          value: "On Page Scroll",
          hasQuantity: true,
          quantityId: "quantity-onpage",
          quantityName: "quantity-onpage",
          min: 0,
          max: 100,
          step: 1,
          defaultValue: 0,
          quantityLabel: "page scroll",
        },
        {
          text: "After",
          id: "after",
          value: "After",
          hasQuantity: true,
          quantityId: "quantity-after",
          quantityName: "quantity-after",
          min: 0,
          max: 100,
          step: 1,
          defaultValue: 0,
          quantityLabel: "seconds on the website",
        },
      ],
      questionText2:"How Often to show the popup",
      description2: "This is discription",
      questionId2: "question2",
      questionOptions2: [
        {
          text: "Every page view",
          id: "entry page",
          value: "Every page view",
          hasQuantity: false,  // No quantity input for this option
        },
        {
          text: "Exists new browser session",
          id: "exit browser",
          value: "Exists new browser session",
          hasQuantity: false,
        },
        {
          text: "After",
          id: "after days",
          value: "After",
          hasQuantity: true,
          quantityId: "quantity-onpage",
          quantityName: "quantity-onpage",
          min: 0,
          max: 100,
          step: 1,
          defaultValue: 0,
          quantityLabel: "days",
        },
      ],
      questionText3:"When to stop showing the popup",
      questionId3: "question2",
      questionOptions3: [
        {
          text: "Never",
          id: "nvr",
          value: "Never",
          hasQuantity: false,
        },
        {
          text: "If the visitor has successfully completed the action",
          id: "action",
          value: "If the visitor has successfully completed the action",
        },
        {
          text: "If the visitor has successfully completed the action or the pop-up has been shown ",
          id: "exit browser",
          value: "Exists new browser session",
          hasQuantity: true,
          quantityId: "quantity-onpage",
          quantityName: "quantity-onpage",
          min: 0,
          max: 100,
          step: 1,
          defaultValue: 0,
          quantityLabel: " times.",
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