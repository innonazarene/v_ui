<script setup>
    const headers = [
        { text: "CREDITS", value: "credit" },
        { text: "Earned", value: "earned" },
        { text: "Used", value: "used" },
        { text: "Balance", value: "balance" },
    ]
    const items = [
        { credit: "Vacation Leave", earned: 0, used: 0, balance: 0},
        { credit: "Sick Leave", earned: 0, used: 0, balance: 0},
        { credit: "Service Incentive Leave", earned: 0, used: 0, balance: 0},
        { credit: "Emergency Leave", earned: 0, used: 0, balance: 0},
        { credit: "Paternity Leave", earned: 0, used: 0, balance: 0},
        { credit: "Maternity Leave", earned: 0, used: 0, balance: 0},
        { credit: "Birthday Leave", earned: 0, used: 0, balance: 0},
        { credit: "Solo Parent Leave", earned: 0, used: 0, balance: 0},
        { credit: "Educational Leave", earned: 0, used: 0, balance: 0},
        { credit: "Menstrual Leave", earned: 0, used: 0, balance: 0},

    ]
</script>
<template>
    <RTable :tbl-headers="headers" :tbl-items="items" :tbl-search="false"/>
</template>