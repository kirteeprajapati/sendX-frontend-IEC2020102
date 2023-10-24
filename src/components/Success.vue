<template class="bg-white1">
  <!-- Options and Buttons -->
  <div class="flex justify-center w-11/12">
    <div class="padding-x py-3">
      <!-- Options -->
      <div class="flex flex-col p-4 m-10">
        <mcq-card
          :question="questionText1"
          :description="description1"
          :questionId="questionId1"
          :options="questionOptions1"
          @response-collected="handleResponse"
          class="border-b-2 border-graylight"
        />
      </div>
      <div class="flex items-center justify-end space-x-4">
        <h4 @click="navigateToBehavior" class="underline cursor-pointer underline-offset-2">
          Go back
        </h4>
        <button class="bg-graylight ring-1 ring-slate-00 px-2 py-1 rounded-md" @click="exportResponses">Finish</button>
      </div>
    </div>
  </div>
</template>

<script>
import MCQCard from '@/components/MCQCard.vue'

export default {
  components: {
    'mcq-card': MCQCard
  },
  data() {
    return {
      questionText1: 'What happens after displaying the success screen?',
      description1: 'This is the screen visitors see after successfully submitting your form',
      questionId1: 'Question1',
      questionOptions1: [
        {
          text: 'Do nothing',
          id: 'nothing',
          value: 'Do nothing',
          hasQuantity: false
        },
        {
          text: 'Close pop up after',
          id: 'PopupClose',
          value: 'Close pop up after',
          hasQuantity: true,
          quantityId: 'quantity-onpage',
          quantityName: 'quantity-onpage',
          min: 0,
          max: 60,
          step: 1,
          defaultValue: 0,
          quantityLabel: 'page scroll'
        },
        {
          text: 'Redirect to URL',
          id: 'URL',
          value: 'Redirect to URL',
          hasQuantity: false
        }
      ],
      showAdvanced: false,
      userResponses: {}, 
    }
  },
  methods: {
    toggleAdvanced() {
      this.showAdvanced = !this.showAdvanced
    },
    navigateToBehavior() {
      this.$router.push('/behavior')
    },
    collectResponse(questionId, option, quantityValue = null) {
      // Debugging: Log the parameters received
      console.log('questionId:', questionId)
      console.log('option:', option)
      console.log('quantityValue:', quantityValue)

      // Create an object to store the response
      const response = { option, quantityValue }

      // Debugging: Log the response
      console.log('Response:', response)

      // Store the response in the userResponses object using the questionId as a key
      this.$set(this.userResponses, questionId, response)

      // Debugging: Log the userResponses object
      console.log('User Responses:', this.userResponses)
    },

    exportResponses() {
      // Convert the userResponses object to a JSON string
      const responsesJSON = JSON.stringify(this.userResponses, null, 2)

      // Log or use the JSON string as needed
      console.log(responsesJSON)
    },
    handleResponse(responseData) {
      // Update the userResponses data in the parent component with the response data
      this.userResponses = responseData
    }
  }
}
</script>
