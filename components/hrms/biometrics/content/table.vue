<script setup>
    const headers = [
        { text: "ID", value: "id" },
        { text: "EMPLOYEE", value: "employee" },
        { text: "DEPARTMENT", value: "department" },
        { text: "BIOMETRIC ID", value: "biometic" },
    ]
    const items = [
        { id: "BTN00101", employee: "Stephen Curry", department: "Department1", biometic: "1" },
        { id: "BTN00102", employee: "Michael Jordan", department: "HR", biometic: "2" },
        { id: "BTN00103", employee: "Danny Green", department: "Faculty", biometic: "3" },
    ]
</script>
<template>
    <RTable :tbl-headers="headers" :tbl-items="items"/>
</template>