<template>
  <div class="">
    <legend class="text-graymedium font-bold text-xl">{{ question }}</legend>
    <legend class="text-gray py-2">{{ description }}</legend>
    <ul type="options">
      <div v-for="(option, index) in options" :key="index" class="flex items-center mb-5">
        <input
          :id="option.id"
          type="radio"
          :name="questionId"
          :value="option.value"
          class="h-4 w-4 border-gray focus:ring-2 focus:ring-blue-300"
          :aria-labelledby="`${questionId}-${index}`"
          :aria-describedby="`${questionId}-${index}`"
        />
        <label :for="option.id" class="text-sm font-semibold text-graydark ml-2 block">
          {{ option.text }}
          <input
            v-if="option.hasQuantity"
            type="number"
            :id="option.quantityId"
            :name="option.quantityName"
            :min="option.min"
            :max="option.max"
            class=" bg-red ring-graylight ring-2 rounded-md h-6 items-center p-2 min-w-5"
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

