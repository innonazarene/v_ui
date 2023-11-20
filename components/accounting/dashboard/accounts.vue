<template>
    <div class="md:flex gap-2">
        <RContainer class="w-full md:w-1/3" container-label="PROFIT & LOSS">
            <MiscAccountingChartProfitloss />
        </RContainer>
        <RContainer class="w-full md:w-1/3" container-label="INVOICE">
            <MiscAccountingChartInvoice />
        </RContainer>
        <RContainer class="w-full md:w-1/3" container-label="SALES">
            <MiscAccountingChartSales />
        </RContainer>
    </div>
    <div class="md:flex gap-2">
        <RContainer class="w-full md:w-2/4" container-label="EXPENSES">
            <MiscAccountingChartExpenses />
        </RContainer>
        <RContainer class="w-full md:w-2/4" container-label="BANK ACCOUNTS">
            <MiscAccountingBanksCard />
        </RContainer>
    </div>
    <RContainer class="w-full" container-label="QUICK ACTIONS">
        <ShortcutsAccounting />
    </RContainer>
</template>