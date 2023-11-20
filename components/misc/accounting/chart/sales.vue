
import type { ChartsLine } from '#build/components';

<script setup>
    const chartData = ref({
        labels: ["Nov 1", "Nov 2", "Nov 3", "Nov 4", "Nov 5"],
        datasets: [
            {
                label:"Sales",
                backgroundColor: "#374151",
                borderColor: "#374151",
                data: [500, 1200, 600, 4500, 7000],
            },
        ],
    })

    const chartOptions = ref({
        responsive: true,
        aspectRatio:2,
        indexAxis: 'x',
    });
</script>

<template>
    <div class="relative z-0 mb-6 w-full group">
        <select class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer">
            <option value="">Last 30 days</option>
        </select>
    </div>
    <p class="text-gray-800 text-sm"><span class="font-bold">TOTAL SALES</span> of last 30 days</p>
    <div class="w-full">
        <p class="text-gray-800 text-4xl font-bold">₱ {{ new Intl.NumberFormat().format(30000) }}</p>
    </div>
    <ChartsLine  :chart-data="chartData" chart-id="sales-chart" :chart-options="chartOptions" />
</template>