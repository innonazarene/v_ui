<script setup>

</script>

<template>
    <div class="md:flex gap-2">
        <RContainer class="w-full md:w-1/3" container-label="Create Category">
            <HrmsCategoryContentForm/>
        </RContainer>
        <RContainer class="w-full md:w-3/4" container-label="Category List">
            <HrmsCategoryContentTable/>
        </RContainer>
    </div>
</template>