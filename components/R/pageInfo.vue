
<script setup>
    const { currentRoute } = useRouter()
</script>

<template>
    <h1 class="text-xl font-light py-2 capitalize">{{ currentRoute.name }}</h1>
</template>
