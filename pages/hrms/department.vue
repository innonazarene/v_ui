<script setup>

</script>

<template>
    <div class="md:flex gap-2">
        <RContainer class="w-full md:w-1/3" container-label="Create Department">
            <HrmsDepartmentContentForm/>
        </RContainer>
        <RContainer class="w-full md:w-3/4" container-label="Department List">
            <HrmsDepartmentContentTable/>
        </RContainer>
    </div>
</template>