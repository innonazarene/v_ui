
<script lang="ts">
import FullCalendar from '@fullcalendar/vue3'
import interactionPlugin from '@fullcalendar/interaction'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'


export default {
    components: {
    FullCalendar
    },
    data() {
    return {
        calendarOptions: {
            plugins: [interactionPlugin, dayGridPlugin, timeGridPlugin],
            headerToolbar: {
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth',
            },
            initialView: 'dayGridMonth',
            nowIndicator: true,
            editable: true,
            selectable: true,
            initialEvents: [
                { title: 'nice event', start: new Date() }
            ],
            dateClick: (info) => {
                alert('clicked ' + info.dateStr);
            },
            select: (info) => {
                alert('selected ' + info.startStr + ' to ' + info.endStr);
            },
        }
    }
    }
}
</script>

<template>
    <FullCalendar :options='calendarOptions' />
</template>



<style scoped>
</style>