<script setup>

</script>

<template>
    <div class="relative overflow-x-auto shadow-md">
        <table class="w-full text-sm text-left text-gray-50 ">
            <thead class="text-xs text-white uppercase bg-yellow-800 dark:bg-gray-950">
                <tr>
                    <th scope="col" rowspan="2" class="px-6 py-3 border-dashed border-2 border-white">
                        Date
                    </th>
                    <th scope="col" colspan="2" class="px-6 py-3 border-dashed border-2 border-white">
                        08:00 am - 12:00 pm
                    </th>
                    <th scope="col" colspan="2" class="px-6 py-3 border-dashed border-2 border-white">
                        08:00 am - 12:00 pm
                    </th>
                    <th scope="col" rowspan="2" class="px-6 py-3 border-dashed border-2 border-white">
                        Total Late
                    </th>
                    <th scope="col" rowspan="2" class="px-6 py-3 border-dashed border-2 border-white">
                        Total Undertime
                    </th>
                    <th scope="col" colspan="2" class="px-6 py-3 border-dashed border-2 border-white">
                        Overtime
                    </th>
                </tr>
                <tr>
                    <th scope="col" class="px-6 py-3 border-dashed border-2 border-white">
                        In
                    </th>
                    <th scope="col" class="px-6 py-3 border-dashed border-2 border-white">
                        Out
                    </th>
                    <th scope="col" class="px-6 py-3 border-dashed border-2 border-white">
                        In
                    </th>
                    <th scope="col" class="px-6 py-3 border-dashed border-2 border-white">
                        Out
                    </th>
                    <th scope="col" class="px-6 py-3 border-dashed border-2 border-white">
                        in
                    </th>
                    <th scope="col" class="px-6 py-3 border-dashed border-2 border-white">
                        Out
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="x in 10" class="bg-white border-b text-gray-950">
                    <td class="px-6 py-4 border-dotted border-2 border-black">
                        Sep 23
                    </td>
                    <td class="px-6 py-4 border-dotted border-2 border-black">
                        10:30
                    </td>
                    <td class="px-6 py-4 border-dotted border-2 border-black">
                        10:30
                    </td>
                    <td class="px-6 py-4 border-dotted border-2 border-black">
                        15:00
                    </td>
                    <td class="px-6 py-4 border-dotted border-2 border-black">
                        15:00
                    </td>
                    <td class="px-6 py-4 border-dotted border-2 border-black">
                        0
                    </td>
                    <td class="px-6 py-4 border-dotted border-2 border-black">
                        0
                    </td>
                    <td class="px-6 py-4 border-dotted border-2 border-black">
                        N/A
                    </td>
                    <td class="px-6 py-4 border-dotted border-2 border-black">
                        N/A
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
