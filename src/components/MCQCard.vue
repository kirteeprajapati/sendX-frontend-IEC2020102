<template>
  <div class="max-w-lg mx-auto">
    <legend class="text-red-400">{{ question }}</legend>
    <legend class="text-red-400">{{ description }}</legend>
    <ul type="options">
      <div v-for="(option, index) in options" :key="index" class="flex items-center mb-4">
        <input
          :id="option.id"
          type="radio"
          :name="questionId"
          :value="option.value"
          class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
          :aria-labelledby="`${questionId}-${index}`"
          :aria-describedby="`${questionId}-${index}`"
        />
        <label :for="option.id" class="text-sm font-medium text-gray-900 ml-2 block">
          {{ option.text }}
          <input
            v-if="option.hasQuantity"
            type="number"
            :id="option.quantityId"
            :name="option.quantityName"
            :min="option.min"
            :max="option.max"
            :step="option.step"
            :value="option.defaultValue"
          />
          {{ option.quantityLabel }}
        </label>
      </div>
    </ul> 
  </div>
</template>

<script>
export default {
  props: {
    question: String,
    description: String,
    questionId: String,
    options: Array,
  },
};
</script>

