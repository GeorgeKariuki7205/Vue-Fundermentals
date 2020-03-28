<template>
  <div class="text-center" style="background-color: #84fac1;">
    <p>{{event.details}}</p>
    <p>
      <a href="#"><i class="fa fa-edit"></i></a><span>&nbsp; &nbsp; &nbsp;</span
      ><a class="text-danger" href="#"><i class="fa fa-trash"></i></a>
    </p>
  </div>
</template>

<script>
export default {
    name: 'calenderEvent',
    props:['event']
};

</script>

<style></style>
