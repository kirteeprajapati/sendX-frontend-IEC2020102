<template>
    <div class="relative inline-block text-left" >
        <button
        @mouseenter="setDropDownHovered(true)" 
        @mouseleave="setDropDownHovered(false)" 
        class="inline-flex items-center justify-center w-full h-12 p-2 text-white bg-blue-700 hover:bg-blue-600 rounded">
            Audience 
            <img src="@/assets/icons/down.svg" class="h-4 ml-1 cursor-pointer">
        </button>
        <div v-show="showDropDown" 
        @mouseenter="setDropDownHovered(true)" 
        @mouseleave="setDropDownHovered(false)" 
        class="absolute z-10 w-48 p-3 bg-gray-200 rounded shadow-lg" >
            <div role="none" class="flex flex-col">
                <router-link to="/option1" class="text-black py-2 px-4 cursor-pointer rounded hover:bg-gray-100 hover:text-blue-900"> Option 1</router-link>
                <router-link to="/option2" class="text-black py-2 px-4 cursor-pointer rounded hover:bg-gray-100 hover:text-blue-900"> Option 2</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showDropDown: false,
            dropdownHover: false,
        };
    },
    methods: {
        setDropDownHovered(value) {
            this.showDropDown = value;
        },
    },
};
</script>
