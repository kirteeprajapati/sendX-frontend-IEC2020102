<template>
    <div class="relative inline-block text-left" >
        <button
        @mouseenter="setDropDownHovered(true)" 
        @mouseleave="setDropDownHovered(false)" 
        class="inline-flex items-center justify-center w-full h-12 p-4 text-white bg-blue hover:bg-hoverblue transition duration-300 rounded">
            Automations 
            <img src="@/assets/icons/down.svg" class="h-4 cursor-pointer">
        </button>
        <div v-show="showDropDown" 
        @mouseenter="setDropDownHovered(true)" 
        @mouseleave="setDropDownHovered(false)" 
        class="absolute z-10 left-10 w-48 p-3 bg-graylight rounded shadow-lg" >
            <div role="none" class="flex flex-col">
                <router-link to="/option1" class="text-black py-2 px-4 cursor-pointer rounded hover:bg-grayhover hover:text-graydark"> Option 1</router-link>
                <router-link to="/option2" class="text-black py-2 px-4 cursor-pointer rounded hover:bg-grayhover hover:text-graydark"> Option 2</router-link>
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
