<script setup>

</script>
<template>
    <aside id="logo-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-950 dark:border-gray-700" aria-label="Sidebar">
        <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-950">
            <HrmsSidebarItem/>
            <AccountingSidebarItem/>
            <span class="text-lg font-semibold items-center p-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">PROJECT MNGT</span>
            <ul class="space-y-2 font-medium ml-6 pb-5">
                <li>
                    <Nuxt-link to="" class="flex items-center p-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <svg class="w-4 h-4 text-gray-800 dark:text-yellow-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                            <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                            <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
                        </svg>
                        <span class="ml-2 font-light">Dashboard</span>
                    </Nuxt-link>
                </li>
            </ul>
            <span class="text-lg font-semibold p-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">INVENTORY</span>
            <ul class="space-y-2 font-medium ml-6 pb-5">
                <li>
                    <Nuxt-link to="" class="flex items-center p-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <svg class="w-4 h-4 text-gray-800 dark:text-yellow-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                            <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                            <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
                        </svg>
                        <span class="ml-2 font-light">Dashboard</span>
                    </Nuxt-link>
                </li>
            </ul>
            <span class="text-lg font-semibold p-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">SETTINGS</span>
            <ul class="space-y-2 font-medium ml-6 pb-5">
                <li>
                    <Nuxt-link to="/settings" class="flex items-center p-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <svg class="w-4 h-4 text-gray-800 dark:text-yellow-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                            <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                            <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
                        </svg>
                        <span class="ml-2 font-light">Default</span>
                    </Nuxt-link>
                </li>
            </ul>
        </div>
    </aside>
</template>

<style scoped>
</style>