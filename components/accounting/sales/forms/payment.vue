<script setup>
    const headers = [
        { text: "Service Date", value: "service_date" },
        { text: "Product/Services", value: "product_service" },
        { text: "Description", value: "description" },
        { text: "Quantity", value: "qty" },
        { text: "RATE", value: "rate" },
        { text: "AMOUNT", value: "amount" },
    ]
    const items = [
        { service_date: "12/17/23", product_service: "Alluminum Foil1", description: "Sample Dscription", qty: "1", rate: "0.00", amount:"3000"},
        { service_date: "12/17/23", product_service: "Alluminum Foil2", description: "Sample Dscription", qty: "1", rate: "0.00", amount:"3000"},
        { service_date: "12/17/23", product_service: "Alluminum Foil3", description: "Sample Dscription", qty: "1", rate: "0.00", amount:"3000"},
    ]
</script>
<template>
    <form class="p-4 md:px-8">
        <div class="flex justify-between px-5 md:px-2 border-b-2 border-dotted border-gray-800">
            <p class="md:text-3xl text-lg font-bold">Generate Payment</p>
            <p class="md:text-2xl text-lg">Payment no. <span class="font-bold md:text-3xl text-lg">1002</span> </p>
        </div>
        <div class="md:flex justify-between py-4">
            <div class="w-full md:w-2/3 md:flex gap-2">
                <div class="w-full md:w-2/4">
                    <p>Customers</p>
                    <RSearch/>
                </div>
                <div class="w-full md:w-1/4">
                    <p>Customers Email</p>
                    <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5 " placeholder="name@flowbite.com" required>
                </div>
            </div>
            <div class="w-full md:w-1/4">
                <p class="md:text-md text-4xl text-right"> AMOUNT RECIEVE</p>
                <p class="md:text-5xl text-4xl font-bold text-right"> 0.00</p>
            </div>
        </div>

        <div class="w-full md:flex gap-2">
            <div class="w-full">
                <div class="w-full md:flex gap-2 py-4 grid grid-cols-2">
                    <div class="w-full">
                        <p>Payment Date</p>
                        <input type="date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5 " placeholder="Date" required>
                    </div>
                    <div class="w-full">
                        <p>Mode of Payment</p>
                        <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option>Cash</option>
                            <option>Check</option>
                        </select>
                    </div>
                    <div class="w-full">
                        <p>Reference No</p>
                        <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5 " placeholder="Reference No" required>
                    </div>
                    <div class="w-full">
                        <p>Deposite to (Asset) </p>
                        <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option>Cash and cash equivalents</option>
                            <option>Banks etc1 (Assets)</option>
                        </select>
                    </div>
                </div>
                <div class="w-full py-4">
                    <RTable :tbl-headers="headers" :tbl-items="items" :tbl-search="false"/>
                </div>
                <div class="w-full md:flex gap-2">
                    <div class="w-full py-2">
                        <p>Memo</p>
                        <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-yellow-500 focus:border-yellow-500 " placeholder="Address"></textarea>
                    </div>
                    <div class="w-full py-2">
                        <p>Attachment (Image)</p>
                        <input type="file" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5 " placeholder="Reference No" required>
                    </div>
                </div>

            </div>
        </div>
        <div class="w-full flex justify-end py-6 gap-2">
            <RButton btn-label="Save">
                <svg class="w-5 h-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M19 4h-1a1 1 0 1 0 0 2v11a1 1 0 0 1-2 0V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a1 1 0 0 0-1-1ZM3 4a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4Zm9 13H4a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-3H4a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-3H4a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-3h-2a1 1 0 0 1 0-2h2a1 1 0 1 1 0 2Zm0-3h-2a1 1 0 0 1 0-2h2a1 1 0 1 1 0 2Z"/>
                    <path d="M6 5H5v1h1V5Z"/>
                </svg>
            </RButton>
            <RButton btn-label="Clear payment">
                <svg class="w-5 h-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                    <path d="M17 4h-4V2a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2H1a1 1 0 0 0 0 2h1v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1a1 1 0 1 0 0-2ZM7 2h4v2H7V2Zm1 14a1 1 0 1 1-2 0V8a1 1 0 0 1 2 0v8Zm4 0a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0v8Z"/>
                </svg>
            </RButton>
        </div>
    </form>
</template>