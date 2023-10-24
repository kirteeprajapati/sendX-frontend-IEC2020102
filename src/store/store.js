// import { createStore } from 'vuex';

// const store = createStore({
//     state() {
//         return {
//             userInputs: {},
//             name: 'Kirtee',
//             last: 'Lolu',
//             secretKey: '888',
//             utr: 'this getter calls other getter'
//         };
//     },
//     mutations: {                        // used to alter the data
//         updateUserInputs(state, data) {         // current state and payload
//             state.userInputs = { ...state.userInputs, ...data };
//         },
//         updateNameInputs(state, payload) {         // current state and payload
//             state.name = '####' + payload.Name
//         },
//     },
//     actions: {                                  // What kind of action you gonna perform(update, add, delete, data from API)
//         updateUserInputs(context, data) {       //context=updateNameInputs as we cannot use it directly
//             context.commit('updateUserInputs', data);
//         },

//         // nameInput(context, payload) {
//         //     setTimeout(() => {
//         //         context.commit('updateNameInputs', payload)
//         //     }, 2000)  // if the data takes time to fetch so update it after some time

//         // }

//         // #######   With Promise   ######

//         nameInput(context, payload) {
//             return new Promise((resolve) => {
//                 setTimeout(() => {
//                     context.commit('updateNameInputs', payload)
//                     resolve('Resolve ho gaya bhai')
//                 }, 200)
//             })
//         },
//         nameInput2(context) {
//             context.dispatch({
//                 type: 'nameInput', Name:'Shivmurat'
//             }).then((response) => {
//                 console.log('======', response)
//             })
//         }
//     },
//     getters: {
//         hashAdd(state) {
//             return state.secretKey+'####!!'
//         },
//         hashNewAdd(state, getters) {
//             return state.utr + '##' + getters.hashAdd;
//         },
//         newSecret: ((state) =>(data)=> {
//             return data + "$$" +state.secretKey
//         } )
//     }
// });





import { createStore } from 'vuex';

const store = createStore({
    state: {
        typeSelection: {},
        designSelection: {},
        behaviorSelection: {},
        successSelection: {},
    },
    mutations: {
        updateTypeSelection(state, data) {
            state.typeSelection = { ...state.typeSelection, ...data };
        },
        updateDesignSelection(state, data) {
            state.designSelection = { ...state.designSelection, ...data };
        },
        updateBehaviorSelection(state, data) {
            state.behaviorSelection = { ...state.behaviorSelection, ...data };
        },
        updateSuccessSelection(state, data) {
            state.successSelection = { ...state.successSelection, ...data };
        },
    },
});

export default store;
