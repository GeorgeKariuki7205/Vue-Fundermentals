<template>
  <div>
    <hr />
    <h1 class="text-center" style="color: rgb(0,208,71);">
      Vue Fundermentals Calender.
    </h1>
    <hr />
    <div class="row">
      <!-- This is the section that the calender day will go. -->
      <CalenderDay />
    </div>
  </div>
</template>

<script>
import CalenderDay from "./calenderDay.vue";
export default {
  name: "CalenderWeek",
  components: {
    CalenderDay
  }
};
</script>

<style></style>
