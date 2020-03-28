<template>
  <div class="text-center" style="background-color: #84fac1;">
    <p id="event">{{event.details}}</p>
    <p id="links">
      <a href="#" class="link">
        <i class="fa fa-edit"></i>
      </a>
      <span>&nbsp; &nbsp; &nbsp;</span>
      <a class="text-danger link" href="#">
        <i class="fa fa-trash"></i>
      </a>
    </p>
  </div>
</template>

<script>
export default {
  name: "calenderEvent",
  props: ["event"]
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
