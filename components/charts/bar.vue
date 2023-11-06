
<script setup>
    import { Bar } from 'vue-chartjs'
    import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

    ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

    const chartData = ref({
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [{
            label:"Absents",
            backgroundColor: "red",
            borderColor: "red",
            data: [50, 70, 80, 60, 90, 75],
        }],
    })

    const chartOptions = ref({
        aspectRatio:(1529/3000),
        responsive: true,
    });
</script>

<template>
    <Bar
        id="my-chart-id"
        :options="chartOptions"
        :data="chartData"
    />
</template>