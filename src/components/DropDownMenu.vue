<template>
    <div>
        <button @click="toggleDropdown">
        {{ buttonText }}</button>
        <div v-if="isDropDownOpen">
            <h1>You Pressed the DropDown</h1>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isDropDownOpen: false,
        };
    },
    props: {
        buttonText: String,
    },
    methods: {
        toggleDropdown() {
            this.toggleDropdown = !this.toggleDropdown;
        },
    },
};
</script>   