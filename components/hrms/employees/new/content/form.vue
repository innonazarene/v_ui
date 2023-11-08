<script setup>

</script>

<template>
        <form>
            <div class="md:flex w-full">
                <div class="md:flex md:w-1/4">
                    <div class="w-full px-2">
                        <img class="border-gray-950 border-2" src="https://img.jakpost.net/c/2017/01/26/2017_01_26_20163_1485417604._large.jpg" alt="image description">
                        <div class="relative">
                            <input type="file" name="floating_fname" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer" placeholder=" " required />
                        </div>
                    </div>
                </div>
                <div class="md:w-3/4">
                    <div class="md:grid lg:grid grid-cols-2 border-dashed border-2 border-black p-4 gap-10">
                        <div>
                            <p class="text-xl font-semibold pb-4 underline">Personal Information</p>
                            <div class="md:grid lg:grid grid-cols-2 gap-4">
                                <div class="relative z-0 mb-6 w-full group">
                                    <input type="text" name="floating_fname" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer" placeholder=" " required />
                                    <label for="floating_fname" class="absolute text-sm text-gray-950 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-bold">First Name</label>
                                </div>
                                <div class="relative z-0 mb-6 w-full group">
                                    <input type="text" name="floating_mname" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer" placeholder=" " required />
                                    <label for="floating_mname" class="absolute text-sm text-gray-950 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-bold">Middle Name</label>
                                </div>
                                <div class="relative z-0 mb-6 w-full group">
                                    <input type="text" name="floating_lname" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer" placeholder=" " required />
                                    <label for="floating_lname" class="absolute text-sm text-gray-950 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-bold">Last Name</label>
                                </div>
                                <div class="relative z-0 mb-6 w-full group">
                                    <select class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer">
                                        <option value="">-SELECT-</option>
                                        <option value="Jr">Jr</option>
                                        <option value="Sr">Sr.</option>
                                        <option value="III">III</option>
                                        <option value="IV">IV</option>
                                        <option value="V">V</option>
                                    </select>
                                    <label for="floating_lname" class="absolute text-sm text-gray-950 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-bold">Extension</label>
                                </div>
                                <div class="relative z-0 mb-6 w-full group">
                                    <input type="date" name="floating_birthday" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer" placeholder=" " required />
                                    <label for="floating_birthday" class="absolute text-sm text-gray-950 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-bold">Birthday</label>
                                </div>
                                <div class="relative z-0 mb-6 w-full group">
                                    <select class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer">
                                        <option value="Single">Single</option>
                                        <option value="Married">Married</option>
                                        <option value="Devorce">Devorce</option>
                                        <option value="Widow">Widow</option>
                                    </select>
                                    <label for="floating_status" class="absolute text-sm text-gray-950 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-bold">Status</label>
                                </div>
                                <div class="relative z-0 mb-6 w-full group">
                                    <select class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer">
                                        <option value="">-Select-</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                    <label for="floating_gender" class="absolute text-sm text-gray-950 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-bold">Gender</label>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p class="text-xl font-semibold pb-4 underline">Employment Information</p>
                            <div class="md:grid lg:grid grid-cols-2 gap-4">
                                <div class="relative z-0 mb-6 w-full group">
                                    <select class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer">
                                        <option value="D">Department 1</option>
                                        <option value="D">Department 2</option>
                                    </select>
                                    <label for="floating_deparment" class="absolute text-sm text-gray-950 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-bold">Department</label>
                                </div>
                                <div class="relative z-0 mb-6 w-full group">
                                    <input type="date" name="floating_hiredDate" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer" placeholder=" " required />
                                    <label for="floating_hiredDate" class="absolute text-sm text-gray-950 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-bold">Hired Date</label>
                                </div>
                                <div class="relative z-0 mb-6 w-full group">
                                    <input type="number" name="floating_rate" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer" placeholder=" " required />
                                    <label for="floating_rate" class="absolute text-sm text-gray-950 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-bold">Rate</label>
                                </div>
                                <div class="relative z-0 mb-6 w-full group">
                                    <input type="text" name="floating_jobTitle" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer" placeholder=" " required />
                                    <label for="floating_jobTitle" class="absolute text-sm text-gray-950 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-bold">Middle Name</label>
                                </div>
                                <div class="relative z-0 mb-6 w-full group">
                                    <select class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer">
                                        <option value="D">Employement Type 1</option>
                                        <option value="D">Probationary</option>
                                    </select>
                                    <label for="floating_employementType" class="absolute text-sm text-gray-950 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-bold">Employement Type</label>
                                </div>
                                <div class="relative z-0 mb-6 w-full group">
                                    <input type="number" name="floating_mobile" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer" placeholder=" " required />
                                    <label for="floating_mobile" class="absolute text-sm text-gray-950 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-bold">Mobile Number</label>
                                </div>
                                <div class="relative z-0 mb-6 w-full group">
                                    <input type="number" name="floating_phoneNumber" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer" placeholder=" " required />
                                    <label for="floating_phoneNumber" class="absolute text-sm text-gray-950 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-bold">Phone Number</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="md:flex justify-end py-4">
                        <RButton btn-label="Add Employee">
                            <svg class="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                                <path d="M18 5H0v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5Zm-7.258-2L9.092.8a2.009 2.009 0 0 0-1.6-.8H2.049a2 2 0 0 0-2 2v1h10.693Z"/>
                            </svg>
                        </RButton>
                    </div>
                </div>
            </div>
        </form>
</template>