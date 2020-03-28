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

        this.state.seedData.map((dayObj) => {
            dayObj.id === dayId ? dayObj.active = true : dayObj.active = false
        });

    }


}