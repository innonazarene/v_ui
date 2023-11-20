<script setup>
    import { Line } from 'vue-chartjs';
    import { Chart as ChartJS, Title, Tooltip, Legend, CategoryScale, LinearScale, LineElement, PointElement } from 'chart.js';

    ChartJS.register(Title, Tooltip, Legend, CategoryScale, LinearScale, LineElement, PointElement);

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
    <Line
        :id="chartId"
        :options="chartOptions"
        :data="chartData"
    />
</template>