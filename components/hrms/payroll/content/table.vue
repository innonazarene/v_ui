<script setup>
    const headers = [
        { text: "Name", value: "name" },
        { text: "Basic Pay", value: "basic_pay" },
        { text: "Absences", value: "absences" },
        { text: "Gross", value: "gross" },
        { text: "W/Tax", value: "w_tax" },
        { text: "SSS", value: "sss" },
        { text: "Philhealth", value: "philhealth" },
        { text: "Pagibig", value: "pagibig" },
        { text: "Cash Advance", value: "cash_advance" },
        { text: "Take Home Pay", value: "take_home_pay" },
    ]
    const items = [
        { name: "Stephen Curry1", basic_pay: "1350.00", absences: "1", gross: "315,000", w_tax: "12,000", sss: "1,350.00", philhealth: "3,250.00", pagibig: "640.00", cash_advance: "0.00", take_home_pay:"1,310,000.00"},
        { name: "Stephen Curry2", basic_pay: "2350.00", absences: "1", gross: "215,000", w_tax: "22,000", sss: "1,350.00", philhealth: "3,250.00", pagibig: "640.00", cash_advance: "0.00", take_home_pay:"1,210,000.00"},
        { name: "Stephen Curry3", basic_pay: "3350.00", absences: "1", gross: "115,000", w_tax: "32,000", sss: "1,350.00", philhealth: "7,250.00", pagibig: "640.00", cash_advance: "0.00", take_home_pay:"1,510,000.00"},
        { name: "Stephen Curry4", basic_pay: "4350.00", absences: "1", gross: "515,000", w_tax: "52,000", sss: "1,350.00", philhealth: "9,250.00", pagibig: "640.00", cash_advance: "0.00", take_home_pay:"1,410,000.00"},
    ]
</script>
<template>
    <RTable :tbl-headers="headers" :tbl-items="items"/>
</template>