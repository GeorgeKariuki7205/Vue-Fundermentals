<template>
  <!-- <hr/> -->
  <div class="row container">
    <div class="col-6">
      <div class="card">
        <div class="card-body">
          <!-- <h5 class="card-title mb-0">Add New Event.</h5> -->
          <div class="group">
            <input type="text" required />
            <span class="highlight"></span>
            <span class="bar"></span>
            <label>Add New Event.</label>
          </div>
          <!-- <hr /> -->
          <p class="text-success">
            Day Of Event:
            <strong>{{titleOfActiveDay}}</strong>
          </p>
          <button class="btn button" type="button" style="border:1px solid green">Submit</button>
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
