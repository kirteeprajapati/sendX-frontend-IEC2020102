<template>
  <div>
    <h2>Behavior Screen</h2>

    <!-- <div class="max-w-lg mx-auto">
      <legend class="text-red-400">Show the popup when visitor:</legend>
          <ul type="options">
            <div class="flex items-center mb-4 bg-red-500">
                <input id="entry" type="radio" name="countries" value="USA" class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="country-option-1" aria-describedby="country-option-1" checked="">
                <label for="entry" class="text-sm font-medium text-gray-900 ml-2 block">
                Enters website
                </label>
            </div>

            <div class="flex items-center mb-4">
                <input id="exit" type="radio" name="countries" value="Germany" class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="country-option-2" aria-describedby="country-option-2">
                <label for="exit" class="text-sm font-medium text-gray-900 ml-2 block">
                Exists website
                </label>
            </div>

            <div class="flex items-center mb-4">
                <input id="onpage" type="radio" name="countries" value="Spain" class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="country-option-3" aria-describedby="country-option-3">
                <label for="onpage" class="text-sm font-medium text-gray-900 ml-2 block">
                On
                <label for="quantity">page scroll:</label>
                <input type="number" id="quantity" name="quantity" min="0" max="100" step="1" value="0">
                </label>
            </div>

            <div class="flex items-center mb-4">
                <input id="after" type="radio" name="countries" value="United Kingdom" class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="country-option-4" aria-describedby="country-option-4">
                <label for="after" class="text-sm font-medium text-gray-900 ml-2 block">
                After 
                <input type="number" id="quantity" name="quantity" min="0" max="100" step="1" value="0">
                <label for="quantity">seconds on website:</label>
                </label>
            </div>
          </ul>
    </div> -->

  <div>
    <mcq-card
      :question="questionText1"
      :questionId="questionId1"
      :options="questionOptions1"
    />
  </div>


    <a class="cursor-pointer">Advanced</a>
    
    <mcq-card
      :question="questionText2"
      :questionId="questionId2"
      :options="questionOptions2"
    />
    <!-- <div>
      <div class="max-w-lg mx-auto">
        <fieldset class="mb-5">
        <legend class="sr-only">
            How often the popup when visitor:
        </legend>

        <div class="flex items-center mb-4">
            <input id="lol1" type="radio" name="countries" value="USA" class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="country-option-1" aria-describedby="country-option-1" checked="">
            <label for="lol1" class="text-sm font-medium text-gray-900 ml-2 block">
            Every page view
            </label>
        </div>

        <div class="flex items-center mb-4">
            <input id="lol2" type="radio" name="countries" value="Germany" class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="country-option-2" aria-describedby="country-option-2">
            <label for="lol2" class="text-sm font-medium text-gray-900 ml-2 block">
            Every new browser session
            </label>
        </div>

        <div class="flex items-center mb-4">
            <input id="lol3" type="radio" name="countries" value="Spain" class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="country-option-3" aria-describedby="country-option-3">
            <label for="lol3" class="text-sm font-medium text-gray-900 ml-2 block">
            After
            <label for="quantity">page scroll:</label>
    
    <input type="number" id="quantity" name="quantity" min="0" max="100" step="1" value="0">
    days
            </label>
        </div>
        </fieldset>
      </div>

      <div class="max-w-lg mx-auto">
    
        <fieldset class="mb-5">
        <legend class="sr-only">
            When to stop showing popup when visitor:
        </legend>

        <div class="flex items-center mb-4">
            <input id="Never" type="radio" name="countries" value="USA" class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="country-option-1" aria-describedby="country-option-1" checked="">
            <label for="Never" class="text-sm font-medium text-gray-900 ml-2 block">
            Never
            </label>
        </div>

        <div class="flex items-center mb-4">
            <input id="Exists" type="radio" name="countries" value="Germany" class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="country-option-2" aria-describedby="country-option-2">
            <label for="Exists" class="text-sm font-medium text-gray-900 ml-2 block">
            Exists website
            </label>
        </div>

        <div class="flex items-center mb-4">
            <input id="visitor" type="radio" name="countries" value="Spain" class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="country-option-3" aria-describedby="country-option-3">
            <label for="visitor" class="text-sm font-medium text-gray-900 ml-2 block">
            If the visitor
            <label for="quantity">page scroll:</label>
    
            <input type="number" id="quantity" name="quantity" min="0" max="100" step="1" value="0">

            </label>
        </div>    
        </fieldset>
      </div>
    </div> -->

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
          value: "Enters the Website",
          hasQuantity: false,  // No quantity input for this option
        },
        {
          text: "Exists website",
          id: "exits",
          value: "Exits the Website",
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
          value: "United Kingdom",
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
      questionText2: "Show the popup when visitor:",
      questionId2: "question2",
      questionOptions2: [
        {
          text: "Enters website",
          id: "entry",
          value: "USA",
          hasQuantity: false,  // No quantity input for this option
        },
        {
          text: "Exists website",
          id: "exit",
          value: "Germany",
          hasQuantity: false,
        },
        {
          text: "On page scroll:",
          id: "onpage",
          value: "Spain",
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
          value: "United Kingdom",
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
    };
  },
};
</script>