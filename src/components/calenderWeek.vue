<template>
  <div>
    <hr />
    <h1 class="text-center" style="color: rgb(0,208,71);">Vue Fundermentals Calender.</h1>
    <hr />
    <div class="row">
      <!-- This is the section that the calender day will go. -->
      <CalenderDay v-for="day in sharedData.seedData" :key="day.id" :day = "day"/>
    </div>
  </div>
</template>

<script>
import CalenderDay from "./calenderDay.vue";
import { store } from "../store.js";
export default {
  name: "CalenderWeek",
  components: {
    CalenderDay
  },
  data() {
    return {
      sharedData: store.state
    };
  }
};
</script>

<style></style>
