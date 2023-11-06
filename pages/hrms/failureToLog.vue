<script setup>

</script>

<template>
    <RSearch/>
    <div class="md:flex gap-2">
        <RContainer class="w-full md:w-1/3" container-label="Failure to Login / Logout form">
            <HrmsFailureToLogContentForm/>
        </RContainer>
        <RContainer class="w-full md:w-3/4" container-label="Log Failures Table">
            <HrmsFailureToLogContentTable/>
        </RContainer>
    </div>
</template>