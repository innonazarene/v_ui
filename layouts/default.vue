<script setup>
    import { onMounted } from 'vue'
    import { initFlowbite } from 'flowbite'

    // initialize components based on data attribute selectors
    onMounted(() => {
        initFlowbite();
    })

</script>

<template>
    <RHeader />
    <RSidebar />

    <div class="p-4 sm:ml-64 py-16 mt-5">
        <RPageInfo/>
        <slot />
    </div>

</template>
