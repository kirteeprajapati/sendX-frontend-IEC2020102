<template>
    <div class="bg-white1">
      <nav
        class="bg-graynav text-white1 padding-x-nav flex justify-between p-2 space-x-2 items-center"
      >
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

        <button
          @click="navigateToBehavior"
          class="px-4 py-2 cursor-pointer max-md:hidden bg-green rounded-md text-sm sm:px-6 sm:py-3 sm:text-base md:px-8 md:py-4 md:text-lg lg:text-xl hover:bg-greenDark transition ring-1 hover:ring-white duration-300"
        >
          Save & Continue
        </button>

        <button
          @click="navigateToBehavior"
          class="px-4 py-2 hidden cursor-pointer max-md:block bg-green rounded-md text-sm sm:px-6 sm:py-3 sm:text-base md:px-8 md:py-4 md:text-lg lg:text-xl"
        >
          <img src="@/assets/icons/save.svg" />
        </button>
      </nav>

      <div class="flex justify-center flex-row">
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

          <div class="flex justify-center">
            <div class="rounded-md bg-white">
              <div class="p-2">
                <img src="@/assets/icons/threedot.svg" class="w-4" />
              </div>
              <div>
                <PosterEditor :enableEdit="editButton" />
                <div class="flex justify-end">Powered by SendX</div>
              </div>
            </div>
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

        <div class="flex-2 border-2 border-graylight px-4 spacing-y-10">
          <div class="toggle-button rounded-full shadow-md">
            <img
              src="@/assets/icons/rightblack.svg"
              alt="toggle button"
              class="h-full"
              @click="toggleVisible = !toggleVisible"
            />
          </div>
          <div class="md:w-64 w-30" v-if="toggleVisible">
            <div class="items-center justify-center">
              <div class="border-b-2 border-graylight">
                <div class="flex justify-between px-1 pt-3 cursor-pointer" @click="contentToggle">
                  <h1 class="text-md py-2">Content</h1>
                  <img src="@/assets/icons/up.svg" class="w-5" />
                </div>
                <div
                  v-if="contentOpen"
                  class="grid md:grid-cols-3 grid-1 gap-2 py-4 justify-center"
                >
                  <div
                    class="div-container cursor-pointer shadow-md bg-white p-2 justify-center rounded-md space-y-1 flex flex-col items-center"
                  >
                    <img src="@/assets/icons/TITLE.svg" class="image" />
                    <h1 class="text-sm text-center">TITLE</h1>
                  </div>
                  <div
                    class="div-container cursor-pointer shadow-md bg-white p-2 justify-center rounded-md space-y-1 flex flex-col items-center"
                  >
                    <img src="@/assets/icons/TEXT.svg" class="image" />
                    <h1 class="text-sm text-center">TEXT</h1>
                  </div>
                  <div
                    class="div-container cursor-pointer shadow-md bg-white p-2 justify-center rounded-md space-y-1 flex flex-col items-center"
                  >
                    <img src="@/assets/icons/IMAGE.svg" class="image" />
                    <h1 class="text-sm text-center">IMAGE</h1>
                  </div>
                  <div
                    class="div-container cursor-pointer shadow-md bg-white p-2 justify-center rounded-md space-y-1 flex flex-col items-center"
                  >
                    <img src="@/assets/icons/BUTTON.svg" class="image" />
                    <h1 class="text-sm text-center">BUTTON</h1>
                  </div>
                  <div
                    class="div-container cursor-pointer shadow-md bg-white p-2 justify-center rounded-md space-y-1 flex flex-col items-center"
                  >
                    <img src="@/assets/icons/DIVIDER.svg" class="image" />
                    <h1 class="text-sm text-center">DIVIDER</h1>
                  </div>
                  <div
                    class="div-container cursor-pointer shadow-md bg-white p-2 justify-center rounded-md space-y-1 flex flex-col items-center"
                  >
                    <img src="@/assets/icons/SOCIAL.svg" class="image" />
                    <h1 class="text-sm text-center">SOCIAL</h1>
                  </div>
                  <div
                    class="div-container cursor-pointer shadow-md bg-white p-2 justify-center rounded-md space-y-1 flex flex-col items-center"
                  >
                    <img src="@/assets/icons/HTML.svg" class="image" />
                    <h1 class="text-sm text-center">HTML</h1>
                  </div>
                  <div
                    class="div-container cursor-pointer shadow-md bg-white p-2 justify-center rounded-md space-y-1 flex flex-col items-center"
                  >
                    <img src="@/assets/icons/VIDEO.svg" class="image" />
                    <h1 class="text-sm text-center">VIDEO</h1>
                  </div>
                  <div
                    class="div-container cursor-pointer shadow-md bg-white p-2 justify-center rounded-md space-y-1 flex flex-col items-center"
                  >
                    <img src="@/assets/icons/ICONS.svg" class="image" />
                    <h1 class="text-sm text-center">ICONS</h1>
                  </div>
                  <div
                    class="div-container cursor-pointer shadow-md bg-white p-2 justify-center rounded-md space-y-1 flex flex-col items-center"
                  >
                    <img src="@/assets/icons/MENU.svg" class="image" />
                    <h1 class="text-sm text-center">MENU</h1>
                  </div>
                  <div
                    class="div-container cursor-pointer shadow-md bg-white p-2 justify-center rounded-md space-y-1 flex flex-col items-center"
                  >
                    <img src="@/assets/icons/STICKERS.svg" class="image" />
                    <h1 class="text-sm text-center">STICKERS</h1>
                  </div>
                  <div
                    class="div-container cursor-pointer shadow-md bg-white p-2 justify-center rounded-md space-y-1 flex flex-col items-center"
                  >
                    <img src="@/assets/icons/GIFS.svg" class="image" />
                    <h1 class="text-sm text-center">GIFS</h1>
                  </div>
                </div>
              </div>
              <div class="border-b-2 border-graylight">
                <div class="flex justify-between px-1 pt-3 cursor-pointer" @click="PositionToggle">
                  <h1 class="text-md py-2">Position</h1>
                  <img src="@/assets/icons/up.svg" class="w-5" />
                </div>
                <div
                  v-if="PositionOpen"
                  class="grid md:grid-cols-3 grid-1 gap-2 py-4 justify-center"
                >
                  <div
                    class="div-container cursor-pointer shadow-md bg-white p-2 justify-center rounded-md space-y-1 flex flex-col items-center"
                  >
                    <img src="@/assets/icons/TITLE.svg" class="image" />
                    <h1 class="text-sm text-center">TITLE</h1>
                  </div>
                  <div
                    class="div-container cursor-pointer shadow-md bg-white p-2 justify-center rounded-md space-y-1 flex flex-col items-center"
                  >
                    <img src="@/assets/icons/TEXT.svg" class="image" />
                    <h1 class="text-sm text-center">TEXT</h1>
                  </div>
                  <div
                    class="div-container cursor-pointer shadow-md bg-white p-2 justify-center rounded-md space-y-1 flex flex-col items-center"
                  >
                    <img src="@/assets/icons/IMAGE.svg" class="image" />
                    <h1 class="text-sm text-center">IMAGE</h1>
                  </div>
                  <div
                    class="div-container cursor-pointer shadow-md bg-white p-2 justify-center rounded-md space-y-1 flex flex-col items-center"
                  >
                    <img src="@/assets/icons/GIFS.svg" class="image" />
                    <h1 class="text-sm text-center">GIFS</h1>
                  </div>
                </div>
              </div>

              <div class="border-b-2 border-graylight">
                <div class="flex justify-between px-1 pt-3 cursor-pointer" @click="AnimationToggle">
                  <h1 class="text-md py-2">Animation</h1>
                  <img src="@/assets/icons/up.svg" class="w-5" />
                </div>
                <div
                  v-if="AnimationOpen"
                  class="grid md:grid-cols-3 grid-1 gap-2 py-4 justify-center"
                >
                  <div
                    class="div-container cursor-pointer shadow-md bg-white p-2 justify-center rounded-md space-y-1 flex flex-col items-center"
                  >
                    <img src="@/assets/icons/TITLE.svg" class="image" />
                    <h1 class="text-sm text-center">TITLE</h1>
                  </div>
                  <div
                    class="div-container cursor-pointer shadow-md bg-white p-2 justify-center rounded-md space-y-1 flex flex-col items-center"
                  >
                    <img src="@/assets/icons/TEXT.svg" class="image" />
                    <h1 class="text-sm text-center">TEXT</h1>
                  </div>
                  <div
                    class="div-container cursor-pointer shadow-md bg-white p-2 justify-center rounded-md space-y-1 flex flex-col items-center"
                  >
                    <img src="@/assets/icons/GIFS.svg" class="image" />
                    <h1 class="text-sm text-center">GIFS</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

</template>


<script>
import PosterEditor from './PosterEditor.vue';
export default {
  name: 'exampleView',
  methods: {
    navigateToBehavior() {
      this.$router.push( "/behavior" ); // Navigate to the "Design" page
    },
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
      dragOptions: {
        animation: 500
      }
    }
  },
  components: {
    PosterEditor,
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

</style>

