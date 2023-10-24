<!-- Type.vue -->
<template>
  <div class="flex justify-center">
    <div class="padding-x justify-center">
      <div class="pb-4">
        <h2 class="font-bold text-graydark">Select form type</h2>
        <h4 class="text-gray">What kind of form would you like to create?</h4>
      </div>

      <div class="flex justify-center">
        <form class="grid sm:grid-cols-3 gap-2 grid-cols-1">
          <label
            class="flex flex-col w-48 p-4 bg-white border-2 border-graylight cursor-pointer shadow-md rounded-md"
            for="radio_1"
          >
            <div class="flex justify-end">
              <input id="radio_1" type="radio" name="radio" ref="option1" />
            </div>
            <img src="@/assets/images/EmbededForm.png" alt="Form type image" class="w-full" />
            <div class="text-center space-y-2">
              <p class="text-xl font-semibold">Embeded Page</p>
              <p class="text-xs font-bold text-gray">Create a landing page with a form.</p>
            </div>
          </label>
          <label
            class="flex flex-col w-48 p-4 bg-white space-y-2 border-2 border-graylight cursor-pointer shadow-md rounded-md"
            for="radio_2"
          >
            <div class="flex justify-end">
              <input id="radio_2" type="radio" name="radio" ref="option2" />
            </div>
            <img src="@/assets/images/LandingPage.png" alt="Form type image" />
            <div class="text-center space-y-2">
              <p class="text-xl font-semibold">Landing Page</p>
              <p class="text-xs font-bold text-gray">Create a form to embed on your website.</p>
            </div>
          </label>

          <label
            class="flex flex-col w-48 p-4 bg-white space-y-2 border-2 border-graylight cursor-pointer shadow-md rounded-md"
            for="radio_3"
          >
            <div class="flex justify-end">
              <input id="radio_3" type="radio" name="radio" ref="option3" />
            </div>
            <img src="@/assets/images/PopupForm.png" alt="Form type image" />
            <div class="text-center space-y-2">
              <p class="text-xl font-semibold">Popup Form</p>
              <p class="text-xs font-bold text-gray">Add a form that pops us as a box.</p>
            </div>
          </label>
        </form>
      </div>

      <div @click="navigateToDesign" class="flex justify-end py-5">
        <button
          class="p-2 border-2 border-graylight rounded-md bg-white hover:bg-graylight active:bg-red shadow-md"
        >
          Continue
        </button>
      </div>
    </div>
  </div>
</template>



<script>
import { mapMutations, mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['typeSelection'])
  },
  methods: {
    ...mapMutations(['updateTypeSelection']), // Use mapMutations to access mutations

    navigateToDesign() {
      // Determine the selected option, just like you did before.
      let selectedOption = '';
      if (this.$refs.option1.checked) {
        selectedOption = 'Embeded Page';
      } else if (this.$refs.option2.checked) {
        selectedOption = 'Landing Page';
      } else if (this.$refs.option3.checked) {
        selectedOption = 'Popup Form';
      }

      // Dispatch the mutation to update typeSelection.
      this.updateTypeSelection({ formType: selectedOption });
      console.log('User Input (Type):', this.typeSelection);

      this.$router.push('/design');
    }
  }
}
</script>






<!-- 
        <h1>{{$store.state.name}}</h1>
        <button @click="changeName">Change the name</button>
        <h1> {{ privateKey }} ===== {{ secretKey('secret key form the getter') }}</h1>
        <h3>{{ xyz }}</h3> -->

<!-- 

    // ...mapState({
    //   xyz: (state) => state.name,
    //   abc: (state)=>state.utr
    // }),
    // privateKey() {
    //   return this.$store.getters.hashNewAdd;
    // },
    // secretKey() {
    //   return this.$store.getters.newSecret('890');
    // },
    // ...mapGetters({
    //   privateKey: 'hashAdd',
    //   secretKey: 'newSecret'
    // })

    // changeName() {
    //   // this.$store.state.name = "Prajapati"
    //   // this.$store.commit({type: 'updateNameInputs', Name:'Harbanshi'});
    //   // this.$store.commit('updateNameInputs', {Name:'Harbanshi'});

    //   //##### Calling Action from here 1. #########
    //   // this.$store.dispatch({ type: 'nameInput', Name: 'Name From Action' });

    //   // ####### 2. With Promise #######
    //   // this.$store.dispatch({ type: 'nameInput', Name: 'Name From Action' }).then((response) => {
    //   //   console.log('called', response)
    //   // })

    //   // ####   3. Method   #######
    //   this.$store.dispatch({ type: 'nameInput2', Name: 'Name From Action' }).then((response) => {
    //     console.log('called', response)
    //   })

    // }, -->
