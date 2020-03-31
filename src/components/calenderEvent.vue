<template>
  <div class="text-center">
    <div v-if="!event.edit" style="background-color: #84fac1;">
      <p id="event">{{event.details}}</p>
      <p id="links">
        <a href="#" class="link" @click="editEvent(day.id,event.details)">
          <i class="fa fa-edit"></i>
        </a>
        <span>&nbsp; &nbsp; &nbsp;</span>
        <a class="text-danger link" href="#" @click="deletingCalenderEvent(day.id,event.details)">
          <i class="fa fa-trash"></i>
        </a>
      </p>
    </div>
    <div v-if="event.edit">
      <input
        style="margin-bottom:4%;"
        type="text"
        name="text"
        id="text"
        :placeholder="event.details"
        v-model="updatedValue"
      />
      <button
        @click="updatedValues(day.id,event.details,updatedValue)"
        style="margin-bottom:4%;float:right;"
        class="btn btn-sm btn-warning"
        type="button"
      >Save</button>
      <div style="clear:both;"></div>
    </div>
  </div>
</template>

<script>
import { store } from "../store.js";
export default {
  methods: {
    editEvent(dayId, eventDetails) {
      store.eventEdit(dayId, eventDetails);
    },
    updatedValues(dayId, originalValues, newChangedDetail) {
      store.updatingCalenderEvent(dayId, originalValues, newChangedDetail);
    },
    deletingCalenderEvent(dayId, originalValues) {
      store.deletingCalenderEvent(dayId, originalValues);
    }
  },
  name: "calenderEvent",
  props: ["event", "day"],
  data() {
    return {
      updatedValue: ""
    };
  }
};
</script>

<style>
#event {
  font-size: 12px;
  padding-bottom: 0%;
}
#links {
  padding-top: 0%;
  padding-bottom: 0%;
}
.link {
  padding-top: 0%;
  padding-bottom: 0%;
}
</style>
