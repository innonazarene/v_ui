<script setup>
    defineProps({
        containerLabel: {
            type: String,
            required: false,
        },
    })
</script>

<template>
    <div class="shadow-md p-4 bg-white mb-3 border-t-gray-800 border-t-4">
        <p class="text-lg font-semibold text-gray-900 pb-5">{{ containerLabel }}</p>

        <div>
            <slot />
        </div>
    </div>

</template>
