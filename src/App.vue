<template>
  <div id="app">
    <CalenderWeek />
    <hr />
    <div id="addingTask">
      <AddTask />
    </div>
  </div>
</template>

<script>
import CalenderWeek from "./components/calenderWeek.vue";
import AddTask from "./components/addTask.vue";
export default {
  name: "App",
  components: {
    CalenderWeek,
    AddTask
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin-left: 2%;
  margin-right: 2%;
}
#addingTask{
  text-align: center;
  /* color: red; */
}
</style>
