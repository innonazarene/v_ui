<script setup>
    const headers = [
        { text: "Employee Name", value: "employee_name" },
        { text: "Job Title", value: "job_title" },
        { text: "Department", value: "department" },
        { text: "Status", value: "status" },
    ]
    const items = [
        { employee_name: "Stephen Curry11", job_title: "Programmer 1", department: "Department1 ", status: "Active"},
        { employee_name: "Stephen Curry12", job_title: "Sales", department: "Department2 ", status: "Active"},
        { employee_name: "Stephen Curry13", job_title: "Faculty", department: "Department3 ", status: "Active"},
        { employee_name: "Stephen Curry14", job_title: "Sample 3", department: "Department4 ", status: "Active"},
    ]
</script>
<template>
    <RTable :tbl-headers="headers" :tbl-items="items"/>
</template>