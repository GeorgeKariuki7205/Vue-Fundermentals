import {
    seedData
} from './seed.js'

export const store = {
    state: {
        seedData
    },
    // ! This section of the application is used to initialize the mutation methods.

    getActiveDay() {
        return this.state.seedData.find((day) => day.active)
    },

    setActiveDay(dayId) {

        this.state.seedData.map((Obj) => {
            Obj.id === dayId ? Obj.active = true : Obj.active = false
        });

    },
    submitEvent(eventDetails) {
        const activeDay = this.getActiveDay();
        activeDay.events.push({
            "details": eventDetails,
            "edit": false
        });
    },

    eventEdit(dayId, eventDetails) {

        // alert(dayId + eventDetails);
        const dayObj = this.state.seedData.find(day => day.id === dayId);
        const eventObj = dayObj.events.find(event => event.details === eventDetails);
        eventObj.edit = true;

    },

    updatingCalenderEvent(dayId, originalValues, newChangedDetail) {

        const dayObj = this.state.seedData.find((day) => day.id === dayId);
        const eventObj = dayObj.events.find((event) => event.details === originalValues);
        eventObj.details = newChangedDetail;
        eventObj.edit = false;

    },
    deletingCalenderEvent(dayId, originalValues) {
        const dayObj = this.state.seedData.find((day) => day.id === dayId);
        const eventObj = dayObj.events.findIndex((event) => event.details === originalValues);
        dayObj.events.splice(eventObj, 1);

    }
}