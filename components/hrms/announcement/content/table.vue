<script setup>
    const headers = [
        { text: "TITLE", value: "title" },
        { text: "DATE START", value: "date_start" },
        { text: "DATE END", value: "date_end" },

    ]

    const items = [
        { title: "WEARING ID AND UNIFORM", date_start: "10/1/23", date_end: "10/31/23" },
        { title: "WEARING PROPER ATTIRE", date_start: "10/1/23", date_end: "10/31/23" },
        { title: "HAPPY HOLLOWIN", date_start: "10/1/23", date_end: "10/31/23" },
    ]
</script>
<template>
    <RTable :tbl-headers="headers" :tbl-items="items"/>
</template>