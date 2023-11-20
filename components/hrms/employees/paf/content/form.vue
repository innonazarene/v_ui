<template>
    <form>
        <div class="flex p-2 w-full justify-between gap-2">

            <p class="text-center text-md">Personel Action Form</p>
            <p class="text-center text-md">Date : 11/25/23</p>
        </div>
        <div class="w-full md:flex gap-2">
            <div class="md:w-1/2 py-2">
                <MiscHrmsEmployeeInformation/>
            </div>
            <div class="md:w-1/2 py-2">
                <div class="w-full p-2">
                    <p class="font-semibold text-xl">ACTION TO BE TAKEN</p>
                </div>
                <div class="md:flex gap-2">
                    <div class="w-full p-2">
                        <div class="relative z-0 mb-6 w-full group">
                            <select class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer">
                                <option value="Regularization">Regularization</option>
                                <option value="Promotion">Promotion</option>
                                <option value="Salary Increase">Salary Increase</option>
                                <option value="Transfer">Transfer</option>
                            </select>
                            <label for="floating_status" class="absolute text-sm text-gray-950 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-bold">Status</label>
                        </div>
                    </div>
                    <div class="w-full p-2">
                        <div class="relative z-0 mb-6 w-full group">
                            <input type="date" name="floating_date_effective" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer" placeholder=" " required />
                            <label for="floating_date_effective" class="absolute text-sm text-gray-950 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-bold">Date Effective</label>
                        </div>
                    </div>
                </div>
                <div class="w-full p-2 md:mt-10">
                    <div class="relative z-0 mb-6 w-full group">
                        <select class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer">
                            <option value="Department">Department</option>
                            <option value="Basic Salary">Basic Salary</option>
                            <option value="Transportation">Transportation</option>
                            <option value="Meal ALlowance">Meal ALlowance</option>
                        </select>
                        <label for="floating_status" class="absolute text-sm text-gray-950 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-bold">Category</label>
                    </div>
                </div>
                <div class="w-full md:grid md:grid-cols-2">
                    <div class="w-full p-2">
                        <div class="relative z-0 mb-6 w-full group">
                            <input type="text" name="floating_from_current" value="example-current-data" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer" placeholder=" " required disabled/>
                            <label for="floating_from_current" class="absolute text-md text-gray-950 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-bold">From / Current</label>
                        </div>
                    </div>
                    <div class="w-full p-2">
                        <div class="relative z-0 mb-6 w-full group">
                            <input type="text" name="floating_to" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer" placeholder=" " required/>
                            <label for="floating_to" class="absolute text-md text-gray-950 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-bold">To</label>
                        </div>
                    </div>
                </div>
                <div class="w-full md:grid md:grid-cols-3  md:mt-10">
                    <div class="w-full p-2">
                        <div class="relative z-0 mb-6 w-full group">
                            <input type="text" name="floating_sss" value="example-current-data" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer" placeholder=" " required disabled/>
                            <label for="floating_sss" class="absolute text-md text-gray-950 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-bold">SSS NO.</label>
                        </div>
                    </div>
                    <div class="w-full p-2">
                        <div class="relative z-0 mb-6 w-full group">
                            <input type="text" name="floating_pagibig" value="example-current-data" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer" placeholder=" " required disabled/>
                            <label for="floating_pagibig" class="absolute text-md text-gray-950 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-bold">PAG-IBIG NO.</label>
                        </div>
                    </div>
                    <div class="w-full p-2">
                        <div class="relative z-0 mb-6 w-full group">
                            <input type="text" name="floating_taxExcemption" value="example-current-data" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer" placeholder=" " required disabled/>
                            <label for="floating_taxExcemption" class="absolute text-md text-gray-950 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-bold">TIN NO.</label>
                        </div>
                    </div>
                    <div class="w-full p-2">
                        <div class="relative z-0 mb-6 w-full group">
                            <input type="text" name="floating_tin" value="example-current-data" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer" placeholder=" " required disabled/>
                            <label for="floating_tin" class="absolute text-md text-gray-950 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-bold">PHIC NO.</label>
                        </div>
                    </div>
                    <div class="w-full p-2">
                        <div class="relative z-0 mb-6 w-full group">
                            <input type="text" name="floating_phic" value="example-current-data" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer" placeholder=" " required disabled/>
                            <label for="floating_phic" class="absolute text-md text-gray-950 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-bold">ATM ACCOUNT NO.</label>
                        </div>
                    </div>
                    <div class="w-full p-2">
                        <div class="relative z-0 mb-6 w-full group">
                            <input type="text" name="floating_atm_acc_no" value="example-current-data" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer" placeholder=" " required disabled/>
                            <label for="floating_atm_acc_no" class="absolute text-md text-gray-950 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-bold">TAX EXCEMPTION</label>
                        </div>
                    </div>
                </div>
                <div class="w-full p-2">
                    <p class="font-semibold text-xl">JUSTIFICATION / REMARKS</p>
                </div>
                <div class="mb-2">
                    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
                    <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-yellow-500 focus:border-yellow-500 " placeholder="Write your thoughts here..."></textarea>
                </div>
                <div class="flex justify-end mb-2 p-2">
                    <RButton btn-label="Add Announcement">
                        <svg class="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                            <path d="M18 0H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2v4a1 1 0 0 0 1.707.707L10.414 13H18a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5 4h2a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2ZM5 4h5a1 1 0 1 1 0 2H5a1 1 0 0 1 0-2Zm2 5H5a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Zm9 0h-6a1 1 0 0 1 0-2h6a1 1 0 1 1 0 2Z"/>
                        </svg>
                    </RButton>
                </div>
            </div>
        </div>

    </form>
</template>