<script setup>
defineProps({
    profilePic: {
        type: String,
        required: false,
    },
    fullName: {
        type: String,
        required: false,
    },
    position: {
        type: String,
        required: false,
    }

})
</script>

<template>
    <div class="flex flex-col bg-white border-yellow-800 dark:border-green-950 border-dashed border-4 rounded-lg p-4 m-2">
        <img class="h-28 bg-gray-400 rounded-lg" :src="profilePic" alt="profile pic">
        <div class="flex flex-col items-start mt-4">
            <h4 class="text-lg font-bold">{{ fullName }}</h4>
            <p class="text-sm">{{ position }}</p>
        </div>
    </div>
</template>
