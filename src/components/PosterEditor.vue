<template>
  <div class="">
    <div class="bg-yellow p-8 space-y-4">
      <div draggable="true" class="flex justify-end">
        <img src="@/assets/icons/cross.svg" class="w-7" />
      </div>
      <div class="text-white text-[4vw] font-bold">
        Honestly this is the best content marketing newsletter out there.
      </div>
      <div class="text-xl text-blue">We are biased but we are sure you will agree. Soonish...</div>
      <div class="">
        <input class="text px-2 py-1 mr-3" placeholder="Enter your email..." />
        <button class="bg-blue text-white px-2 py-1 rounded">Join Now</button>
      </div>
      <div class="underline">No I don't want to grow and get valuable content.</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    enableEdit: 'enableEdit'
  },
  data() {
    return {
      dateAndTime: 'Date and time'
    }
  },
  methods: {
    updateDateTime() {
      const now = new Date()

      const day = now.getDate()
      const month = now.toLocaleString('default', { month: 'short' })
      const year = now.getFullYear()
      const hours = now.getHours().toString().padStart(2, '0') // Ensure 2-digit format
      const minutes = now.getMinutes().toString().padStart(2, '0') // Ensure 2-digit format

      this.dateAndTime = `${day} ${month} ${year}, ${hours}:${minutes}`
    }
  },
  mounted() {
    this.updateDateTime()
  }
}
</script>
