
<script setup>
    import { Pie } from 'vue-chartjs';
    import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
    ChartJS.register(ArcElement, Tooltip, Legend)

    defineProps({
        chartId: {
            type: String,
            required: true,
        },
        chartData: {
            type: Object,
            required: false,
        },
        chartOptions: {
            type: Object,
            required: false,
        },
    })

</script>

<template>
    <Pie
        :id="chartId"
        :options="chartOptions"
        :data="chartData"
    />
</template>