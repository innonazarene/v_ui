<script setup>
    import { Line } from 'vue-chartjs';
    import { Chart as ChartJS, Title, Tooltip, Legend, CategoryScale, LinearScale, LineElement, PointElement } from 'chart.js';

    ChartJS.register(Title, Tooltip, Legend, CategoryScale, LinearScale, LineElement, PointElement);

    const chartData = ref({
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [{
            label:"Absents",
            backgroundColor: "green",
            borderColor: "green",
            data: [50, 70, 80, 60, 90, 75],
        }],
    })

    const chartOptions = ref({
        aspectRatio:(1529/3000),
        responsive: true,
    });
</script>

<template>
    <Line
        id="line-chart-id"
        :options="chartOptions"
        :data="chartData"
    />
</template>