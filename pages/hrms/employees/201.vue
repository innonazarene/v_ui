<script setup>

</script>

<template>
    <div class="md:flex gap-2">
        <RContainer class="w-full md:w-1/3" container-label="Employees Record">
            <HrmsEmployees201ContentCardTally/>
            <MiscHrmsEmployeeTable/>
        </RContainer>
        <RContainer class="w-full md:w-2/3" container-label="EMPLOYMENT APPLICATION FORM">
            <MiscHrmsEmployeeInformation/>
        </RContainer>
    </div>
</template>