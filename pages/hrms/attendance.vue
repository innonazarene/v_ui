<script setup>

</script>

<template>
    <RSearch/>
    <div class="md:flex gap-2">
        <RContainer class="w-full md:w-1/3" container-label="Personnel Information Sheet">
            <HrmsAttendanceContentForm/>
        </RContainer>
        <RContainer class="w-full md:w-3/4" container-label="September 23, 2023 - October 22, 2023">
            <HrmsAttendanceContentTable/>
        </RContainer>
    </div>
</template>