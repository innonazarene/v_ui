
<script setup>
    import { Bar } from 'vue-chartjs'
    import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

    ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

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
    <Bar
        :id="chartId"
        :options="chartOptions"
        :data="chartData"
    />
</template>