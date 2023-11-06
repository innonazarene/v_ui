
<script setup>
    import { Pie } from 'vue-chartjs';
    import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
    ChartJS.register(ArcElement, Tooltip, Legend)

    const chartData = ref({
        labels: ["Department 1", "Department 2", "Department 3", "Department 4"],
        datasets: [
            {
            backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
            data: [40, 20, 80, 10]
            }
        ],
    })
</script>

<template>
    <Pie
        class="w-full h-6"
        id="line-chart-id"
        :data="chartData"
    />
</template>