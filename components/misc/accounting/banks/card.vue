<template>
    <div v-for="i in 3" class="shadow-lg bg-gray-50 w-full border-r-4 border-gray-800 p-4 my-2">
        <p class="text-yellow-600 text-md font-semibold">Cash and Equivalents {{ i }}</p>
        <div class="flex justify-between">
            <p class="text-gray-600 text-xs">Defaul Banks</p>
            <p class="text-gray-600 text-lg font-bold">₱ {{ new Intl.NumberFormat().format(5000 * i) }}</p>
        </div>
    </div>

</template>