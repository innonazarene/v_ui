<template>
    <p class="md:text-xl text-md font-semibold m-2 p-2 text-center">Human Resource Management System (HRMS)</p>
        <div class="grid md:grid-cols-12 grid-cols-4 gap-4  md:gap-2 p-2 m-auto justify-center">
            <Nuxt-link to="/hrms/dashboard" class="grid grid-cols-1 p-2 bg-transparent text-gray-900 gap-2 justify-center text-center">
                <svg class="rounded-full bg-white text-center p-4 text-gray-800 border-2 border-gray-800 hover:text-white hover:bg-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
                </svg>
                <span>Dashboard</span>
            </Nuxt-link>
            <Nuxt-link to="/hrms/announcement" class="grid grid-cols-1 p-2 bg-transparent text-gray-900 gap-2 justify-center text-center">
                <svg class="text-center p-4 rounded-full bg-white text-gray-800 border-2 border-gray-800 hover:text-white hover:bg-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M15 1.943v12.114a1 1 0 0 1-1.581.814L8 11V5l5.419-3.871A1 1 0 0 1 15 1.943ZM7 4H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2v5a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V4ZM4 17v-5h1v5H4ZM16 5.183v5.634a2.984 2.984 0 0 0 0-5.634Z"/>
                </svg>
                <span>Announcement</span>
            </Nuxt-link>
            <Nuxt-link to="/hrms/calendar" class="grid grid-cols-1 p-2 bg-transparent text-gray-900 gap-2 justify-center text-center">
                <svg class="text-center p-4 text-gray-800 border-2 border-gray-800 hover:text-white hover:bg-gray-800 bg-white rounded-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path fill="currentColor" d="M6 1a1 1 0 0 0-2 0h2ZM4 4a1 1 0 0 0 2 0H4Zm7-3a1 1 0 1 0-2 0h2ZM9 4a1 1 0 1 0 2 0H9Zm7-3a1 1 0 1 0-2 0h2Zm-2 3a1 1 0 1 0 2 0h-2ZM1 6a1 1 0 0 0 0 2V6Zm18 2a1 1 0 1 0 0-2v2ZM5 11v-1H4v1h1Zm0 .01H4v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM10 11v-1H9v1h1Zm0 .01H9v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM10 15v-1H9v1h1Zm0 .01H9v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM15 15v-1h-1v1h1Zm0 .01h-1v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM15 11v-1h-1v1h1Zm0 .01h-1v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM5 15v-1H4v1h1Zm0 .01H4v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM2 4h16V2H2v2Zm16 0h2a2 2 0 0 0-2-2v2Zm0 0v14h2V4h-2Zm0 14v2a2 2 0 0 0 2-2h-2Zm0 0H2v2h16v-2ZM2 18H0a2 2 0 0 0 2 2v-2Zm0 0V4H0v14h2ZM2 4V2a2 2 0 0 0-2 2h2Zm2-3v3h2V1H4Zm5 0v3h2V1H9Zm5 0v3h2V1h-2ZM1 8h18V6H1v2Zm3 3v.01h2V11H4Zm1 1.01h.01v-2H5v2Zm1.01-1V11h-2v.01h2Zm-1-1.01H5v2h.01v-2ZM9 11v.01h2V11H9Zm1 1.01h.01v-2H10v2Zm1.01-1V11h-2v.01h2Zm-1-1.01H10v2h.01v-2ZM9 15v.01h2V15H9Zm1 1.01h.01v-2H10v2Zm1.01-1V15h-2v.01h2Zm-1-1.01H10v2h.01v-2ZM14 15v.01h2V15h-2Zm1 1.01h.01v-2H15v2Zm1.01-1V15h-2v.01h2Zm-1-1.01H15v2h.01v-2ZM14 11v.01h2V11h-2Zm1 1.01h.01v-2H15v2Zm1.01-1V11h-2v.01h2Zm-1-1.01H15v2h.01v-2ZM4 15v.01h2V15H4Zm1 1.01h.01v-2H5v2Zm1.01-1V15h-2v.01h2Zm-1-1.01H5v2h.01v-2Z"/>
                </svg>
                <span>Calendar</span>
            </Nuxt-link>
            <Nuxt-link to="/hrms/biometrics" class="grid grid-cols-1 p-2 bg-transparent text-gray-900 gap-2 justify-center text-center">
                <svg class="text-center p-4 text-gray-800 border-2 border-gray-800 hover:text-white hover:bg-gray-800 bg-white rounded-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 10a28.076 28.076 0 0 1-1.091 9M6.231 2.37a8.994 8.994 0 0 1 12.88 3.73M1.958 13S2 12.577 2 10a8.949 8.949 0 0 1 1.735-5.307m12.84 3.088c.281.706.426 1.46.425 2.22a30 30 0 0 1-.464 6.231M5 10a6 6 0 0 1 9.352-4.974M3 19a5.964 5.964 0 0 1 1.01-3.328 5.15 5.15 0 0 0 .786-1.926m8.66 2.486a13.96 13.96 0 0 1-.962 2.683M6.5 17.336C8 15.092 8 12.846 8 10a3 3 0 1 1 6 0c0 .75 0 1.521-.031 2.311M11 10.001c0 3 0 6-2 9"/>
                </svg>
                <span>Biometrics</span>
            </Nuxt-link>
            <Nuxt-link to="/hrms/attendance" class="grid grid-cols-1 p-2 bg-transparent text-gray-900 gap-2 justify-center text-center">
                <svg class="text-center p-4 text-gray-800 border-2 border-gray-800 hover:text-white hover:bg-gray-800 bg-white rounded-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z"/>
                </svg>
                <span>DTR</span>
            </Nuxt-link>
            <Nuxt-link to="/hrms/attendance" class="grid grid-cols-1 p-2 bg-transparent text-gray-900 gap-2 justify-center text-center">
                <svg class="text-center p-4 text-gray-800 border-2 border-gray-800 hover:text-white hover:bg-gray-800 bg-white rounded-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M16 0H4a2 2 0 0 0-2 2v1H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM13.929 17H7.071a.5.5 0 0 1-.5-.5 3.935 3.935 0 1 1 7.858 0 .5.5 0 0 1-.5.5Z"/>
                </svg>
                <span>Attendance</span>
            </Nuxt-link>
            <Nuxt-link to="/hrms/failureToLog" class="grid grid-cols-1 p-2 bg-transparent text-gray-900 gap-2 justify-center text-center">
                <svg class="text-center p-4 text-gray-800 border-2 border-gray-800 hover:text-white hover:bg-gray-800 bg-white rounded-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z"/>
                </svg>
                <span>Failure To Log</span>
            </Nuxt-link>
            <Nuxt-link to="/hrms/employees/new" class="grid grid-cols-1 p-2 bg-transparent text-gray-900 gap-2 justify-center text-center">
                <svg class="text-center p-4 text-gray-800 border-2 border-gray-800 hover:text-white hover:bg-gray-800 bg-white rounded-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M.188 5H5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707c-.358.362-.617.81-.753 1.3C.148 5.011.166 5 .188 5ZM14 8a6 6 0 1 0 0 12 6 6 0 0 0 0-12Zm2 7h-1v1a1 1 0 0 1-2 0v-1h-1a1 1 0 0 1 0-2h1v-1a1 1 0 0 1 2 0v1h1a1 1 0 0 1 0 2Z"/>
                    <path d="M6 14a7.969 7.969 0 0 1 10-7.737V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H.188A.909.909 0 0 1 0 6.962V18a1.969 1.969 0 0 0 1.933 2h6.793A7.976 7.976 0 0 1 6 14Z"/>
                </svg>
                <span>New employee</span>
            </Nuxt-link>
            <Nuxt-link to="/hrms/employees/paf" class="grid grid-cols-1 p-2 bg-transparent text-gray-900 gap-2 justify-center text-center">
                <svg class="text-center p-4 text-gray-800 border-2 border-gray-800 hover:text-white hover:bg-gray-800 bg-white rounded-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z"/>
                </svg>
                <span>Personal Action</span>
            </Nuxt-link>
            <Nuxt-link to="/hrms/employees/userAccount" class="grid grid-cols-1 p-2 bg-transparent text-gray-900 gap-2 justify-center text-center">
                <svg class="text-center p-4 text-gray-800 border-2 border-gray-800 hover:text-white hover:bg-gray-800 bg-white rounded-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6 18H2V3h3v1a1 1 0 0 0 0 2h2.758l2-2H7V2h3v1.779c.546-.5 1.26-.777 2-.779h5a2 2 0 0 0-2-2h-3.278A1.992 1.992 0 0 0 10 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h4a.972.972 0 0 0 .474-.136A4.01 4.01 0 0 1 6 18Z"/>
                    <path d="M12 5a1 1 0 0 0-.707.293l-3 3A1 1 0 0 0 8 9h4V5Z"/>
                    <path d="M18.067 5H14v4a2 2 0 0 1-2 2H8v7a1.969 1.969 0 0 0 1.933 2h8.134A1.97 1.97 0 0 0 20 18V7a1.97 1.97 0 0 0-1.933-2Z"/>
                </svg>
                <span>User Accounts</span>
            </Nuxt-link>
            <Nuxt-link to="/hrms/employees/201" class="grid grid-cols-1 p-2 bg-transparent text-gray-900 gap-2 justify-center text-center">
                <svg class="text-center p-4 text-gray-800 border-2 border-gray-800 hover:text-white hover:bg-gray-800 bg-white rounded-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 5h1v12a2 2 0 0 1-2 2m0 0a2 2 0 0 1-2-2V2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v15a2 2 0 0 0 2 2h14ZM10 4h2m-2 3h2m-8 3h8m-8 3h8m-8 3h8M4 4h3v3H4V4Z"/>
                </svg>
                <span>201-Form</span>
            </Nuxt-link>
            <Nuxt-link to="/hrms/department" class="grid grid-cols-1 p-2 bg-transparent text-gray-900 gap-2 justify-center text-center">
                <svg class="text-center p-4 text-gray-800 border-2 border-gray-800 hover:text-white hover:bg-gray-800 bg-white rounded-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17 16h-1V2a1 1 0 1 0 0-2H2a1 1 0 0 0 0 2v14H1a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM5 4a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4Zm0 5V8a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1Zm6 7H7v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3Zm2-7a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1Zm0-4a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1Z"/>
                </svg>
                <span>Department</span>
            </Nuxt-link>
            <Nuxt-link to="/hrms/category" class="grid grid-cols-1 p-2 bg-transparent text-gray-900 gap-2 justify-center text-center">
                <svg class="text-center p-4 text-gray-800 border-2 border-gray-800 hover:text-white hover:bg-gray-800 bg-white rounded-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M1 19h13a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H0v10a1 1 0 0 0 1 1ZM0 6h7.443l-1.2-1.6a1 1 0 0 0-.8-.4H1a1 1 0 0 0-1 1v1Z"/>
                    <path d="M17 4h-4.557l-2.4-3.2a2.009 2.009 0 0 0-1.6-.8H4a2 2 0 0 0-2 2h3.443a3.014 3.014 0 0 1 2.4 1.2l2.1 2.8H14a3 3 0 0 1 3 3v8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"/>
                </svg>
                <span>Category</span>
            </Nuxt-link>
            <Nuxt-link to="/hrms/leaves" class="grid grid-cols-1 p-2 bg-transparent text-gray-900 gap-2 justify-center text-center">
                <svg class="text-center p-4 text-gray-800 border-2 border-gray-800 hover:text-white hover:bg-gray-800 bg-white rounded-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z"/>
                </svg>
                <span>Leave</span>
            </Nuxt-link>
            <Nuxt-link to="/hrms/payroll" class="grid grid-cols-1 p-2 bg-transparent text-gray-900 gap-2 justify-center text-center">
                <svg class="text-center p-4 text-gray-800 border-2 border-gray-800 hover:text-white hover:bg-gray-800 bg-white rounded-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1M2 5h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm8 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
                </svg>
                <span>Payroll</span>
            </Nuxt-link>
        </div>
</template>