
<script setup>
    const { currentRoute } = useRouter()
</script>

<template>
    <h1 class="text-xl font-light p-2">{{ currentRoute.fullPath }}</h1>
</template>
