<script setup>

</script>

<template>
    <div class="md:flex gap-2">
        <RContainer class="w-full" container-label="Payroll Record">
            <p class="py-4 text-xl font-semibold">FILTER</p>
            <div class="md:flex gap-2">
                <div class="w-full p-2">
                    <div class="relative z-0 mb-6 w-full group">
                        <select class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer">
                            <option value="Department 2">Department 2</option>
                            <option value="Department 1">Department 1</option>
                            <option value="Department 3">Department 3</option>
                            <option value="Department 4">Department 4</option>
                        </select>
                        <label for="floating_department_category" class="absolute text-sm text-gray-950 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-bold">Number of Days</label>
                    </div>
                </div>
                <div class="w-full p-2">
                    <div class="relative z-0 mb-6 w-full group">
                        <select class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer">
                            <option value="Type 2">Type 2</option>
                            <option value="Type 1">Type 1</option>
                            <option value="Type 3">Type 3</option>
                            <option value="Type 4">Type 4</option>
                        </select>
                        <label for="floating_type_employee" class="absolute text-sm text-gray-950 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-bold">Employee Type</label>
                    </div>
                </div>
                <div class="w-full p-2">
                    <div class="relative z-0 mb-6 w-full group">
                        <select class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer">
                            <option value="Type">January</option>
                            <option value="Type">February</option>
                            <option value="Type">March</option>
                            <option value="Type">April</option>
                            <option value="Type">May</option>
                            <option value="Type">June</option>
                            <option value="Type">July</option>
                            <option value="Type">August</option>
                            <option value="Type">September</option>
                            <option value="Type">October</option>
                            <option value="Type">November</option>
                            <option value="Type">December</option>
                        </select>
                        <label for="floating_type_employee" class="absolute text-sm text-gray-950 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-bold">Select Month</label>
                    </div>
                </div>
                <div class="w-full p-2">
                    <div class="relative z-0 mb-6 w-full group">
                        <select class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer">
                            <option value="Type">15th</option>
                            <option value="Type">Month End</option>
                        </select>
                        <label for="floating_type_employee" class="absolute text-sm text-gray-950 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-bold">Payroll Date</label>
                    </div>
                </div>
                <div class="w-full p-2">
                    <div class="relative z-0 mb-6 w-full group">
                        <select class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer">
                            <option value="Type">2023</option>
                            <option value="Type">2022</option>
                            <option value="Type">2021</option>
                            <option value="Type">2020</option>
                            <option value="Type">2019</option>
                            <option value="Type">2018</option>

                        </select>
                        <label for="floating_type_employee" class="absolute text-sm text-gray-950 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-bold">Payroll Year</label>
                    </div>
                </div>
            </div>
            <div class="p-2">
                <HrmsPayrollContentTable/>
            </div>
        </RContainer>
    </div>
</template>