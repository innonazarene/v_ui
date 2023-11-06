<script setup>
    const headers = [
        { text: "ID", value: "id" },
        { text: "EMPLOYEE", value: "employee" },
        { text: "LOG DATE", value: "log_date" },
        { text: "TIME IN", value: "time_in" },
        { text: "TIME OUT", value: "time_out" },
        { text: "REASON", value: "reason" },
    ]
    const items = [
        { id: "BTN001011", employee: "Stephen Curry1", log_date: "11/23/23", time_in: "8:30", time_out: "15:00", reason: "Reason 1" },
        { id: "BTN001012", employee: "Stephen Curry2", log_date: "11/23/23", time_in: "8:30", time_out: "15:00", reason: "Reason 1" },
        { id: "BTN001013", employee: "Stephen Curry3", log_date: "11/23/23", time_in: "8:30", time_out: "15:00", reason: "Reason 1" },
        { id: "BTN001014", employee: "Stephen Curry4", log_date: "11/23/23", time_in: "8:30", time_out: "15:00", reason: "Reason 1" },
        { id: "BTN001015", employee: "Stephen Curry5", log_date: "11/23/23", time_in: "8:30", time_out: "15:00", reason: "Reason 1" },
        { id: "BTN001016", employee: "Stephen Curry6", log_date: "11/23/23", time_in: "8:30", time_out: "15:00", reason: "Reason 1" },
        { id: "BTN001017", employee: "Stephen Curry7", log_date: "11/23/23", time_in: "8:30", time_out: "15:00", reason: "Reason 1" },
        { id: "BTN001018", employee: "Stephen Curry8", log_date: "11/23/23", time_in: "8:30", time_out: "15:00", reason: "Reason 1" },
    ]
</script>
<template>
    <RTable :tbl-headers="headers" :tbl-items="items"/>
</template>