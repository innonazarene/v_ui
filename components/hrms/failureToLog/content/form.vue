<template>
    <form>
        <div class="mb-4">
            <img class="md:h-56 w-full bg-gray-400 rounded-lg" src="https://img.jakpost.net/c/2017/01/26/2017_01_26_20163_1485417604._large.jpg" alt="profile pic">
            <div class="grid grid-cols-2 gap-2">
                <div>
                    <label for="text" class="block mb-2 text-sm font-medium text-gray-900">Employee Name</label>
                    <p class="text-xl">Juan Dela Cruz</p>
                </div>
                <div>
                    <label for="text" class="block mb-2 text-sm font-medium text-gray-900">Employee Name</label>
                    <p class="text-xl">Developer</p>
                </div>
            </div>
        </div>
        <div class="mb-4">
            <label for="log-date" class="block text-gray-600">Log Date (dd/mm/yyyy)</label>
            <input type="date" id="log-date" name="log-date" class="w-full border rounded py-2 px-3">
        </div>
        <div class="mb-4">
            <label for="log-date" class="block text-gray-600">Time In</label>
            <input type="time" id="log-date" name="log-date" class="w-full border rounded py-2 px-3">
        </div>
        <div class="mb-4">
            <label for="log-date" class="block text-gray-600">Time Out</label>
            <input type="time" id="log-date" name="log-date" class="w-full border rounded py-2 px-3">
        </div>
        <div class="flex justify-end mb-2 p-2">
            <RButton btn-label="Save Failure to Login">
                <svg class="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                    <path d="m19.822 7.431-4.846-7A1 1 0 0 0 14.153 0H1a1 1 0 0 0-.822 1.569L4.63 8 .178 14.431A1 1 0 0 0 1 16h13.153a1.001 1.001 0 0 0 .823-.431l4.846-7a1 1 0 0 0 0-1.138Z"/>
                </svg>
            </RButton>
        </div>
    </form>
</template>