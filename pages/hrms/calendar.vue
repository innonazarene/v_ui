<script setup>

</script>

<template>
    <div class="md:flex gap-2">
        <RContainer class="w-full md:w-1/3" container-label="Create Events">
            <HrmsCalendarContentForm/>
        </RContainer>
        <RContainer class="w-full md:w-3/4" container-label="Calendar">
            <HrmsCalendarContent/>
        </RContainer>
    </div>
</template>