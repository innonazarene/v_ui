<script setup>
    import { onMounted } from 'vue'
    import { initFlowbite } from 'flowbite'
    const { currentRoute } = useRouter()

    // initialize components based on data attribute selectors
    onMounted(() => {
        initFlowbite()
    })
    const headers = [
        { text: "Date", value: "date" },
        { text: "Type", value: "type" },
        { text: "No", value: "no" },
        { text: "Customer", value: "customer" },
        { text: "Memo", value: "memo" },
        { text: "Due Date", value: "due_date" },
        { text: "Balance", value: "balance" },
        { text: "Amount", value: "amount" },
        { text: "Status", value: "status" },
    ]
    const items = [
        { date: "12/17/23", Type: "1350.00", no: "1001", customer: "Sample Customer12", memo: "Sample Memo", due_date: "12/17/23", balance: "3,250.00", amount: "1640.00", status: "Paid"},
        { date: "12/17/23", Type: "1350.00", no: "1001", customer: "Sample Customer13", memo: "Sample Memo", due_date: "12/17/23", balance: "3,150.00", amount: "1640.00", status: "Paid"},
        { date: "12/17/23", Type: "1350.00", no: "1001", customer: "Sample Customer14", memo: "Sample Memo", due_date: "12/17/23", balance: "3,250.00", amount: "1640.00", status: "Paid"},
        { date: "12/17/23", Type: "1350.00", no: "1001", customer: "Sample Customer15", memo: "Sample Memo", due_date: "12/17/23", balance: "13,250.00", amount: "1640.00", status: "Paid"},
        { date: "12/17/23", Type: "1350.00", no: "1001", customer: "Sample Customer15", memo: "Sample Memo", due_date: "12/17/23", balance: "13,250.00", amount: "1640.00", status: "Paid"},
        { date: "12/17/23", Type: "1350.00", no: "1001", customer: "Sample Customer17", memo: "Sample Memo", due_date: "12/17/23", balance: "13,250.00", amount: "1640.00", status: "Paid"},
        { date: "12/17/23", Type: "1350.00", no: "1001", customer: "Sample Customer18", memo: "Sample Memo", due_date: "12/17/23", balance: "23,250.00", amount: "1640.00", status: "Paid"},
        { date: "12/17/23", Type: "1350.00", no: "1001", customer: "Sample Customer10", memo: "Sample Memo", due_date: "12/17/23", balance: "3,450.00", amount: "1640.00", status: "Paid"},
        { date: "12/17/23", Type: "1350.00", no: "1001", customer: "Sample Customer123", memo: "Sample Memo", due_date: "12/17/23", balance: "35,250.00", amount: "1640.00", status: "Paid"},
        { date: "12/17/23", Type: "1350.00", no: "1001", customer: "Sample Customer345", memo: "Sample Memo", due_date: "12/17/23", balance: "31,250.00", amount: "1640.00", status: "Paid"},
    ]
</script>
<template>
    <div class="md:flex gap-2 w-full">
        <div class="md:flex gap-2 w-full">
            <RContainer class="w-full md:w-2/3 ">
                <div class="flex justify-start gap-2 p-2">
                    <p class="text-md font-bold">₱ 0.00 Unpaid </p>
                    <p class="text-md">Last 365 days</p>
                </div>
                <div class="flex gap-2">
                    <RSummaryCard class="h-20" card-label="OVERDUE" card-total-summary="0" :has-sign="true" />
                    <RSummaryCard class="h-20" card-label="NOT DUE YET" card-total-summary="0" :has-sign="true" />
                </div>
                <div class="flex justify-start gap-2 p-2">
                    <p class="text-md font-bold">₱ 10.00 Paid </p>
                    <p class="text-md">Last 365 days</p>
                </div>
                <div class="flex gap-2">
                    <RSummaryCard class="h-20" card-label="DEPOSITED" card-total-summary="0" :has-sign="true" />
                    <RSummaryCard class="h-20" card-label="NOT DEPOSITED" card-total-summary="0" :has-sign="true" />
                </div>
                <div class="md:flex gap-2 mt-11">
                    <div class="w-full p-2">
                        <div class="relative z-0 mb-6 w-full group">
                            <select class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer">
                                <option value="">All</option>
                                <option value="">Unpaid</option>
                                <option value="">-Overdue</option>
                                <option value="">-Not due</option>
                                <option value="">Paid</option>
                                <option value="">-Deposited</option>
                                <option value="">-Not Deposited</option>
                                <option value=""></option>
                            </select>
                            <label for="floating_type" class="absolute text-sm text-gray-950 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-bold">Status</label>
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
                <MiscAccountingChartInvoice/>
            </RContainer>
        </div>
    </div>
    <LazyMiscAccountingFormsDrawer page-type="invoice"/>
    <RContainer class="w-full" container-label="INVOICE TRANSACTIONS">
        <RTable :tbl-headers="headers" :tbl-items="items"/>
    </RContainer>
</template>