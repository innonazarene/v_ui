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
    <div class="md:flex justify-between">
        <p class="p-4 text-2xl">Company Name</p>
    </div>
    <AccountingDashboardAccounts />
</template>