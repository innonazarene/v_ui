<script setup>
    defineProps({
        btnLabel: {
            type: String,
            required: false,
        },
    })
</script>

<template>
    <button type="submit" class="flex gap-2 justify-center text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-900 dark:hover:bg-gray-800">
        <slot />
        {{ btnLabel ?? " "}}
    </button>
</template>
