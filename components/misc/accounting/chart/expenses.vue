
<script setup>
    const chartData = ref({
        labels: ["Equipments Rental", "Cost of Sales" , "Planning"],
        datasets: [
            {
            backgroundColor: ['#374151', '#315b9e','#ebd420'],
            data: [39020, 68499, 12004]
            }
        ],
    })

    const chartOptions = ref({
        responsive: true,
        aspectRatio:2,
        indexAxis: 'y',
    });
</script>

<template>
    <div class="relative z-0 mb-6 w-full group">
        <select class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer">
            <option value="">Last 30 days</option>
        </select>
    </div>
    <p class="text-gray-800 text-sm">Spending for last <span class="font-bold">30 days</span></p>
        <div class="w-full">
            <p class="text-gray-800 text-4xl font-bold">₱ {{ new Intl.NumberFormat().format(30000) }}</p>
        </div>
    <ChartsDoughnut chart-id="expenses-id" :chart-data="chartData" :chartOptions="chartOptions" />
</template>