
<script setup>
    import { Doughnut, Pie } from 'vue-chartjs';
    import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
    ChartJS.register(ArcElement, Tooltip, Legend)

    const chartData = ref({
        labels: ["Department 1", "Department 2"],
        datasets: [
            {
            backgroundColor: ['#374151', '#315b9e'],
            data: [40, 20,]
            }
        ],
    })

    const chartOptions = ref({
        responsive: true,
        aspectRatio:1.5,
        indexAxis: 'y',
    });
</script>

<template>
    <ChartsDoughnut chart-id="department-id" :chart-data="chartData" :chartOptions="chartOptions" />
</template>