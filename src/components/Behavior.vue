<template class="bg-white1">
  <!-- Options and Buttons -->
  <div class="flex justify-center w-11/12">
    <div class="padding-x py-3">
      <!-- Options -->
      <div class="flex flex-col p-4 m-10">
        <mcq-card
          :question="questionText1"
          :questionId="questionId1"
          :options="questionOptions1"
          class="border-b-2 border-graylight"
        />
        <!-- Advance Options -->
        <button
          class="cursor-pointer flex items-center space-x-1 text-black py-4"
          @click="toggleAdvanced"
        >
          <h1 class="font-medium text-sky-700">Advance</h1>
          <img src="@/assets/icons/downdark.svg" class="h-4" />
        </button>
        <div v-if="showAdvanced">
          <mcq-card
            :question="questionText2"
            :description="description2"
            :questionId="questionId2"
            :options="questionOptions2"
            @response-collected="handleResponse"
          />

          <mcq-card
            :question="questionText3"
            :description="description3"
            :questionId="questionId3"
            :options="questionOptions3"
            @response-collected="handleResponse"
          />
        </div>
      </div>
      <div class="flex items-center justify-end space-x-4">
        <h4 @click="navigateToTargeting" class="cursor-pointer underline underline-offset-2">
          Go back
        </h4>
        <button
          @click="navigateToSuccess"
          class="px-3 py-2 ring-1 ring-slate-100 shadow-md rounded-md bg-white hover:bg-grayhover"
        >
          Continue
        </button>
      </div>
      <!-- Buttons -->
    </div>
  </div>
</template>

<script>
import MCQCard from '@/components/MCQCard.vue'
import { mapActions, mapState } from 'vuex'

export default {
  components: {
    'mcq-card': MCQCard
  },
  data() {
    return {
      userResponses: {},
      questionText1: 'Show the popup when visitor:',
      questionId1: 'Question1',
      questionOptions1: [
        {
          text: 'Enters website',
          id: 'enters',
          value: 'Enters Website',
          hasQuantity: false // No quantity input for this option
        },
        {
          text: 'Exists website',
          id: 'exits',
          value: 'Exits Website',
          hasQuantity: false
        },
        {
          text: 'On page scroll:',
          id: 'onpage',
          value: 'On Page Scroll',
          hasQuantity: true,
          quantityId: 'quantity-onpage',
          quantityName: 'quantity-onpage',
          min: 0,
          max: 100,
          step: 1,
          defaultValue: 0,
          quantityLabel: 'page scroll'
        },
        {
          text: 'After',
          id: 'after',
          value: 'After',
          hasQuantity: true,
          quantityId: 'quantity-after',
          quantityName: 'quantity-after',
          min: 0,
          max: 100,
          step: 1,
          defaultValue: 0,
          quantityLabel: 'seconds on the website'
        }
      ],
      questionText2: 'How Often to show the popup',
      description2: 'This is discription',
      questionId2: 'question2',
      questionOptions2: [
        {
          text: 'Every page view',
          id: 'entry page',
          value: 'Every page view',
          hasQuantity: false // No quantity input for this option
        },
        {
          text: 'Exists new browser session',
          id: 'exit browser',
          value: 'Exists new browser session',
          hasQuantity: false
        },
        {
          text: 'After',
          id: 'after days',
          value: 'After',
          hasQuantity: true,
          quantityId: 'quantity-After',
          quantityName: 'quantity-After',
          min: 0,
          max: 100,
          step: 1,
          defaultValue: 0,
          quantityLabel: 'days'
        }
      ],
      questionText3: 'When to stop showing the popup',
      questionId3: 'question3',
      questionOptions3: [
        {
          text: 'Never',
          id: 'nvr',
          value: 'Never',
          hasQuantity: false
        },
        {
          text: 'If the visitor has successfully completed the action',
          id: 'action',
          value: 'If the visitor has successfully completed the action'
        },
        {
          text: 'If the visitor has successfully completed the action or the pop-up has been shown ',
          id: 'Pop has been shown',
          value:
            'If the visitor has successfully completed the action or the pop-up has been shown',
          hasQuantity: true,
          quantityId: 'Visitor',
          quantityName: 'Visitor',
          min: 0,
          max: 100,
          step: 1,
          defaultValue: 0,
          quantityLabel: ' times.'
        }
      ],
      showAdvanced: false
    }
  },
  methods: {
    toggleAdvanced() {
      this.showAdvanced = !this.showAdvanced
    },
    navigateToSuccess() {
      this.$router.push('/success') // Navigate to the "Design" page
    },
    navigateToTargeting() {
      this.$router.push('/targeting') // Navigate to the "Design" page
    }
  }
}
</script>
