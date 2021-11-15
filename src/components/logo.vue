<template>
  <div v-on:click="$router.push({name:'Home'})">
    CINEMA
  </div>
</template>
<script>
export default {
  methods:{
    onClick(){
  }
  }
}
</script>
<style lang="scss" scoped>
  div{
    color:$color-font-logo;
    font-size: 24px;
    font-weight: 700;
  }
</style>