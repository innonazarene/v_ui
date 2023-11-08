<script setup>

</script>

<template>
    <div class="gap-2">
        <RSearch/>
        <RContainer class="w-full" container-label="Create Leave Application Form">
            <div class="w-full mb-10">
                <div class="w-full">
                    <HrmsLeavesContentForm/>
                </div>
            </div>
            <div class="w-ful">
                <div class="w-full">
                    <HrmsLeavesContentTable/>
                </div>
            </div>
        </RContainer>
    </div>
</template>