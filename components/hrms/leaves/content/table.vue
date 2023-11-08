<script setup>
    const headers = [
        { text: "Employee Name", value: "employee_name" },
        { text: "Date Field", value: "date_field" },
        { text: "Leave Availed", value: "leave_availed" },
        { text: "From", value: "form" },
        { text: "To", value: "to" },
        { text: "No of day", value: "no_of_day"},
        { text: "No of hours", value: "no_of_hours"},
        { text: "Pay", value: "pay" },
        { text: "Reasons / Remarks", value: "reasons_remarks" },
        { text: "Status", value: "status" },
    ]
    const items = [
        { employee_name: "Stephen Curry1", date_field: "2017-09-22 08:00:00", leave_availed: "Vacation Leave", form: "2017-09-22", to: "2017-09-22", no_of_day: "1day", no_of_hours:"0 hr", pay: "With Pay", reasons_remarks: "Educational Purpose (Masters)", status: "Approved"},
        { employee_name: "Stephen Curry2", date_field: "2017-09-22 08:00:00", leave_availed: "Travel", form: "2017-09-22", to: "2017-09-22", no_of_day: "1day", no_of_hours:"0 hr", pay: "With Pay", reasons_remarks: "Educational Purpose (Masters)", status: "Approved"},
        { employee_name: "Stephen Curry3", date_field: "2017-09-22 08:00:00", leave_availed: "Sick Leave", form: "2017-09-22", to: "2017-09-22", no_of_day: "1day", no_of_hours:"0 hr", pay: "With Pay", reasons_remarks: "Educational Purpose (Masters)", status: "Approved"},
        { employee_name: "Stephen Curry4", date_field: "2017-09-22 08:00:00", leave_availed: "Vacation Leave", form: "2017-09-22", to: "2017-09-22", no_of_day: "1day", no_of_hours:"0 hr", pay: "With Pay", reasons_remarks: "Educational Purpose (Masters)", status: "Approved"},
        { employee_name: "Stephen Curry6", date_field: "2017-09-22 08:00:00", leave_availed: "Vacation Leave", form: "2017-09-22", to: "2017-09-22", no_of_day: "1day", no_of_hours:"0 hr", pay: "With Pay", reasons_remarks: "Educational Purpose (Masters)", status: "Approved"},
        { employee_name: "Stephen Curry5", date_field: "2017-09-22 08:00:00", leave_availed: "Travel", form: "2017-09-22", to: "2017-09-22", no_of_day: "1day", no_of_hours:"0 hr", pay: "With Pay", reasons_remarks: "Educational Purpose (Masters)", status: "Approved"},
    ]
</script>
<template>
    <RTable :tbl-headers="headers" :tbl-items="items"/>
</template>