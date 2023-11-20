<script setup>

const { currentRoute } = useRouter()

const checkPath = (path) => {
    return (path == currentRoute.value.name) ? "sidebar-active" : ""
}
</script>
<template>
    <span class="text-lg font-semibold items-center p-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">ACOUNTING</span>
        <ul class="space-y-2 font-medium ml-6 pb-5">
            <li :class="checkPath('accounting-dashboard')">
                <Nuxt-link to="/accounting/dashboard" class="flex items-center p-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                    <svg class="w-4 h-4 text-gray-800 dark:text-yellow-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                        <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                        <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
                    </svg>
                    <span class="ml-2 font-light">Dashboard</span>
                </Nuxt-link>
            </li>
            <li>
                <button type="button" class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-sales" data-collapse-toggle="dropdown-sales">
                    <svg class="w-4 h-4 text-gray-800 dark:text-yellow-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                        <path d="M16 0H4a2 2 0 0 0-2 2v1H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM13.929 17H7.071a.5.5 0 0 1-.5-.5 3.935 3.935 0 1 1 7.858 0 .5.5 0 0 1-.5.5Z"/>
                    </svg>
                    <span class="flex-1 ml-2 font-light text-left whitespace-nowrap">Sales</span>
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                    </svg>
                </button>
                <ul id="dropdown-sales" class="hidden py-2 space-y-2 ml-4">
                    <li :class="checkPath('accounting-sales')">
                        <Nuxt-link to="/accounting/sales" class="flex items-center p-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <svg class="w-[16px] h-[16px] text-gray-800 dark:text-yellow-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M.188 5H5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707c-.358.362-.617.81-.753 1.3C.148 5.011.166 5 .188 5ZM14 8a6 6 0 1 0 0 12 6 6 0 0 0 0-12Zm2 7h-1v1a1 1 0 0 1-2 0v-1h-1a1 1 0 0 1 0-2h1v-1a1 1 0 0 1 2 0v1h1a1 1 0 0 1 0 2Z"/>
                                <path d="M6 14a7.969 7.969 0 0 1 10-7.737V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H.188A.909.909 0 0 1 0 6.962V18a1.969 1.969 0 0 0 1.933 2h6.793A7.976 7.976 0 0 1 6 14Z"/>
                            </svg>
                            <span class="ml-2 font-light">All Sales</span>
                        </Nuxt-link>
                    </li>
                    <li :class="checkPath('accounting-sales-invoices')">
                        <Nuxt-link to="/accounting/sales/invoices" class="flex items-center p-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <svg class="w-[16px] h-[16px] text-gray-800 dark:text-yellow-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M.188 5H5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707c-.358.362-.617.81-.753 1.3C.148 5.011.166 5 .188 5ZM14 8a6 6 0 1 0 0 12 6 6 0 0 0 0-12Zm2 7h-1v1a1 1 0 0 1-2 0v-1h-1a1 1 0 0 1 0-2h1v-1a1 1 0 0 1 2 0v1h1a1 1 0 0 1 0 2Z"/>
                                <path d="M6 14a7.969 7.969 0 0 1 10-7.737V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H.188A.909.909 0 0 1 0 6.962V18a1.969 1.969 0 0 0 1.933 2h6.793A7.976 7.976 0 0 1 6 14Z"/>
                            </svg>
                            <span class="ml-2 font-light">Invoices</span>
                        </Nuxt-link>
                    </li>
                    <li :class="checkPath('accounting-sales-customers')">
                        <Nuxt-link to="/accounting/sales/customers" class="flex items-center p-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <svg class="w-[16px] h-[16px] text-gray-800 dark:text-yellow-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M.188 5H5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707c-.358.362-.617.81-.753 1.3C.148 5.011.166 5 .188 5ZM14 8a6 6 0 1 0 0 12 6 6 0 0 0 0-12Zm2 7h-1v1a1 1 0 0 1-2 0v-1h-1a1 1 0 0 1 0-2h1v-1a1 1 0 0 1 2 0v1h1a1 1 0 0 1 0 2Z"/>
                                <path d="M6 14a7.969 7.969 0 0 1 10-7.737V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H.188A.909.909 0 0 1 0 6.962V18a1.969 1.969 0 0 0 1.933 2h6.793A7.976 7.976 0 0 1 6 14Z"/>
                            </svg>
                            <span class="ml-2 font-light">customers</span>
                        </Nuxt-link>
                    </li>
                </ul>
            </li>
            <li>
                <button type="button" class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-purchases" data-collapse-toggle="dropdown-purchases">
                    <svg class="w-4 h-4 text-gray-800 dark:text-yellow-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                        <path d="M16 0H4a2 2 0 0 0-2 2v1H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM13.929 17H7.071a.5.5 0 0 1-.5-.5 3.935 3.935 0 1 1 7.858 0 .5.5 0 0 1-.5.5Z"/>
                    </svg>
                    <span class="flex-1 ml-2 font-light text-left whitespace-nowrap">Purchases</span>
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                    </svg>
                </button>
                <ul id="dropdown-purchases" class="hidden py-2 space-y-2 ml-4">
                    <li>
                        <Nuxt-link to="" class="flex items-center p-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <svg class="w-[16px] h-[16px] text-gray-800 dark:text-yellow-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M.188 5H5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707c-.358.362-.617.81-.753 1.3C.148 5.011.166 5 .188 5ZM14 8a6 6 0 1 0 0 12 6 6 0 0 0 0-12Zm2 7h-1v1a1 1 0 0 1-2 0v-1h-1a1 1 0 0 1 0-2h1v-1a1 1 0 0 1 2 0v1h1a1 1 0 0 1 0 2Z"/>
                                <path d="M6 14a7.969 7.969 0 0 1 10-7.737V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H.188A.909.909 0 0 1 0 6.962V18a1.969 1.969 0 0 0 1.933 2h6.793A7.976 7.976 0 0 1 6 14Z"/>
                            </svg>
                            <span class="ml-2 font-light">Vendor Bills</span>
                        </Nuxt-link>
                    </li>
                    <li>
                        <Nuxt-link to="" class="flex items-center p-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <svg class="w-[16px] h-[16px] text-gray-800 dark:text-yellow-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M.188 5H5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707c-.358.362-.617.81-.753 1.3C.148 5.011.166 5 .188 5ZM14 8a6 6 0 1 0 0 12 6 6 0 0 0 0-12Zm2 7h-1v1a1 1 0 0 1-2 0v-1h-1a1 1 0 0 1 0-2h1v-1a1 1 0 0 1 2 0v1h1a1 1 0 0 1 0 2Z"/>
                                <path d="M6 14a7.969 7.969 0 0 1 10-7.737V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H.188A.909.909 0 0 1 0 6.962V18a1.969 1.969 0 0 0 1.933 2h6.793A7.976 7.976 0 0 1 6 14Z"/>
                            </svg>
                            <span class="ml-2 font-light">Payments</span>
                        </Nuxt-link>
                    </li>
                    <li>
                        <Nuxt-link to="" class="flex items-center p-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <svg class="w-[16px] h-[16px] text-gray-800 dark:text-yellow-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M.188 5H5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707c-.358.362-.617.81-.753 1.3C.148 5.011.166 5 .188 5ZM14 8a6 6 0 1 0 0 12 6 6 0 0 0 0-12Zm2 7h-1v1a1 1 0 0 1-2 0v-1h-1a1 1 0 0 1 0-2h1v-1a1 1 0 0 1 2 0v1h1a1 1 0 0 1 0 2Z"/>
                                <path d="M6 14a7.969 7.969 0 0 1 10-7.737V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H.188A.909.909 0 0 1 0 6.962V18a1.969 1.969 0 0 0 1.933 2h6.793A7.976 7.976 0 0 1 6 14Z"/>
                            </svg>
                            <span class="ml-2 font-light">Vendors</span>
                        </Nuxt-link>
                    </li>
                    <li>
                        <Nuxt-link to="" class="flex items-center p-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <svg class="w-[16px] h-[16px] text-gray-800 dark:text-yellow-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M.188 5H5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707c-.358.362-.617.81-.753 1.3C.148 5.011.166 5 .188 5ZM14 8a6 6 0 1 0 0 12 6 6 0 0 0 0-12Zm2 7h-1v1a1 1 0 0 1-2 0v-1h-1a1 1 0 0 1 0-2h1v-1a1 1 0 0 1 2 0v1h1a1 1 0 0 1 0 2Z"/>
                                <path d="M6 14a7.969 7.969 0 0 1 10-7.737V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H.188A.909.909 0 0 1 0 6.962V18a1.969 1.969 0 0 0 1.933 2h6.793A7.976 7.976 0 0 1 6 14Z"/>
                            </svg>
                            <span class="ml-2 font-light">Purchasable Products</span>
                        </Nuxt-link>
                    </li>
                </ul>
            </li>
            <li>
                <button type="button" class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-adviser" data-collapse-toggle="dropdown-adviser">
                    <svg class="w-4 h-4 text-gray-800 dark:text-yellow-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                        <path d="M16 0H4a2 2 0 0 0-2 2v1H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM13.929 17H7.071a.5.5 0 0 1-.5-.5 3.935 3.935 0 1 1 7.858 0 .5.5 0 0 1-.5.5Z"/>
                    </svg>
                    <span class="flex-1 ml-2 font-light text-left whitespace-nowrap">Adviser</span>
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                    </svg>
                </button>
                <ul id="dropdown-adviser" class="hidden py-2 space-y-2 ml-4">
                    <li>
                        <Nuxt-link to="" class="flex items-center p-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <svg class="w-[16px] h-[16px] text-gray-800 dark:text-yellow-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M.188 5H5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707c-.358.362-.617.81-.753 1.3C.148 5.011.166 5 .188 5ZM14 8a6 6 0 1 0 0 12 6 6 0 0 0 0-12Zm2 7h-1v1a1 1 0 0 1-2 0v-1h-1a1 1 0 0 1 0-2h1v-1a1 1 0 0 1 2 0v1h1a1 1 0 0 1 0 2Z"/>
                                <path d="M6 14a7.969 7.969 0 0 1 10-7.737V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H.188A.909.909 0 0 1 0 6.962V18a1.969 1.969 0 0 0 1.933 2h6.793A7.976 7.976 0 0 1 6 14Z"/>
                            </svg>
                            <span class="ml-2 font-light">Journal Book</span>
                        </Nuxt-link>
                    </li>
                    <li>
                        <Nuxt-link to="" class="flex items-center p-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <svg class="w-[16px] h-[16px] text-gray-800 dark:text-yellow-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M.188 5H5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707c-.358.362-.617.81-.753 1.3C.148 5.011.166 5 .188 5ZM14 8a6 6 0 1 0 0 12 6 6 0 0 0 0-12Zm2 7h-1v1a1 1 0 0 1-2 0v-1h-1a1 1 0 0 1 0-2h1v-1a1 1 0 0 1 2 0v1h1a1 1 0 0 1 0 2Z"/>
                                <path d="M6 14a7.969 7.969 0 0 1 10-7.737V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H.188A.909.909 0 0 1 0 6.962V18a1.969 1.969 0 0 0 1.933 2h6.793A7.976 7.976 0 0 1 6 14Z"/>
                            </svg>
                            <span class="ml-2 font-light">Journal Entries</span>
                        </Nuxt-link>
                    </li>
                    <li>
                        <Nuxt-link to="" class="flex items-center p-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <svg class="w-[16px] h-[16px] text-gray-800 dark:text-yellow-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M.188 5H5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707c-.358.362-.617.81-.753 1.3C.148 5.011.166 5 .188 5ZM14 8a6 6 0 1 0 0 12 6 6 0 0 0 0-12Zm2 7h-1v1a1 1 0 0 1-2 0v-1h-1a1 1 0 0 1 0-2h1v-1a1 1 0 0 1 2 0v1h1a1 1 0 0 1 0 2Z"/>
                                <path d="M6 14a7.969 7.969 0 0 1 10-7.737V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H.188A.909.909 0 0 1 0 6.962V18a1.969 1.969 0 0 0 1.933 2h6.793A7.976 7.976 0 0 1 6 14Z"/>
                            </svg>
                            <span class="ml-2 font-light">Chart of Accouts</span>
                        </Nuxt-link>
                    </li>

                </ul>
            </li>
        </ul>
</template>