<template>
    <form class="space-y-6" action="#">
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
        <div>
            <label for="text" class="block mb-2 text-xl font-medium text-gray-900">Biometrics</label>
            <input type="text" name="biometrics" id="biometrics" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5" placeholder="Biometrics" required>
        </div>
        <div class="flex justify-end mb-2 p-2">
            <RButton btn-label="Update Biometrics">
                <svg class="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 10a28.076 28.076 0 0 1-1.091 9M6.231 2.37a8.994 8.994 0 0 1 12.88 3.73M1.958 13S2 12.577 2 10a8.949 8.949 0 0 1 1.735-5.307m12.84 3.088c.281.706.426 1.46.425 2.22a30 30 0 0 1-.464 6.231M5 10a6 6 0 0 1 9.352-4.974M3 19a5.964 5.964 0 0 1 1.01-3.328 5.15 5.15 0 0 0 .786-1.926m8.66 2.486a13.96 13.96 0 0 1-.962 2.683M6.5 17.336C8 15.092 8 12.846 8 10a3 3 0 1 1 6 0c0 .75 0 1.521-.031 2.311M11 10.001c0 3 0 6-2 9"/>
                </svg>
            </RButton>
        </div>
    </form>
</template>