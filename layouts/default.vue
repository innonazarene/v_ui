<script setup>
    import { onMounted } from 'vue'
    import { initFlowbite } from 'flowbite'
    const { currentRoute } = useRouter()

    // initialize components based on data attribute selectors
    onMounted(() => {
        initFlowbite()
    })
    useHead({
        title: 'Sample System | '+currentRoute.value.name
    })
</script>

<template>
    <RHeader />
    <RSidebar />

    <div class="p-4 sm:ml-64 py-16">
        <RPageInfo/>
        <slot />
    </div>

</template>
