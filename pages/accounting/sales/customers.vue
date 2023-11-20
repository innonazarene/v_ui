<script setup>
    import { onMounted } from 'vue'
    import { initFlowbite } from 'flowbite'
    const { currentRoute } = useRouter()

    // initialize components based on data attribute selectors
    onMounted(() => {
        initFlowbite()
    })
    const headers = [
        { text: "Date", value: "name" },
        { text: "Company", value: "company_name" },
        { text: "Phone", value: "phone" },
        { text: "Open Balance", value: "open_balance" },
    ]
    const items = [
        { name: "Sample Customer121", company_name: "Sample Company 1", phone:"0982929277", open_balance: "1640.00"},
        { name: "Sample Customer122", company_name: "Sample Company 1", phone:"0982929277", open_balance: "1640.00"},
        { name: "Sample Customer123", company_name: "Sample Company 1", phone:"0982929277", open_balance: "1640.00"},
        { name: "Sample Customer124", company_name: "Sample Company 1", phone:"0982929277", open_balance: "1640.00"},
        { name: "Sample Customer125", company_name: "Sample Company 1", phone:"0982929277", open_balance: "1640.00"},
        { name: "Sample Customer126", company_name: "Sample Company 1", phone:"0982929277", open_balance: "1640.00"},

    ]
</script>
<template>
    <div class="md:flex gap-2 w-full">
        <RContainer class="w-full md:w-2/3" container-label="SALES SUMMARY">
            <div class="md:flex gap-2 w-full">
                <RSummaryCard class="h-20" card-label="ESTIMATES" card-total-summary="500000" :has-sign="true" >
                    <svg class="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1M2 5h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm8 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
                    </svg>
                </RSummaryCard>
                <RSummaryCard class="h-20" card-label="OVERDUE INFORMATION" card-total-summary="500000" :has-sign="true" >
                    <svg class="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1M2 5h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm8 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
                    </svg>
                </RSummaryCard>
            </div>
            <div class="md:flex gap-2 w-full">
                <RSummaryCard class="h-20" card-label="OPEN INVOICES OR CREDIT" card-total-summary="500000" :has-sign="true" >
                    <svg class="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1M2 5h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm8 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
                    </svg>
                </RSummaryCard>
                <RSummaryCard class="h-20" card-label="RECENT PAID" card-total-summary="500000" :has-sign="true" >
                    <svg class="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1M2 5h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm8 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
                    </svg>
                </RSummaryCard>
            </div>
            <div class="md:flex gap-2 mt-11">
                <div class="w-full p-2">
                    <div class="relative z-0 mb-6 w-full group">
                        <select class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer">
                            <option value="Invoices">Invoices</option>
                        </select>
                        <label for="floating_type" class="absolute text-sm text-gray-950 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-bold">Type</label>
                    </div>
                </div>
                <div class="w-full p-2">
                    <div class="relative z-0 mb-6 w-full group">
                        <select class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer">
                            <option value="Type 2">Last Week</option>
                            <option value="Type 1">This Month</option>
                            <option value="Type 3">Last Month</option>
                        </select>
                        <label for="floating_type_date" class="absolute text-sm text-gray-950 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-bold">Date</label>
                    </div>
                </div>
            </div>
        </RContainer>
        <RContainer class="w-full md:w-1/3">
            <MiscAccountingChartSales/>
        </RContainer>
    </div>
    <LazyMiscAccountingFormsDrawer page-type="customer"/>
    <RContainer class="w-full" container-label="Customer List">
        <RTable :tbl-headers="headers" :tbl-items="items"/>
    </RContainer>
</template>