<template>
  <div @click="$router.push({name:'Search'})">
    <span class="material-icons">search</span>
  </div>
</template>
<style lang="scss" scoped>
  div{
    display: flex;
    justify-content: center;
    align-items: center;
    color:$color-font;
    .material-icons{
      font-size: 32px !important;
      &:hover{
        color:$color-font-logo;
      }
    }
  }
</style>