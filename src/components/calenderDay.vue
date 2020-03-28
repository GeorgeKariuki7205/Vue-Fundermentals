<template>
  <div class="col-lg-2">
    <div class="card">
      <div class="card-header" style="background-color: rgb(82,82,82);">
        <h5 class="text-center mb-0" style="color: rgb(255,255,255);">{{day.fullTitle}}</h5>
      </div>
      <div class="card-body" style="background-color: rgb(225,187,210);">
        <h6 class="text-muted card-subtitle mb-2">{{day.abbTitle}}</h6>
        <calenderEvent v-for="(event,index) in day.events" :key="index" :event="event" :day="day" />
      </div>

      <!-- this is the section that the calender Event will go. -->
    </div>
  </div>
</template>

<script>
import calenderEvent from "./calenderEvent.vue";
export default {
  name: "CalenderDay",
  components: {
    calenderEvent
  },
  props: ["day"]
};
</script>

<style></style>
