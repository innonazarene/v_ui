<script setup>

</script>

<template>
    <RContainer container-label="SUMMARY THIS MONTH">
        <HrmsDashboardContentSummary/>
    </RContainer>
    <div class="md:flex gap-4">
        <RContainer class="w-full md:w-1/2" container-label="BIRTHDAYS">
            <HrmsDashboardContentBirthday/>
        </RContainer>
        <RContainer class="w-full md:w-1/2" container-label="EMPLOYEE CHART">
            <HrmsDashboardContentChart/>
        </RContainer>
    </div>
</template>