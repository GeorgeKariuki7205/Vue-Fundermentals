<template>
  <!-- <hr/> -->
  <div class="row container">
    <div class="col-6">
      <div class="card">
        <div class="card-body">
          <!-- <h5 class="card-title mb-0">Add New Event.</h5> -->
          <div class="group">
            <input class="googleText" type="text" required v-model="inputEntry" />
            <span class="highlight"></span>
            <span class="bar"></span>
            <label>Add New Event.</label>
          </div>
          <p style="color:red;" v-if="error">You must add a value to the Task to be perfomed.</p>
          <!-- <hr /> -->
          <p class="text-success">
            Day Of Event:
            <strong>{{titleOfActiveDay}}</strong>
          </p>
          <button
            class="btn button"
            type="button"
            style="border:1px solid green"
            @click="submitEvent(inputEntry)"
          >Submit</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "../store.js";
export default {
  name: "addTask",
  computed: {
    titleOfActiveDay() {
      return store.getActiveDay().abbTitle;
    }
  },
  data() {
    return {
      inputEntry: "",
      error: false
    };
  },
  methods: {
    submitEvent(eventDetails) {
      if (eventDetails === "") {
        return (this.error = true);
      } else {
        store.submitEvent(eventDetails);
        this.inputEntry = "";
        return (this.error = false);
      }
    }
  }
};
</script>

<style>
.button {
  color: green;
}
.button:hover {
  background-color: #4caf50; /* Green */
  color: white;
}
</style>
