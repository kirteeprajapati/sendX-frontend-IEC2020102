<template>
  <div class="">
    <div class="padding-x flex justify-center relative top-20">
      <button class="bg-gray px-4 py-2 rounded-md" @click="showModal">Open Edit Board</button>
    </div>

    <modal v-if="isModalVisible" @close="closeModal">
      <div id="example">
        <div class="container">
            <nav class="w-screen bg-graynav max-h-13 text-white1 padding-x-nav flex justify-between p-2 space-x-2 items-center">
              <div class="flex space-x-2 cursor-pointer items-center">
                <img @click="navigateToDesign" src="@/assets/icons/back.svg" alt="back" class="w-4" />
                <button @click="navigateToDesign" class="hidden">Back</button>
              </div>
              <div
                class="justify-center flex cursor-pointer items-center space-x-2 underline underline-offset-8"
              >
                <div id="dateAndTime" class="text-base text-white1">New {{ dateAndTime }}</div>
                <img
                  src="@/assets/icons/edit.svg"
                  alt="edit icon"
                  class="h-4"
                  @click="updateDateTime, enableEdit"
                />
              </div>

              <div class="space-x-2">
                <button
                v-on:click="navigateToBehavior"
                class="px-2 py-1 cursor-pointer max-md:hidden bg-green rounded-md text-sm hover:bg-greenDark transition ring-1 hover:ring-white duration-300"
              >
                Save & Continue
              </button>

              <button
                v-on:click="navigateToBehavior"
                class="hidden cursor-pointer max-md:block rounded-md text-sm "
              >
                <img src="@/assets/icons/save.svg" />
              </button>
              <button class = "px-2 py-1 cursor-pointer max-md:hidden bg-green rounded-md text-sm hover:bg-greenDark transition ring-1 hover:ring-white duration-300" v-on:click="exportHtml">Export HTML</button>
              </div>
            </nav>
         
          <div class="flex-1 padding-x-nav">
          <div class="flex justify-center space-x-3 p-4">
            <img
              src="@/assets/icons/desktop.svg"
              alt="Desktop icon"
              class="h-7 hover:bg-graylight cursor-pointer rounded-md ring-1 ring-slate-200 shadow-md p-1"
            />
            <img
              src="@/assets/icons/phone.svg"
              alt="Phone icon"
              class="h-7 hover:bg-graylight cursor-pointer rounded-md ring-1 ring-slate-200 shadow-md p-1"
            />
          </div>

           <div class="p-2">
          <EmailEditor
            :min-height="minHeight"
            :project-id="projectId"
            :locale="locale"
            :tools="tools"
            :options="options"
            ref="emailEditor"
            v-on:load="editorLoaded"
            v-on:ready="editorReady"
          /> 
          </div>

          <div class="flex justify-center space-x-2 p-4">
            <button
              class="text-sm text-graydark hover:text-white1 rounded-md px-2 py-1 active:bg-graydark hover:bg-graymedium"
              @click="nothing"
            >
              Pop up
            </button>
            <button
              class="text-sm text-graydark hover:text-white1 rounded-md px-2 py-1 active:bg-graydark hover:bg-graymedium"
              @click="nothing"
            >
              Success
            </button>
          </div>
        </div>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
import PosterEditor from './PosterEditor.vue'
import Modal from './Modal.vue'
import { EmailEditor } from '../components'
import sample from '../data/sample.json'

export default {
  name: 'exampleView',
  methods: {
    editorLoaded() {
      try {
        console.log('editorLoaded')
        this.$refs.emailEditor.editor.loadDesign(sample)
      } catch (error) {
        console.error('Error loading design:', error)
      }
    },
    saveDesign() {
      this.$refs.emailEditor.editor.saveDesign((design) => {
        console.log('saveDesign', design)
      })
    },
    eexportHtml() {
      this.$refs.emailEditor.editor.exportHtml((data) => {
        console.log('exportHtml', data)
      })
    },
    editorReady() {
      console.log('editorReady')
    }
  },

  data() {
    return {
      minHeight: '200px',
      locale: 'en',
      projectId: 0,
      tools: {
        // disable image tool
        image: {
          enabled: true
        }
      },
      options: {},
      dateAndTime: 'Date and time',
      navOpen: true,
      toggleVisible: true,
      contentOpen: false,
      PositionOpen: false,
      AnimationOpen: false,
      dragging: false,
      draggedIndex: -1,
      edittable: false,
      editButton: false,
      isModalVisible: false,
      dragOptions: {
        animation: 500
      }
    }
  },
  components: {
    PosterEditor,
    Modal,
    EmailEditor
  },
  methods: {
    showModal() {
      this.isModalVisible = true
    },
    closeModal() {
      this.isModalVisible = false
    },
    showModal() {
      this.isModalVisible = true
    },
    closeModal() {
      this.isModalVisible = false
    },
    updateDateTime() {
      const now = new Date()

      const day = now.getDate()
      const month = now.toLocaleString('default', { month: 'short' })
      const year = now.getFullYear()
      const hours = now.getHours().toString().padStart(2, '0') // Ensure 2-digit format
      const minutes = now.getMinutes().toString().padStart(2, '0') // Ensure 2-digit format

      this.dateAndTime = `${day} ${month} ${year}, ${hours}:${minutes}`
    },
    toggleNav() {
      this.navOpen = !this.navOpen
    },
    enableEdit() {
      this.editButton = true
    },
    disableEdit() {
      this.editButton = false
    },
    contentToggle() {
      this.contentOpen = !this.contentOpen
    },
    PositionToggle() {
      this.PositionOpen = !this.PositionOpen
    },
    AnimationToggle() {
      this.AnimationOpen = !this.AnimationOpen
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
      this.content = event.target.innerHTML
    },
    navigateToBehavior() {
      this.$router.push('/behavior')
    },
    navigateToDesign() {
      this.$router.push( "/design" ); 
    },
  },

  mounted() {
    this.updateDateTime()
  }
}
</script>

<style scoped>
.toggle-button {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  width: 30px;
  height: 30px;
  margin-left: -30px;
  border: 2px solid graylight;
  cursor: pointer;
}
.div-container {
  height: 80px;
  width: 80px;
}
.image {
  width: 70%;
  height: 70%;
  object-fit: contain;
}
.scrollbar-hide::-webkit-scrollbar {
  width: 0.4rem;
}

.scrollbar-hide::-webkit-scrollbar-track {
  background: transparent;
}

.scrollbar-hide::-webkit-scrollbar-thumb {
  background-color: #ccc;
  border-radius: 1rem;
}

.scrollbar-hide {
  scrollbar-width: thin;
}

html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
}

#app,
#example {
  height: 100%;
}

#example .container {
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
}

</style>
