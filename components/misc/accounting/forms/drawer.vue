<script setup>
    import { onMounted } from 'vue'
    import { initFlowbite } from 'flowbite'

    // initialize components based on data attribute selectors
    onMounted(() => {
        initFlowbite()
    })
    defineProps({
        pageType: {
            type: String,
            required: true,
        },
    })

const randomID = ref(Math.floor(Math.random() * 1000) + 1)


</script>

<template>
    <div class="grid grid-cols-2 md:flex w-full py-2 gap-2 md:justify-end">
        <RButton v-if="pageType === 'all' || pageType === 'invoice'" :key="randomID" btn-label="Invoice" type="button" :data-drawer-target="randomID +'-drawer-invoice'" :data-drawer-show="randomID +'-drawer-invoice'" data-drawer-placement="top" :aria-controls="randomID +'-drawer-invoice'" >
            <svg class="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M19 4h-1a1 1 0 1 0 0 2v11a1 1 0 0 1-2 0V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a1 1 0 0 0-1-1ZM3 4a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4Zm9 13H4a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-3H4a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-3H4a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-3h-2a1 1 0 0 1 0-2h2a1 1 0 1 1 0 2Zm0-3h-2a1 1 0 0 1 0-2h2a1 1 0 1 1 0 2Z"/>
                <path d="M6 5H5v1h1V5Z"/>
            </svg>
        </RButton>
        <RButton v-if="pageType === 'all' || pageType === 'payment'" :key="randomID" btn-label="Payment" type="button" :data-drawer-target="randomID +'-drawer-payment'" :data-drawer-show="randomID +'-drawer-payment'" data-drawer-placement="top" :aria-controls="randomID +'-drawer-payment'">
            <svg class="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1M2 5h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm8 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
            </svg>
        </RButton>
        <RButton v-if="pageType === 'all' || pageType === 'reciept'" :key="randomID" btn-label="Sales Reciept" type="button" :data-drawer-target="randomID +'-drawer-reciept'" :data-drawer-show="randomID +'-drawer-reciept'" data-drawer-placement="top" :aria-controls="randomID +'-drawer-reciept'">
            <svg class="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 20">
                <path d="M13.383.076a1 1 0 0 0-1.09.217L11 1.586 9.707.293a1 1 0 0 0-1.414 0L7 1.586 5.707.293a1 1 0 0 0-1.414 0L3 1.586 1.707.293A1 1 0 0 0 0 1v18a1 1 0 0 0 1.707.707L3 18.414l1.293 1.293a1 1 0 0 0 1.414 0L7 18.414l1.293 1.293a1 1 0 0 0 1.414 0L11 18.414l1.293 1.293A1 1 0 0 0 14 19V1a1 1 0 0 0-.617-.924ZM10 15H4a1 1 0 1 1 0-2h6a1 1 0 0 1 0 2Zm0-4H4a1 1 0 1 1 0-2h6a1 1 0 1 1 0 2Zm0-4H4a1 1 0 0 1 0-2h6a1 1 0 1 1 0 2Z"/>
            </svg>
        </RButton>
        <RButton v-if="pageType === 'all' || pageType === 'customer'" :key="randomID" btn-label="Customer" type="button" :data-drawer-target="randomID +'-drawer-customer'" :data-drawer-show="randomID +'-drawer-customer'" data-drawer-placement="top" :aria-controls="randomID +'-drawer-customer'">
            <svg class="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 18">
                <path d="M7 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm2 1H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"/>
            </svg>
        </RButton>
        <RButton v-if="pageType === 'all' || pageType === 'refund'" :key="randomID" btn-label="Refund Receipt" type="button" :data-drawer-target="randomID +'-drawer-refund'" :data-drawer-show="randomID +'-drawer-refund'" data-drawer-placement="top" :aria-controls="randomID +'-drawer-refund'">
            <svg class="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM5 12a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0-3a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0-3a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm10 6H9a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2Zm0-3H9a1 1 0 0 1 0-2h6a1 1 0 1 1 0 2Zm0-3H9a1 1 0 0 1 0-2h6a1 1 0 1 1 0 2Z"/>
            </svg>
        </RButton>
    </div>

    <div :id="randomID +'-drawer-invoice'" v-if="pageType === 'all' || pageType === 'invoice'" :key="randomID" class="h-full overflow-y-scroll fixed top-0 left-0 right-0 z-40 w-full py-14 transition-transform -translate-y-full bg-white " tabindex="-1" :aria-labelledby="randomID +'-drawer-invoice'">
        <div class="w-full flex justify-end gap-2 p-4 md:p-2">
            <RButton btn-label="X" type="button" :data-drawer-hide="randomID +'-drawer-invoice'" :aria-controls="randomID +'-drawer-invoice'" />
        </div>
        <AccountingSalesFormsInvoice />
    </div>
    <div :id="randomID +'-drawer-payment'" v-if="pageType === 'all' || pageType === 'payment'" :key="randomID" class="h-full overflow-y-scroll fixed top-0 left-0 right-0 z-40 w-full py-14 transition-transform -translate-y-full bg-white " tabindex="-1" :aria-labelledby="randomID +'-drawer-payment'">
        <div class="w-full flex justify-end p-4 md:p-2">
            <RButton btn-label="X" type="button" :data-drawer-hide="randomID +'-drawer-payment'" :aria-controls="randomID +'-drawer-payment'" />
        </div>
        <AccountingSalesFormsPayment />
    </div>
    <div :id="randomID +'-drawer-reciept'" v-if="pageType === 'all' || pageType === 'reciept'" :key="randomID" class="h-full overflow-y-scroll fixed top-0 left-0 right-0 z-40 w-full py-14 transition-transform -translate-y-full bg-white " tabindex="-1" :aria-labelledby="randomID +'-drawer-reciept'">
        <div class="w-full flex justify-end p-4 md:p-2">
            <RButton btn-label="X" type="button" :data-drawer-hide="randomID +'-drawer-reciept'" :aria-controls="randomID +'-drawer-reciept'" />
        </div>
    </div>
    <div :id="randomID +'-drawer-customer'" v-if="pageType === 'all' || pageType === 'customer'" :key="randomID" class="h-full overflow-y-scroll fixed top-0 left-0 right-0 z-40 w-full py-14 transition-transform -translate-y-full bg-white " tabindex="-1" :aria-labelledby="randomID +'-drawer-customer'">
        <div class="w-full flex justify-end p-4 md:p-2">
            <RButton btn-label="X" type="button" :data-drawer-hide="randomID +'-drawer-customer'" :aria-controls="randomID +'-drawer-customer'" />
        </div>
    </div>
    <div :id="randomID +'-drawer-refund'" v-if="pageType === 'all' || pageType === 'refund'" :key="randomID" class="h-full overflow-y-scroll fixed top-0 left-0 right-0 z-40 w-full py-14 transition-transform -translate-y-full bg-white " tabindex="-1" :aria-labelledby="randomID +'-drawer-refund'">
        <div class="w-full flex justify-end p-4 md:p-2">
            <RButton btn-label="X" type="button" :data-drawer-hide="randomID +'-drawer-refund'" :aria-controls="randomID +'-drawer-refund'" />
        </div>
    </div>
</template>