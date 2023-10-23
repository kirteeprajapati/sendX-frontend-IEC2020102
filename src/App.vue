<!-- 
<template>
  <div>
    
    
      <div> 
        <GlobalNavigation />
        <FlowNavigation />
      </div>
      <router-view/>
    </div>
  
</template>

<script>
import GlobalNavigation from "@/views/GlobalNavigation.vue";
import FlowNavigation from "@/views/FlowNavigation.vue";

export default {
  components: {
    GlobalNavigation,
    FlowNavigation,
  },
};
</script> -->

<template>
  <div id="app">
    <div class="container">
      <div id="bar">
        <button class = "px-4 py-2 max-md:hidden cursor-pointer text-white bg-green rounded-md text-sm sm:px-6 sm:py-3 sm:text-base md:px-8 md:py-4 md:text-lg lg:text-xl hover:bg-greenDark transition ring-1 hover:ring-white duration-300" v-on:click="saveDesign">Save Design</button>
        <button
            class="px-4 py-2 hidden cursor-pointer max-md:block bg-green rounded-md text-sm sm:px-6 sm:py-3 sm:text-base md:px-8 md:py-4 md:text-lg lg:text-xl" v-on:click="saveDesign"
          >
            <img src="@/assets/icons/save.svg" />
          </button>
        <button v-on:click="exportHtml">Export HTML</button>
        <button class= "bg-red rounded p-2" @click="loadSampleDesign">Load Sample Design</button>
      </div>

      <EmailEditor ref="emailEditor" v-on:load="editorLoaded" />
    </div>
  </div>
</template>

<script>
import { EmailEditor } from 'vue-email-editor'
import SampleDesign from './components/sample.json'
  export default {
    name: 'app',
    components: {
      EmailEditor
  },
    
    methods: {
      editorLoaded() {
        // Pass your template JSON here
        // this.$refs.emailEditor.editor.loadDesign({});
      },
      saveDesign() {
        this.$refs.emailEditor.editor.saveDesign(
          (design) => {
            console.log('saveDesign', design);
          }
        )
      },
      exportHtml() {
        this.$refs.emailEditor.editor.exportHtml(
          (data) => {
            console.log('exportHtml', data);
          }
        )
      },
      loadSampleDesign() {
        // Load the sample design using unlayer.loadDesign
        unlayer.loadDesign(SampleDesign);
      },
      autosave() {
        unlayer.saveDesign(function(design) {
          console.log('design', design);
        });
      }
    }
  }
</script>