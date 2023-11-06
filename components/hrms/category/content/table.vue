<script setup>
    const headers = [
        { text: "ID", value: "id" },
        { text: "CATEGORY NAME", value: "name" },
        { text: "CREATED AT", value: "created" },
        { text: "UPDATED AT", value: "updated" },
    ]

    const items = [
        { id: "Category-0011", name: "Category Sample 11", created: "10/24/23", updated: "10/24/23"},
        { id: "Category-0012", name: "Category Sample 12", created: "10/24/23", updated: "10/24/23"},
        { id: "Category-0013", name: "Category Sample 13", created: "10/24/23", updated: "10/24/23"},
        { id: "Category-0014", name: "Category Sample 14", created: "10/24/23", updated: "10/24/23"},
        { id: "Category-0015", name: "Category Sample 15", created: "10/24/23", updated: "10/24/23"},
        { id: "Category-0016", name: "Category Sample 16", created: "10/24/23", updated: "10/24/23"},
        { id: "Category-0017", name: "Category Sample 17", created: "10/24/23", updated: "10/24/23"},
        { id: "Category-0018", name: "Category Sample 18", created: "10/24/23", updated: "10/24/23"},
    ]
</script>
<template>
    <RTable :tbl-headers="headers" :tbl-items="items"/>
</template>