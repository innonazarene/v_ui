<script type>
</script>

<template>
    <form>
        <div class="mb-4">
            <label for="event_title" class="block text-gray-600">Event Title</label>
            <input type="text" id="event_title" name="log-date" class="w-full border rounded py-2 px-3">
        </div>
        <div class="mb-4">
            <label for="event_type" class="block text-gray-600">Event Type</label>
            <select id="event_type" name="" class="w-full border rounded py-2 px-3">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
            </select>
        </div>
        <div class="mb-4">
            <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
            <textarea id="description" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-yellow-500 focus:border-yellow-500 " placeholder="Write your thoughts here..."></textarea>
        </div>
        <div class="flex justify-end mb-2 p-2">
            <RButton btn-label="Add Event">
                <svg class="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1v3m5-3v3m5-3v3M1 7h7m1.506 3.429 2.065 2.065M19 7h-2M2 3h16a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm6 13H6v-2l5.227-5.292a1.46 1.46 0 0 1 2.065 2.065L8 16Z"/>
                </svg>
            </RButton>
        </div>
    </form>
</template>

