<template>
  <div class="">
    <div class="bg-yellow p-8 space-y-4">
      <div draggable="true" class="flex justify-end"><img src="@/assets/icons/cross.svg" class="w-7" /></div>
      <div 
      @mousedown="startDrag(index)"
      @mouseup="stopDrag"
      @mousemove="dragging "
      draggable="true"
      contenteditable="true"
      @input="updateContent"
      ref="editableDiv"
      class="text-white text-[4vw] font-bold">
        Honestly this is the best content marketing newsletter out there.
      </div>
      <div 
      @mousedown="startDrag(index)"
      @mouseup="stopDrag"
      @mousemove="dragging "
      draggable="true"
      contenteditable="true"
      @input="updateContent"
      ref="editableDiv"
      class="text-xl text-blue">We are biased but we are sure you will agree. Soonish...</div>
      <div @mousedown="startDrag(index)"
      @mouseup="stopDrag"
      @mousemove="dragging "
      draggable="true"
      contenteditable="true"
      @input="updateContent"
      ref="editableDiv"
      class="">
        <input class="text px-2 py-1 mr-3" placeholder="Enter your email..." />
        <button 
        @mousedown="startDrag(index)"
      @mouseup="stopDrag"
      @mousemove="dragging "
      draggable="true"
      contenteditable="true"
      @input="updateContent"
      ref="editableDiv"
      class="bg-blue text-white px-2 py-1 rounded">Join Now</button>
      </div>
      <div 
      @mousedown="startDrag(index)"
      @mouseup="stopDrag"
      @mousemove="dragging "
      draggable="true"
      contenteditable="true"
      @input="updateContent"
      ref="editableDiv"
      class="underline">No I don't want to grow and get valuable content.</div>
    </div>
    <div class="flex justify-end">Powered by SendX</div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import { ref } from 'vue'

export default {
  data() {
    return {
      dateAndTime: 'Date and time',
      dragging: false,
      draggedIndex: -1,
      edittable: false,
      dragOptions: {
        animation: 500 // Transition duration when sorting (milliseconds)
      }
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
    },
    startDrag(index) {
      this.dragging = true
      this.draggedIndex = index
    },
    stopDrag() {
      this.dragging = false
      this.draggedIndex = -1
    },
    updateContent(event) {
      // Update the content data property with the edited content
      this.content = event.target.innerHTML
    }
  },
  mounted() {
    // Initial update of date and time
    this.updateDateTime()
  }
}
</script>

<style scoped>
.drag-item {
  cursor: pointer;
  margin: 5px;
  padding: 10px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
}
.drop-zone {
  width: 50%;
  margin: 50px auto;
  background-color: #ecf0f1;
  padding: 10px;
  min-height: 10px;
}
.drag-el {
  background-color: #3498db;
  color: white;
  padding: 5px;
  margin-bottom: 10px;
}
.drag-el:nth-last-of-type(1) {
  margin-bottom: 0;
}
</style>