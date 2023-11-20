
<script setup>
    defineProps({
        hasSign: {
            type: Boolean,
            required: false,
        },
        cardLabel: {
            type: String,
            required: true,
        },
        cardTotalSummary:{
            type: String,
            required: true
        }
    })
</script>

<template>
    <div class="flex w-full items-center p-4 mb-2 bg-yellow-800 rounded-lg shadow-xs dark:bg-gray-800">
        <div class="p-3 mr-4  bg-green-100 rounded-full">
            <slot/>
        </div>
        <div>
            <p class="mb-2 text-sm font-medium text-white dark:text-gray-400">
                {{ cardLabel }}
            </p>
            <p class="text-xl font-bold text-white dark:text-gray-200">
                {{ hasSign? '₱' : '' }} {{ new Intl.NumberFormat().format(cardTotalSummary ?? 0) }}
            </p>
        </div>
    </div>
</template>
