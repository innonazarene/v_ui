<script setup>
    definePageMeta({
        layout:'dashboard'
    })
</script>

<template>
    <div class="mt-16 p-4">
        <p class="text-2xl text-gray-800">QUICK ACTIONS</p>
    </div>
    <div class="w-full p-2 bg-white">
        <ShortcutsHrms />
    </div>
    <div class="w-full p-2 bg-white">
        <ShortcutsAccounting />
    </div>
</template>
<style>
</style>