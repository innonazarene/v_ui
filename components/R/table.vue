<script setup>
    defineProps({
        tblHeaders: {
            type: Array,
            required: true,
        },
        tblItems: {
            type: Array,
            required: true,
        },
        tblSearch: {
            type: Boolean,
            required: false,
            default: true,
        }
    })
    const itemsSelected = ref([]);
    const searchField = ref()
    const searchValue = ref()

    const clear = () => {
        itemsSelected.value = []
    }
    const showRow = (item) => {
        if(item){
            console.log(item)
        }
    }
</script>

<template>

    <div v-if="tblSearch" class="w-full md:flex mb-2 gap-4 justify-center">
        <div class="relative z-0 mb-6 w-full group">
            <select v-model="searchField" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer">
                <option v-for="item in tblHeaders" :key="item.value" :value="item.value">{{ item.text }}</option>
            </select>
            <label class="absolute text-sm text-gray-950 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-bold">Fields</label>
        </div>
        <div class="relative z-0 mb-6 w-full group">
            <input v-model="searchValue" type="text" name="floating_searValue" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer" placeholder=" " required />
            <label for="floating_searValue" class="absolute text-sm text-gray-950 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-bold">Search</label>
        </div>
    </div>

    <EasyDataTable
        buttons-pagination
        show-index
        :rows-per-page="10"
        v-model:items-selected="itemsSelected"
        :headers="tblHeaders"
        :items="tblItems"
        :theme-color='"#191d24"'
        :search-field="searchField"
        :search-value="searchValue"
        @click-row="showRow"
    >
        <template #loading>
            <p>Loading. . . </p>
        </template>

        <template #empty-message>
            <p>Nothing Here. . . </p>
        </template>
    </EasyDataTable>
    {{ itemsSelected }}
    {{ showRow() }}
</template>