
<script setup>
    const chartData = ref({
        labels: ["2023"],
        datasets: [
            {
                label:"Paid",
                backgroundColor: "#374151",
                borderColor: "#374151",
                data: [5332],
            },
            {
                label:"Unpaid",
                backgroundColor: "#315b9e",
                borderColor: "#315b9e",
                data: [2200],
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
    <p class="text-gray-800 text-sm">Net Profit of last 365 days</p>
        <div class="w-full">
            <p class="text-gray-800 text-4xl font-bold">₱ {{ new Intl.NumberFormat().format(30000) }}</p>
        </div>
    <ChartsBar  :chart-data="chartData" chart-id="invoice-chart" :chart-options="chartOptions" />
</template>