<template>
  <div>
    <h2>Success Screen</h2>
    <!-- Success message or summary -->
     <div class="max-w-lg mx-auto">
    
      <mcq-card
      :question="questionText1"
      :description="description"
      :questionId="questionId1"
      :options="questionOptions1"
      />
    </div>
    <h2>Go back</h2>
    <button>Finish</button>
  </div>
</template>
<script>
  import MCQCard from "@/components/MCQCard.vue";
export default {
  components: {
    "mcq-card": MCQCard,
  }, data() {
      return {
        questionText1: "What happneds after displaying success screen ?",
        description:"This is the screen visitors see after successfully submitting your form",
        questionId1: "question",
        questionOptions1: [
          {
            text: "Do nothing",
            id: "1",
            value: "Do nothing",
            hasQuantity: false,
          },
          {
            text: "Close pop up after ",
            id: "2",
            value: "",
            hasQuantity: true,
            quantityId: "quantity-onpage",
            quantityName: "quantity-onpage",
            min: 0,
            max: 100,
            step: 1,
            defaultValue: 0,
            quantityLabel: " seconds",
          },
          {
            text: "Redirect to URL",
            id: "3",
            value: "Redirect to URL",
            hasQuantity: false,
          },
        ],
      }
    }
  }
</script>
